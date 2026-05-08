"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  GripHorizontal,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type KanbanColumn = "BACKLOG" | "IN_PROGRESS" | "BLOCKED" | "DONE";

type ContractTask = {
  id: string;
  title: string;
  column: KanbanColumn;
  status?: string;
};

const tasks: ContractTask[] = [
  { id: "AC-006", title: "structured evidence logs", column: "BACKLOG" },
  { id: "AC-007", title: "paired artifact verification", column: "BACKLOG" },
  {
    id: "AC-005",
    title: "scripts/test_guardian_readonly.py created",
    column: "DONE",
    status: "All 6 test cases pass (6/6)",
  },
  { id: "INVARIANT_READ_ONLY_01", title: "blocks 100%", column: "DONE" },
  { id: "HALT-002", title: "FAIL_HALT emitted 100%", column: "DONE" },
];

const columnLabels: Record<KanbanColumn, string> = {
  BACKLOG: "Backlog",
  IN_PROGRESS: "In Progress",
  BLOCKED: "Blocked",
  DONE: "Done",
};

function getTasksForColumn(column: KanbanColumn) {
  return tasks.filter((task) => task.column === column);
}

function InlineCode({ children }: { children: string }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.8em] text-primary">
      {children}
    </code>
  );
}

function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: string;
  tone?: "neutral" | "pass" | "fail" | "warn";
}) {
  const className =
    tone === "pass"
      ? "border-success/30 bg-success/10 text-success"
      : tone === "fail"
        ? "border-destructive/30 bg-destructive/10 text-destructive"
        : tone === "warn"
          ? "border-warning/30 bg-warning/10 text-warning"
          : "border-border bg-muted text-muted-foreground";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium",
        className,
      )}
    >
      {children}
    </span>
  );
}

