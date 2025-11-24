export interface User {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'manager' | 'staff';
  department: string;
}

export interface CallLog {
  id: string;
  type: 'call' | 'sms';
  phoneNumber: string;
  contactName?: string;
  direction: 'outgoing' | 'incoming';
  duration?: number; // in seconds
  timestamp: Date;
  notes?: string;
  userId: string;
  userName: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  children?: NavigationItem[];
}

