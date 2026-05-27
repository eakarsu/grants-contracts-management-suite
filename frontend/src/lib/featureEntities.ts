export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['grants', 'Grants Records', 'Grants priority queue', 'Open', 'Grants exception list', 'Programs Lead', '$0'],
  ['contracts', 'Contracts Records', 'Contracts priority queue', 'Review', 'Contracts exception list', 'Programs Lead', '$0'],
  ['applicants', 'Applicants Records', 'Applicants priority queue', 'Action needed', 'Applicants exception list', 'Programs Lead', '$0'],
  ['awards', 'Awards Records', 'Awards priority queue', 'Open', 'Awards exception list', 'Programs Lead', '$0'],
  ['budgets', 'Budgets Records', 'Budgets priority queue', 'Review', 'Budgets exception list', 'Operations Lead', '$0'],
  ['milestones', 'Milestones Records', 'Milestones priority queue', 'Action needed', 'Milestones exception list', 'Operations Lead', '$0'],
  ['subrecipients', 'Subrecipients Records', 'Subrecipients priority queue', 'Open', 'Subrecipients exception list', 'Operations Lead', '$0'],
  ['compliance', 'Compliance Records', 'Compliance priority queue', 'Review', 'Compliance exception list', 'Operations Lead', '$0'],
  ['invoices', 'Invoices Records', 'Invoices priority queue', 'Action needed', 'Invoices exception list', 'Governance Lead', '$0'],
  ['amendments', 'Amendments Records', 'Amendments priority queue', 'Open', 'Amendments exception list', 'Governance Lead', '$0'],
  ['performance', 'Performance Records', 'Performance priority queue', 'Review', 'Performance exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ["grant-writing","Grant Writing Records","Grant Writing operating queue","Open","Grant Writing follow-up list","Grant RFP Proposal","$0"],
  ["rfp-response","RFP Response Records","RFP Response operating queue","Review","RFP Response follow-up list","Grant RFP Proposal","$0"],
  ["sow-generator","SOW Generator Records","SOW Generator operating queue","Review","SOW Generator follow-up list","Grant RFP Proposal","$0"],
  ["submission-tracker","Submission Tracker Records","Submission Tracker operating queue","Review","Submission Tracker follow-up list","Grant RFP Proposal","$0"],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
