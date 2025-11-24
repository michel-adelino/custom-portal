import ModulePage from '../ModulePage';
import { Factory, Clock, User, Calendar, AlertCircle, CheckCircle2, Package } from 'lucide-react';
import { format } from 'date-fns';

const Queue = () => {
  const jobs = [
    {
      id: 'JOB-001',
      product: 'Custom Widget A',
      quantity: 100,
      priority: 'high',
      status: 'in-queue',
      assignedTo: 'Production Team 1',
      estimatedStart: new Date(2024, 1, 1),
      estimatedComplete: new Date(2024, 1, 5),
      materials: ['Material A', 'Material B'],
    },
    {
      id: 'JOB-002',
      product: 'Standard Component X',
      quantity: 500,
      priority: 'medium',
      status: 'in-progress',
      assignedTo: 'Production Team 2',
      estimatedStart: new Date(2024, 0, 28),
      estimatedComplete: new Date(2024, 1, 2),
      materials: ['Material C'],
      progress: 65,
    },
    {
      id: 'JOB-003',
      product: 'Premium Product Y',
      quantity: 50,
      priority: 'high',
      status: 'in-queue',
      assignedTo: 'Production Team 1',
      estimatedStart: new Date(2024, 1, 6),
      estimatedComplete: new Date(2024, 1, 10),
      materials: ['Material A', 'Material D', 'Material E'],
    },
    {
      id: 'JOB-004',
      product: 'Basic Item Z',
      quantity: 1000,
      priority: 'low',
      status: 'completed',
      assignedTo: 'Production Team 3',
      estimatedStart: new Date(2024, 0, 20),
      estimatedComplete: new Date(2024, 0, 25),
      completedDate: new Date(2024, 0, 24),
      materials: ['Material B'],
    },
  ];

  const stats = {
    total: jobs.length,
    inQueue: jobs.filter(j => j.status === 'in-queue').length,
    inProgress: jobs.filter(j => j.status === 'in-progress').length,
    completed: jobs.filter(j => j.status === 'completed').length,
  };

  return (
    <ModulePage title="Production Queue" description="Production job queue and manufacturing schedule">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600 mt-1">Total Jobs</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-blue-600">{stats.inQueue}</div>
            <div className="text-sm text-slate-600 mt-1">In Queue</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-yellow-600">{stats.inProgress}</div>
            <div className="text-sm text-slate-600 mt-1">In Progress</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{stats.completed}</div>
            <div className="text-sm text-slate-600 mt-1">Completed</div>
          </div>
        </div>

        {/* Production Queue */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Production Queue</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Factory className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{job.id}</h3>
                        <p className="text-sm text-slate-600 mt-1">{job.product}</p>
                      </div>
                    </div>
                    <div className="ml-12 space-y-2">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Package className="w-4 h-4" />
                          <span className="font-semibold">Quantity: {job.quantity}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{job.assignedTo}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Start: {format(job.estimatedStart, 'MMM d')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Complete: {format(job.estimatedComplete, 'MMM d')}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-600">Materials:</span>
                        {job.materials.map((material, idx) => (
                          <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium">
                            {material}
                          </span>
                        ))}
                      </div>
                      {job.progress !== undefined && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-slate-600">Progress</span>
                            <span className="text-sm font-bold text-slate-900">{job.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-3">
                            <div
                              className="bg-primary-600 h-3 rounded-full transition-all"
                              style={{ width: `${job.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      job.priority === 'high' ? 'bg-red-100 text-red-700' :
                      job.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {job.priority}
                    </span>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      job.status === 'in-queue' ? 'bg-blue-100 text-blue-700' :
                      job.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {job.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Queue;

