import ModulePage from '../ModulePage';
import { Target, TrendingUp, CheckCircle2, Circle, Calendar, BookOpen, Award, Users } from 'lucide-react';
import { format } from 'date-fns';

const GrowthPlans = () => {
  const growthPlans = [
    {
      id: 'GP-001',
      title: 'Leadership Development Plan',
      category: 'Leadership',
      status: 'in-progress',
      startDate: new Date(2024, 0, 1),
      targetDate: new Date(2024, 5, 30),
      progress: 45,
      goals: [
        { id: 1, description: 'Complete Leadership Fundamentals course', status: 'completed', dueDate: new Date(2024, 0, 15) },
        { id: 2, description: 'Lead cross-functional project team', status: 'in-progress', dueDate: new Date(2024, 2, 1) },
        { id: 3, description: 'Attend leadership conference', status: 'planned', dueDate: new Date(2024, 4, 1) },
        { id: 4, description: 'Mentor junior team member', status: 'planned', dueDate: new Date(2024, 5, 1) },
      ],
      milestones: [
        { date: new Date(2024, 2, 1), description: 'Project leadership milestone' },
        { date: new Date(2024, 5, 30), description: 'Plan completion' },
      ],
    },
    {
      id: 'GP-002',
      title: 'Technical Skills Enhancement',
      category: 'Technical',
      status: 'in-progress',
      startDate: new Date(2024, 0, 1),
      targetDate: new Date(2024, 11, 31),
      progress: 30,
      goals: [
        { id: 1, description: 'Complete Advanced Data Analysis course', status: 'in-progress', dueDate: new Date(2024, 2, 1) },
        { id: 2, description: 'Obtain industry certification', status: 'planned', dueDate: new Date(2024, 6, 1) },
        { id: 3, description: 'Contribute to open-source project', status: 'planned', dueDate: new Date(2024, 8, 1) },
      ],
      milestones: [
        { date: new Date(2024, 6, 1), description: 'Certification milestone' },
      ],
    },
    {
      id: 'GP-003',
      title: 'Communication Skills',
      category: 'Soft Skills',
      status: 'completed',
      startDate: new Date(2023, 6, 1),
      targetDate: new Date(2023, 11, 31),
      progress: 100,
      goals: [
        { id: 1, description: 'Complete Effective Communication course', status: 'completed', dueDate: new Date(2023, 8, 1) },
        { id: 2, description: 'Present at team meeting', status: 'completed', dueDate: new Date(2023, 9, 15) },
        { id: 3, description: 'Lead client presentation', status: 'completed', dueDate: new Date(2023, 10, 1) },
      ],
      milestones: [
        { date: new Date(2023, 11, 31), description: 'Plan completed' },
      ],
    },
  ];

  const activePlans = growthPlans.filter(p => p.status === 'in-progress');
  const completedPlans = growthPlans.filter(p => p.status === 'completed');
  const totalGoals = growthPlans.reduce((sum, p) => sum + p.goals.length, 0);
  const completedGoals = growthPlans.reduce((sum, p) => 
    sum + p.goals.filter(g => g.status === 'completed').length, 0
  , 0);

  return (
    <ModulePage title="Growth Plans" description="Personal development and growth plans">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Target className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{growthPlans.length}</div>
                <div className="text-sm text-slate-600">Total Plans</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{activePlans.length}</div>
                <div className="text-sm text-slate-600">Active</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{completedPlans.length}</div>
                <div className="text-sm text-slate-600">Completed</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Award className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{completedGoals}/{totalGoals}</div>
                <div className="text-sm text-slate-600">Goals Completed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Plans */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Growth Plans</h2>
          <div className="space-y-6">
            {growthPlans.map((plan) => (
              <div key={plan.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Target className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{plan.title}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm font-medium text-primary-600">{plan.category}</span>
                          <span className="text-sm text-slate-500">•</span>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Calendar className="w-4 h-4" />
                            {format(plan.startDate, 'MMM yyyy')} - {format(plan.targetDate, 'MMM yyyy')}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 space-y-4">
                      {/* Progress */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-slate-600">Overall Progress</span>
                          <span className="text-sm font-bold text-slate-900">{plan.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${
                              plan.progress >= 75 ? 'bg-emerald-600' :
                              plan.progress >= 50 ? 'bg-blue-600' :
                              'bg-yellow-600'
                            }`}
                            style={{ width: `${plan.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Goals */}
                      <div>
                        <div className="text-sm font-semibold text-slate-900 mb-3">Goals:</div>
                        <div className="space-y-2">
                          {plan.goals.map((goal) => (
                            <div key={goal.id} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                              {goal.status === 'completed' ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                              ) : goal.status === 'in-progress' ? (
                                <Circle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              ) : (
                                <Circle className="w-5 h-5 text-slate-300 mt-0.5 flex-shrink-0" />
                              )}
                              <div className="flex-1">
                                <span className={`text-sm ${
                                  goal.status === 'completed' ? 'text-slate-500 line-through' : 'text-slate-900'
                                }`}>
                                  {goal.description}
                                </span>
                                <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                                  <Calendar className="w-3 h-3" />
                                  <span>Due: {format(goal.dueDate, 'MMM d, yyyy')}</span>
                                </div>
                              </div>
                              <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                                goal.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                                goal.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                                'bg-slate-100 text-slate-700'
                              }`}>
                                {goal.status.replace('-', ' ')}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Milestones */}
                      {plan.milestones && plan.milestones.length > 0 && (
                        <div>
                          <div className="text-sm font-semibold text-slate-900 mb-2">Key Milestones:</div>
                          <div className="space-y-2">
                            {plan.milestones.map((milestone, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                <Award className="w-4 h-4 text-primary-600" />
                                <span>{format(milestone.date, 'MMM d, yyyy')}: {milestone.description}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                    plan.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {plan.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default GrowthPlans;

