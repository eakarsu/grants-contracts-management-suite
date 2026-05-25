export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIGrantManagement', ownership: 'Grants source capabilities and workflows', coverage: ['Grants', 'Contracts', 'Applicants'] },
  { name: 'AIContractLifecycleManager', ownership: 'Contracts source capabilities and workflows', coverage: ['Awards', 'Budgets', 'Milestones'] },
  { name: 'AISubrecipientMonitoring', ownership: 'Applicants source capabilities and workflows', coverage: ['Subrecipients', 'Compliance', 'Invoices'] },
  { name: 'AIProgramReporting', ownership: 'Awards source capabilities and workflows', coverage: ['Amendments', 'Performance', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Grants', value: '84', note: 'Active' },
  { label: 'Contracts', value: '61', note: 'Open' },
  { label: 'Applicants', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Grants operating view', 'Contracts operating view', 'Applicants operating view', 'Awards operating view', 'Budgets operating view', 'Milestones operating view', 'Subrecipients operating view', 'Compliance operating view'];
export const workflowHighlights = ['Grants workflow with records, approvals, audit, and reporting', 'Contracts workflow with records, approvals, audit, and reporting', 'Applicants workflow with records, approvals, audit, and reporting', 'Awards workflow with records, approvals, audit, and reporting', 'Budgets workflow with records, approvals, audit, and reporting'];
