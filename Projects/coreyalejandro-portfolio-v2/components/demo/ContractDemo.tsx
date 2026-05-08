"use client";

import { useState } from "react";
import { CheckCircle2, FileText, ShieldAlert, User, Calendar, DollarSign, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

type ContractStatus = "draft" | "review" | "active" | "completed";

interface ContractClause {
  id: string;
  title: string;
  content: string;
  status: "pending" | "approved" | "contested";
}

interface ContractParty {
  name: string;
  role: string;
  status: "verified" | "pending";
}

export function ContractDemo() {
  const [status, setStatus] = useState<ContractStatus>("draft");
  const [selectedClause, setSelectedClause] = useState<string | null>(null);

  const contractClauses: ContractClause[] = [
    {
      id: "1",
      title: "Safety Protocol Compliance",
      content: "Agent must adhere to safety protocols and report any deviations immediately to the oversight system.",
      status: "approved"
    },
    {
      id: "2", 
      title: "Data Usage Agreement",
      content: "User data shall only be processed for explicitly stated purposes and retained no longer than necessary.",
      status: "pending"
    },
    {
      id: "3",
      title: "Intervention Triggers",
      content: "System will intervene when confidence exceeds 90% without user verification steps completed.",
      status: "contested"
    },
    {
      id: "4",
      title: "Audit Rights",
      content: "Both parties retain the right to audit interactions and request clarification on decisions.",
      status: "approved"
    }
  ];

  const parties: ContractParty[] = [
    { name: "Corey Alejandro", role: "User", status: "verified" },
    { name: "Agent Sentinel", role: "AI System", status: "verified" }
  ];

  const statusColors = {
    draft: "border-yellow-500 bg-yellow-50 text-yellow-800",
    review: "border-blue-500 bg-blue-50 text-blue-800", 
    active: "border-green-500 bg-green-50 text-green-800",
    completed: "border-gray-500 bg-gray-50 text-gray-800"
  };

  const clauseStatusColors = {
    pending: "border-gray-300 bg-gray-50",
    approved: "border-green-300 bg-green-50", 
    contested: "border-red-300 bg-red-50"
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-border bg-muted/30 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">AI Safety Contract</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Formal agreement between user and AI system for safe interaction protocols
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge 
              tone={status === 'draft' ? 'neutral' : status === 'review' ? 'prototype' : status === 'active' ? 'verified' : 'neutral'}
              className={statusColors[status]}
            >
              {status.toUpperCase()}
            </Badge>
            <Button size="sm" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Contract Metadata */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 border-b border-border bg-background/50">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Effective Date</p>
            <p className="text-sm font-semibold">May 8, 2026</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Parties</p>
            <p className="text-sm font-semibold">2 Verified</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Risk Level</p>
            <p className="text-sm font-semibold text-warning">Medium</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground">Value</p>
            <p className="text-sm font-semibold">Safety Protocol</p>
          </div>
        </div>
      </div>

      {/* Parties */}
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold mb-4">Contracting Parties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {parties.map((party, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-muted/30">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                party.status === 'verified' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
              }`}>
                {party.status === 'verified' ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <AlertTriangle className="h-5 w-5" />
                )}
              </div>
              <div>
                <p className="font-semibold">{party.name}</p>
                <p className="text-sm text-muted-foreground">{party.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clauses */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Contract Clauses</h3>
        <div className="space-y-3">
          {contractClauses.map((clause) => (
            <div 
              key={clause.id}
              className={`border rounded-lg p-4 cursor-pointer transition-colors hover:bg-muted/50 ${
                clauseStatusColors[clause.status]
              } ${selectedClause === clause.id ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setSelectedClause(selectedClause === clause.id ? null : clause.id)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
                      CLAUSE {clause.id}
                    </span>
                    <h4 className="font-semibold">{clause.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {clause.content}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge 
                    tone={clause.status === 'approved' ? 'verified' : clause.status === 'contested' ? 'prototype' : 'neutral'}
                    className="text-xs"
                  >
                    {clause.status.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="border-t border-border bg-muted/30 p-6">
        <div className="flex flex-wrap gap-3">
          <Button onClick={() => setStatus('review')} variant="outline">
            Review Contract
          </Button>
          <Button onClick={() => setStatus('active')} variant="default">
            Activate Contract
          </Button>
          <Button onClick={() => setStatus('completed')} variant="secondary">
            Mark Completed
          </Button>
        </div>
      </div>
    </Card>
  );
}
