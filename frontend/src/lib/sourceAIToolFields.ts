export type SourceAIToolField = {
  name: string;
  label: string;
  type: string;
  defaultValue: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  source: string;
};

export const sourceAIToolFieldsByToolId: Record<string, SourceAIToolField[]> = {
  "grant-rfp-proposal-copilot": [
    {
      "name": "opportunity_text",
      "label": "Opportunity Text",
      "type": "textarea",
      "defaultValue": "Paste grant, RFP, or bid requirements.",
      "placeholder": "Enter opportunity text",
      "options": [],
      "required": true,
      "source": "AIGrantWriter, AIProposalSOWGenerator, AIConstructionBidAnalyzer"
    },
    {
      "name": "organization_profile",
      "label": "Organization Profile",
      "type": "textarea",
      "defaultValue": "Describe applicant, capabilities, past performance, and constraints.",
      "placeholder": "Enter organization profile",
      "options": [],
      "required": true,
      "source": "AIGrantWriter, AIProposalSOWGenerator, AIConstructionBidAnalyzer"
    },
    {
      "name": "response_type",
      "label": "Response Type",
      "type": "select",
      "defaultValue": "RFP response",
      "placeholder": "Enter response type",
      "options": [
        "Grant narrative",
        "RFP response",
        "SOW",
        "Bid review"
      ],
      "required": true,
      "source": "AIGrantWriter, AIProposalSOWGenerator, AIConstructionBidAnalyzer"
    },
    {
      "name": "deadline",
      "label": "Deadline",
      "type": "text",
      "defaultValue": "2026-06-30",
      "placeholder": "Enter deadline",
      "options": [],
      "required": true,
      "source": "AIGrantWriter, AIProposalSOWGenerator, AIConstructionBidAnalyzer"
    }
  ]
};
