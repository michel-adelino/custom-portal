import ModulePage from '../ModulePage';
import { Calendar, Clock, CheckCircle2, AlertCircle, User, Building2, Phone, Mail } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const SchedulingFollowUps = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const followUps = [
    {
      id: 'FU-001',
      type: 'call',
      customer: 'ABC Corp',
      contact: 'John Smith',
      subject: 'Follow up on installation completion',
      dueDate: new Date(2024, 1, 6),
      status: 'pending',
      priority: 'high',
      relatedJob: 'INST-001',
      notes: 'Confirm installation was successful and customer satisfaction',
    },
    {
      id: 'FU-002',
      type: 'email',
      customer: 'Tech Solutions',
      contact: 'Mike Chen',
      subject: 'Send installation documentation',
      dueDate: new Date(2024, 1, 7),
      status: 'pending',
      priority: 'medium',
      relatedJob: 'INST-002',
      notes: 'Email user manuals and warranty information',
    },
    {
      id: 'FU-003',
      type: 'call',
      customer: 'XYZ Ltd',
      contact: 'Sarah Johnson',
      subject: 'Post-installation check-in',
      dueDate: new Date(2024, 1, 4),
      status: 'completed',
      priority: 'medium',
      relatedJob: 'INST-003',
      notes: 'Customer confirmed everything working perfectly',
      completedDate: new Date(2024, 1, 4),
    },
    {
      id: 'FU-004',
      type: 'visit',
      customer: 'Global Industries',
      contact: 'Emily Davis',
      subject: 'Schedule maintenance visit',
      dueDate: new Date(2024, 1, 8),
      status: 'pending',
      priority: 'high',
      relatedJob: 'MAINT-001',
      notes: 'Customer requested quarterly maintenance schedule',
    },
  ];

  const filteredFollowUps = filterStatus === 'all' 
    ? followUps 
    : followUps.filter(f => f.status === filterStatus);

  const stats = {
    total: followUps.length,
    pending: followUps.filter(f => f.status === 'pending').length,
    overdue: followUps.filter(f => f.status === 'pending' && f.dueDate < new Date()).length,
    completed: followUps.filter(f => f.status === 'completed').length,
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'call': return <Phone className="w-5 h-5" />;
      case 'email': return <Mail className="w-5 h-5" />;
      case 'visit': return <Calendar className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'call': return 'bg-blue-100 text-blue-600';
      case 'email': return 'bg-purple-100 text-purple-600';
      case 'visit': return 'bg-green-100 text-green-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <ModulePage title="Follow Ups" description="Scheduling follow-up tasks and customer check-ins">
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
            {['all', 'pending', 'completed'].map((status) => (
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
              const isOverdue = followUp.status === 'pending' && followUp.dueDate < new Date();
              
              return (
                <div key={followUp.id} className={`p-6 border rounded-xl transition-all ${
                  isOverdue ? 'border-red-300 bg-red-50' :
                  followUp.status === 'completed' ? 'border-emerald-200 bg-emerald-50' :
                  'border-slate-200 hover:border-primary-300 hover:shadow-md'
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
                            {followUp.relatedJob && (
                              <>
                                <span className="text-sm text-slate-500">•</span>
                                <span className="text-sm text-slate-600">Job: {followUp.relatedJob}</span>
                              </>
                            )}
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
                          {followUp.completedDate && (
                            <div className="flex items-center gap-2 text-emerald-600">
                              <CheckCircle2 className="w-4 h-4" />
                              <span>Completed: {format(followUp.completedDate, 'MMM d, yyyy')}</span>
                            </div>
                          )}
                          {isOverdue && (
                            <div className="flex items-center gap-2 text-red-600 font-semibold">
                              <AlertCircle className="w-4 h-4" />
                              <span>Overdue</span>
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
                        isOverdue ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {isOverdue ? 'Overdue' : followUp.status}
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

export default SchedulingFollowUps;

