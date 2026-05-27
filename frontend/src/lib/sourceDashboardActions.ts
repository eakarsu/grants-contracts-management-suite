export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "grant-rfp-proposal",
    "label": "Grant RFP Proposal",
    "description": "Open Grant RFP Proposal workflows elevated from AIGrantWriter, AIProposalSOWGenerator, AIConstructionBidAnalyzer.",
    "href": "/grant-writing",
    "sourceProjects": [
      "AIGrantWriter",
      "AIProposalSOWGenerator",
      "AIConstructionBidAnalyzer"
    ],
    "examples": [
      "Grant Writing",
      "RFP Response",
      "SOW Generator",
      "Submission Tracker"
    ],
    "count": 3
  }
];
