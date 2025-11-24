import ModulePage from '../ModulePage';
import { Calendar, Phone, Mail, Clock, CheckCircle2, User, Building2 } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const FollowUps = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const followUps = [
    {
      id: 1,
      type: 'call',
      customer: 'ABC Corp',
      contact: 'John Smith',
      subject: 'Follow up on proposal',
      dueDate: new Date(2024, 1, 1),
      status: 'pending',
      priority: 'high',
      notes: 'Discuss pricing and implementation timeline',
      assignedTo: 'Sales Team',
    },
    {
      id: 2,
      type: 'email',
      customer: 'Tech Solutions',
      contact: 'Mike Chen',
      subject: 'Send additional product information',
      dueDate: new Date(2024, 1, 2),
      status: 'completed',
      priority: 'medium',
      notes: 'Customer requested more details on enterprise features',
      assignedTo: 'Sales Team',
      completedDate: new Date(2024, 0, 30),
    },
    {
      id: 3,
      type: 'meeting',
      customer: 'XYZ Ltd',
      contact: 'Sarah Johnson',
      subject: 'Product demonstration',
      dueDate: new Date(2024, 1, 5),
      status: 'pending',
      priority: 'high',
      notes: 'Schedule demo for next week',
      assignedTo: 'Sales Team',
    },
    {
      id: 4,
      type: 'call',
      customer: 'Global Industries',
      contact: 'Emily Davis',
      subject: 'Contract negotiation follow-up',
      dueDate: new Date(2024, 0, 31),
      status: 'overdue',
      priority: 'high',
      notes: 'Urgent - contract terms discussion',
      assignedTo: 'Sales Manager',
    },
  ];

  const filteredFollowUps = filterStatus === 'all' 
    ? followUps 
    : followUps.filter(f => f.status === filterStatus);

  const stats = {
    total: followUps.length,
    pending: followUps.filter(f => f.status === 'pending').length,
    overdue: followUps.filter(f => f.status === 'overdue').length,
    completed: followUps.filter(f => f.status === 'completed').length,
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'call': return <Phone className="w-5 h-5" />;
      case 'email': return <Mail className="w-5 h-5" />;
      case 'meeting': return <Calendar className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'call': return 'bg-blue-100 text-blue-600';
      case 'email': return 'bg-purple-100 text-purple-600';
      case 'meeting': return 'bg-green-100 text-green-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <ModulePage title="Follow Ups" description="Sales follow-up tasks and reminders">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600 mt-1">Total Follow-ups</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            <div className="text-sm text-slate-600 mt-1">Pending</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-red-600">{stats.overdue}</div>
            <div className="text-sm text-slate-600 mt-1">Overdue</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{stats.completed}</div>
            <div className="text-sm text-slate-600 mt-1">Completed</div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex gap-2">
            {['all', 'pending', 'overdue', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterStatus === status
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Follow-ups List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Follow-ups ({filteredFollowUps.length})</h2>
          <div className="space-y-4">
            {filteredFollowUps.map((followUp) => {
              const isOverdue = followUp.status === 'overdue' || 
                (followUp.status === 'pending' && followUp.dueDate < new Date());
              
              return (
                <div key={followUp.id} className={`p-6 border rounded-xl transition-all ${
                  isOverdue ? 'border-red-300 bg-red-50' : 'border-slate-200 hover:border-primary-300 hover:shadow-md'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${getTypeColor(followUp.type)}`}>
                          {getTypeIcon(followUp.type)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{followUp.subject}</h3>
                          <div className="flex items-center gap-3 mt-1">
                            <div className="flex items-center gap-1 text-sm text-slate-600">
                              <Building2 className="w-4 h-4" />
                              {followUp.customer}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-slate-600">
                              <User className="w-4 h-4" />
                              {followUp.contact}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-12 space-y-2">
                        <p className="text-sm text-slate-700">{followUp.notes}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Due: {format(followUp.dueDate, 'MMM d, yyyy')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Assigned: {followUp.assignedTo}</span>
                          </div>
                          {followUp.completedDate && (
                            <div className="flex items-center gap-2 text-emerald-600">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Completed: {format(followUp.completedDate, 'MMM d, yyyy')}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                        followUp.priority === 'high' ? 'bg-red-100 text-red-700' :
                        followUp.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {followUp.priority}
                      </span>
                      <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                        followUp.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                        followUp.status === 'overdue' || isOverdue ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {followUp.status === 'overdue' || isOverdue ? 'Overdue' : followUp.status}
                      </span>
                    </div>
                  </div>
                  {followUp.status !== 'completed' && (
                    <div className="flex gap-2 ml-12">
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold">
                        Mark Complete
                      </button>
                      <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                        Reschedule
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default FollowUps;

