import ModulePage from '../ModulePage';
import { Wrench, Calendar, Clock, User, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const InstallJobs = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const installJobs = [
    {
      id: 'INST-001',
      customer: 'ABC Corp',
      product: 'Enterprise System',
      scheduledDate: new Date(2024, 1, 5),
      scheduledTime: '09:00 AM',
      estimatedDuration: '6 hours',
      status: 'scheduled',
      assignedTeam: 'Installation Team A',
      location: '123 Main St, City',
      contact: 'John Smith',
      phone: '+1-555-0101',
      materials: ['System Unit', 'Cables', 'Mounting Hardware'],
    },
    {
      id: 'INST-002',
      customer: 'Tech Solutions',
      product: 'Premium Package',
      scheduledDate: new Date(2024, 1, 8),
      scheduledTime: '10:00 AM',
      estimatedDuration: '4 hours',
      status: 'scheduled',
      assignedTeam: 'Installation Team B',
      location: '456 Tech Ave, City',
      contact: 'Mike Chen',
      phone: '+1-555-0102',
      materials: ['System Unit', 'Accessories'],
    },
    {
      id: 'INST-003',
      customer: 'XYZ Ltd',
      product: 'Standard Installation',
      scheduledDate: new Date(2024, 1, 3),
      scheduledTime: '08:00 AM',
      estimatedDuration: '5 hours',
      status: 'completed',
      assignedTeam: 'Installation Team A',
      location: '789 Business Blvd, City',
      contact: 'Sarah Johnson',
      phone: '+1-555-0103',
      materials: ['System Unit', 'Cables'],
      completedDate: new Date(2024, 1, 3),
      actualDuration: '5 hours',
    },
  ];

  const filteredJobs = filterStatus === 'all' 
    ? installJobs 
    : installJobs.filter(job => job.status === filterStatus);

  const stats = {
    total: installJobs.length,
    scheduled: installJobs.filter(j => j.status === 'scheduled').length,
    completed: installJobs.filter(j => j.status === 'completed').length,
    thisWeek: installJobs.filter(j => {
      const weekStart = new Date();
      weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      return j.scheduledDate >= weekStart && j.status === 'scheduled';
    }).length,
  };

  return (
    <ModulePage title="Install Jobs" description="Installation job management and tracking">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600 mt-1">Total Jobs</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-blue-600">{stats.scheduled}</div>
            <div className="text-sm text-slate-600 mt-1">Scheduled</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{stats.completed}</div>
            <div className="text-sm text-slate-600 mt-1">Completed</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-primary-600">{stats.thisWeek}</div>
            <div className="text-sm text-slate-600 mt-1">This Week</div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex gap-2">
            {['all', 'scheduled', 'completed'].map((status) => (
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

        {/* Install Jobs List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Installation Jobs ({filteredJobs.length})</h2>
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div key={job.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Wrench className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{job.id}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Building2 className="w-4 h-4" />
                            {job.customer}
                          </div>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm font-semibold text-primary-600">{job.product}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 space-y-2">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">{format(job.scheduledDate, 'MMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.scheduledTime} • Est: {job.estimatedDuration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{job.assignedTeam}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div>
                          <span className="font-semibold">Contact:</span> {job.contact} • {job.phone}
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm font-semibold text-slate-700">Materials Required:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {job.materials.map((material, idx) => (
                            <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                      {job.completedDate && (
                        <div className="flex items-center gap-2 text-sm text-emerald-600 mt-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Completed: {format(job.completedDate, 'MMM d, yyyy')} • Duration: {job.actualDuration}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                    job.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {job.status}
                  </span>
                </div>
                {job.status !== 'completed' && (
                  <div className="flex gap-2 ml-12">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold">
                      Start Installation
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                      Reschedule
                    </button>
                    <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                      View Details
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default InstallJobs;