function CollapsibleSection({
  title,
  children,
  defaultExpanded = false,
  sectionId,
  className,
}: {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  sectionId: string;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className={cn("border-b border-border last:border-b-0", className)}>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={sectionId}
        className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left transition hover:bg-muted/50"
      >
        <span className="text-sm font-semibold text-foreground">{title}</span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        )}
      </button>
      {expanded && (
        <div id={sectionId} className="px-4 pb-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ContractWindowDemo() {
  const [selectedFinding, setSelectedFinding] = useState<"run" | "evidence">(
    "run",
  );

  const doneCount = useMemo(
    () => tasks.filter((task) => task.column === "DONE").length,
    [],
  );

  // Drag + resize state
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 520, height: 640 });
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, initX: 0, initY: 0 });
  const resizeRef = useRef({ startX: 0, startY: 0, initW: 520, initH: 640 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initX: offset.x,
      initY: offset.y,
    };
  }, [offset]);

  const handleResizeStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setResizing(true);
    resizeRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      initW: size.width,
      initH: size.height,
    };
  }, [size]);

  useEffect(() => {
    if (!dragging && !resizing) return;

    const onMove = (e: MouseEvent) => {
      if (dragging) {
        const dx = e.clientX - dragRef.current.startX;
        const dy = e.clientY - dragRef.current.startY;
        setOffset({
          x: dragRef.current.initX + dx,
          y: dragRef.current.initY + dy,
        });
      }
      if (resizing) {
        const dw = e.clientX - resizeRef.current.startX;
        const dh = e.clientY - resizeRef.current.startY;
        setSize({
          width: Math.max(320, resizeRef.current.initW + dw),
          height: Math.max(240, resizeRef.current.initH + dh),
        });
      }
    };

    const onUp = () => {
      setDragging(false);
      setResizing(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, [dragging, resizing]);

  // Clamp offset on mount / resize so it stays in viewport
  useEffect(() => {
    const clamp = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      setOffset((prev) => ({
        x: Math.min(Math.max(prev.x, -vw + 100), vw - 100),
        y: Math.min(Math.max(prev.y, -vh + 100), vh - 100),
      }));
    };
    clamp();
    window.addEventListener("resize", clamp);
    return () => window.removeEventListener("resize", clamp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full lg:absolute lg:right-0 lg:top-0"
    >
      <div
        className={cn(
          "flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40",
          dragging && "cursor-grabbing",
        )}
        style={{
          width: size.width,
          height: size.height,
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        {/* Header — drag handle */}
        <div
          className="flex cursor-grab items-center justify-between border-b border-border bg-muted/80 px-4 py-3 active:cursor-grabbing"
          onMouseDown={handleDragStart}
        >
          <div className="flex items-center gap-2">
            <GripHorizontal className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <p className="text-sm font-semibold text-foreground">
              Contract Window
            </p>
          </div>
          <div className="flex items-center gap-2">
            <StatusBadge tone="pass">exit code 0</StatusBadge>
            <StatusBadge tone="pass">{`${doneCount} done signals`}</StatusBadge>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {/* 1. Intent */}
          <CollapsibleSection
            title="Intent"
            defaultExpanded
            sectionId="cw-intent"
          >
            <p className="text-sm leading-6 text-muted-foreground">
              <strong className="text-foreground">Intent:</strong> Build a
              Contract Window demo that keeps task state, evidence, halt
              conditions, acceptance criteria, and V&amp;T status inspectable
              during AI-assisted work.
            </p>
          </CollapsibleSection>

          {/* 2. Kanban */}
          <CollapsibleSection
            title="Kanban"
            defaultExpanded
            sectionId="cw-kanban"
          >
            <p className="mb-3 text-xs text-muted-foreground">
              Governed by a C-RSP contract. Records status of the tasks from the
              C-RSP build.
            </p>
            <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-border md:grid-cols-4">
              {(
                ["BACKLOG", "IN_PROGRESS", "BLOCKED", "DONE"] as const
              ).map((column) => (
                <div
                  key={column}
                  className="min-h-24 border-b border-border md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <div className="border-b border-border bg-muted px-3 py-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    {columnLabels[column]}
                  </div>
                  <div className="space-y-3 p-3">
                    {getTasksForColumn(column).length > 0 ? (
                      getTasksForColumn(column).map((task) => (
                        <div key={task.id} className="text-sm leading-5">
                          <p className="font-semibold text-foreground">
                            {task.id}
                          </p>
                          <p className="text-muted-foreground">
                            {task.title}
                          </p>
                          {task.status ? (
                            <p className="mt-1 text-xs text-muted-foreground">
                              {task.status}
                            </p>
                          ) : null}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground">—</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* 3. Kanban Notes */}
          <CollapsibleSection
            title="Kanban Notes"
            sectionId="cw-kanban-notes"
          >
            <p className="mb-2 text-xs text-muted-foreground">
              Records details of the task.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="rounded-lg border border-border bg-muted/40 p-3">
                <p className="font-semibold text-foreground">AC-005</p>
                <p>
                  Guardian readonly test harness. 6/6 test cases pass.
                  INVARIANT_READ_ONLY_01 blocks 100%. HALT-002 FAIL_HALT emitted
                  100%.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/40 p-3">
                <p className="font-semibold text-foreground">AC-006</p>
                <p>
                  Structured evidence logs for CI integration. Pending
                  implementation.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-muted/40 p-3">
                <p className="font-semibold text-foreground">AC-007</p>
                <p>
                  Paired artifact verification. Requires human-readable +
                  machine-legible artifact pairs.
                </p>
              </div>
            </div>
          </CollapsibleSection>

          {/* 4. V&T */}
          <CollapsibleSection title="V&T" sectionId="cw-vt">
            <p className="mb-3 text-xs text-muted-foreground">
              Verification &amp; Truth status.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <VtCard title="Exists">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    scripts/test_guardian_readonly.py exists at TLC root scripts
                    directory.
                  </li>
                  <li>
                    Script is non-empty and contains executable guardian harness
                    logic.
                  </li>
                  <li>
                    Evidence report written to
                    verification/test_guardian_readonly_timestamp.json.
                  </li>
                </ul>
              </VtCard>
              <VtCard title="Not Claimed">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    AC-005 does not transition contract to Frozen or Active
                    status.
                  </li>
                  <li>
                    No MCP server integration is claimed; test bypasses MCP by
                    design.
                  </li>
                </ul>
              </VtCard>
              <VtCard title="Non-existent">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    No human_crypto_signature exists in FAIL test case params.
                  </li>
                  <li>
                    The invariant fires because the required signature is
                    absent.
                  </li>
                </ul>
              </VtCard>
              <div className="md:col-span-2">
                <VtCard title="Functional Status">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Script exits cleanly with code 0.</li>
                    <li>6/6 test cases pass.</li>
                    <li>INVARIANT_READ_ONLY_01 blocks 100%.</li>
                    <li>HALT-002 FAIL_HALT emitted 100%.</li>
                  </ul>
                </VtCard>
              </div>
            </div>
          </CollapsibleSection>

          {/* 5. Next Steps */}
          <CollapsibleSection
            title="Next Steps"
            sectionId="cw-next-steps"
          >
            <p className="mb-2 text-xs text-muted-foreground">
              Ranked next steps in order of importance.
            </p>
            <ol className="list-decimal space-y-3 pl-5 text-sm leading-6 text-muted-foreground">
              <li>
                Run{" "}
                <InlineCode>
                  python3 scripts/test_guardian_readonly.py
                </InlineCode>{" "}
                in CI to lock AC-005 as authoritative evidence.
              </li>
              <li>
                Execute AC-006 with{" "}
                <InlineCode>
                  scripts/verify_legacy_chain.py --root .
                </InlineCode>{" "}
                so every intercepted call emits timestamped structured evidence.
              </li>
              <li>
                Execute AC-007 with{" "}
                <InlineCode>
                  ./scripts/verify_crsp_template_bundle.sh
                </InlineCode>{" "}
                to validate paired human-readable and machine-legible
                artifacts.
              </li>
            </ol>
          </CollapsibleSection>

          {/* 6. Intent Score */}
          <CollapsibleSection
            title="Intent Score"
            defaultExpanded
            sectionId="cw-intent-score"
          >
            <div className="space-y-3">
              <div className="rounded-lg border border-success/30 bg-success/10 p-3">
                <div className="flex items-center gap-2">
                  <StatusBadge tone="pass">PASS</StatusBadge>
                  <span className="text-sm font-semibold text-success">
                    Intent aligned
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Second-pass review confirms all work remains scoped to the
                  Contract Window demo. No drift detected. Task states,
                  evidence paths, and V&amp;T claims align with the stated
                  intent.
                </p>
                <p className="mt-2 text-xs font-semibold text-foreground">
                  Proceed to Next Steps.
                </p>
              </div>
            </div>
          </CollapsibleSection>

          {/* Legacy test-case & evidence content preserved in Kanban Notes / V&T */}
          <div className="border-t border-border px-4 py-3">
            <div className="mb-2 flex gap-2">
              <button
                type="button"
                onClick={() => setSelectedFinding("run")}
                className={cn(
                  "rounded-lg border px-3 py-2 text-sm transition",
                  selectedFinding === "run"
                    ? "border-border bg-muted text-foreground"
                    : "border-border bg-card text-muted-foreground hover:bg-muted",
                )}
              >
                Live run output
              </button>
              <button
                type="button"
                onClick={() => setSelectedFinding("evidence")}
                className={cn(
                  "rounded-lg border px-3 py-2 text-sm transition",
                  selectedFinding === "evidence"
                    ? "border-border bg-muted text-foreground"
                    : "border-border bg-card text-muted-foreground hover:bg-muted",
                )}
              >
                Evidence surface
              </button>
            </div>

            {selectedFinding === "run" ? (
              <div className="rounded-lg bg-black p-4 font-mono text-xs leading-6 text-muted-foreground">
                <p>
                  ALL TESTS PASSED (6/6) — INVARIANT_READ_ONLY_01 blocks 100%:
                  YES, HALT-002 FAIL_HALT emitted 100%: YES.
                </p>
                <p>
                  Evidence report written to
                  verification/test_guardian_readonly_timestamp.json.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-sm leading-6 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Exists:</strong>{" "}
                  scripts/test_guardian_readonly.py exists, is non-empty, and
                  contains executable harness logic.
                </p>
                <p>
                  <strong className="text-foreground">Verified against:</strong>{" "}
                  <InlineCode>CRSP-001.json</InlineCode>,{" "}
                  <InlineCode>src/guardian.py</InlineCode>, and{" "}
                  <InlineCode>GuardianState.FAIL_HALT</InlineCode>.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Resize handle */}
        <div
          className="absolute bottom-0 right-0 h-4 w-4 cursor-se-resize"
          onMouseDown={handleResizeStart}
          aria-label="Resize contract window"
          role="button"
          tabIndex={0}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="absolute bottom-1 right-1 text-muted-foreground"
          >
            <path
              d="M8 10L10 10L10 8M5 10L10 5M2 10L10 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function VtCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-border bg-muted/40 p-3">
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h4>
      {children}
    </div>
  );
}
