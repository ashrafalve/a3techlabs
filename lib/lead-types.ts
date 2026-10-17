export type Lead = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  project_type: string | null;
  message: string;
  created_at: string;
};

export type NewLead = {
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  projectType: string | null;
  message: string;
};

export type LeadRow = Lead & { createdLabel: string };
