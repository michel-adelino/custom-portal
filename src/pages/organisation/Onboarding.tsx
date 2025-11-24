import ModulePage from '../ModulePage';
import { useState } from 'react';
import { CheckCircle2, Circle, FileText, Users, Laptop, BookOpen, Award, Clock } from 'lucide-react';

interface OnboardingStep {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  resources: string[];
  duration?: string;
}

const Onboarding = () => {
  const [activePhase, setActivePhase] = useState<string>('pre-start');

  const phases: Record<string, { title: string; description: string; steps: OnboardingStep[] }> = {
    'pre-start': {
      title: 'Pre-Start (Week -1)',
      description: 'Preparation before the first day',
      steps: [
        { 
          id: 1, 
          title: 'Welcome Email & Documentation', 
          completed: true,
          description: 'Send welcome package with company info, first-day schedule, and required documents',
          resources: ['Welcome Packet PDF', 'Company Handbook', 'First Day Schedule'],
        },
        { 
          id: 2, 
          title: 'IT Equipment Preparation', 
          completed: true,
          description: 'Prepare laptop, access cards, and necessary equipment',
          resources: ['Equipment Checklist'],
        },
        { 
          id: 3, 
          title: 'Workspace Setup', 
          completed: true,
          description: 'Prepare desk, workspace, and office supplies',
          resources: ['Workspace Setup Guide'],
        },
      ],
    },
    'week-1': {
      title: 'Week 1: Foundation',
      description: 'Initial orientation and setup',
      steps: [
        { 
          id: 4, 
          title: 'Welcome & Orientation Session', 
          completed: true,
          description: 'Meet with HR and learn about company culture, values, and history',
          resources: ['Company Culture Video', 'Organizational Chart', 'Employee Directory'],
          duration: '2 hours',
        },
        { 
          id: 5, 
          title: 'Company Policies & Procedures', 
          completed: true,
          description: 'Review employee handbook, code of conduct, and key policies',
          resources: ['Employee Handbook', 'Code of Conduct', 'Policies Library'],
          duration: '1.5 hours',
        },
        { 
          id: 6, 
          title: 'System Access Setup', 
          completed: false,
          description: 'Set up email, software tools, and system access credentials',
          resources: ['IT Setup Guide', 'Software List', 'Access Request Form'],
          duration: '1 hour',
        },
        { 
          id: 7, 
          title: 'Team Introduction', 
          completed: false,
          description: 'Meet team members, manager, and key stakeholders',
          resources: ['Team Directory', 'Org Chart'],
          duration: '1 hour',
        },
      ],
    },
    'week-2-4': {
      title: 'Weeks 2-4: Integration',
      description: 'Deep dive into role and processes',
      steps: [
        { 
          id: 8, 
          title: 'Role-Specific Training', 
          completed: false,
          description: 'Complete training modules specific to your role and responsibilities',
          resources: ['Role Training Modules', 'Job Description', 'Success Criteria'],
          duration: '8 hours',
        },
        { 
          id: 9, 
          title: 'Process & Workflow Training', 
          completed: false,
          description: 'Learn standard operating procedures and key workflows',
          resources: ['SOP Library', 'Process Flowcharts', 'Workflow Guides'],
          duration: '4 hours',
        },
        { 
          id: 10, 
          title: 'First Project Assignment', 
          completed: false,
          description: 'Receive and begin working on first project with mentor support',
          resources: ['Project Brief', 'Mentor Contact Info'],
          duration: 'Ongoing',
        },
        { 
          id: 11, 
          title: '30-Day Check-in Meeting', 
          completed: false,
          description: 'Review progress, address questions, and set goals',
          resources: ['30-Day Review Template'],
          duration: '1 hour',
        },
      ],
    },
    'month-2-3': {
      title: 'Months 2-3: Growth',
      description: 'Independence and development',
      steps: [
        { 
          id: 12, 
          title: 'Independent Project Work', 
          completed: false,
          description: 'Take ownership of projects with reduced supervision',
          resources: ['Project Management Guide'],
        },
        { 
          id: 13, 
          title: 'Cross-Functional Collaboration', 
          completed: false,
          description: 'Work with other departments and teams',
          resources: ['Collaboration Guidelines'],
        },
        { 
          id: 14, 
          title: '90-Day Performance Review', 
          completed: false,
          description: 'Comprehensive review of performance and goal setting',
          resources: ['Performance Review Template', 'Goal Setting Guide'],
        },
      ],
    },
  };

  const totalSteps = Object.values(phases).reduce((acc, phase) => acc + phase.steps.length, 0);
  const completedSteps = Object.values(phases).reduce(
    (acc, phase) => acc + phase.steps.filter(s => s.completed).length, 
    0
  );
  const progress = Math.round((completedSteps / totalSteps) * 100);

  return (
    <ModulePage 
      title="Onboarding"
      description="Employee onboarding checklist, resources, and progress tracking"
    >
      <div className="space-y-6">
        {/* Progress Overview */}
        <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Onboarding Progress</h2>
              <p className="text-gray-600">{completedSteps} of {totalSteps} steps completed</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary-600">{progress}%</div>
              <div className="text-sm text-gray-600">Complete</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-primary-600 h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Phase Navigation */}
        <div className="card">
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.entries(phases).map(([key, phase]) => (
              <button
                key={key}
                onClick={() => setActivePhase(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activePhase === key
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {phase.title}
              </button>
            ))}
          </div>

          {/* Active Phase Content */}
          {phases[activePhase as keyof typeof phases] && (
            <div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {phases[activePhase as keyof typeof phases].title}
                </h3>
                <p className="text-gray-600">
                  {phases[activePhase as keyof typeof phases].description}
                </p>
              </div>

              <div className="space-y-4">
                {phases[activePhase as keyof typeof phases].steps.map((step) => (
                  <div
                    key={step.id}
                    className={`p-5 border-2 rounded-lg transition-all ${
                      step.completed
                        ? 'border-green-200 bg-green-50'
                        : 'border-gray-200 bg-white hover:border-primary-300'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        {step.completed ? (
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                        ) : (
                          <Circle className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className={`font-semibold ${
                              step.completed ? 'text-gray-600 line-through' : 'text-gray-900'
                            }`}>
                              {step.title}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                          </div>
                          {step.duration && (
                            <div className="flex items-center gap-1 text-sm text-gray-500 ml-4">
                              <Clock className="w-4 h-4" />
                              {step.duration}
                            </div>
                          )}
                        </div>

                        {step.resources && step.resources.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <div className="flex items-center gap-2 mb-2">
                              <FileText className="w-4 h-4 text-gray-500" />
                              <span className="text-sm font-medium text-gray-700">Resources:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {step.resources.map((resource, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs text-gray-700 hover:border-primary-300 hover:text-primary-600 cursor-pointer transition-colors"
                                >
                                  {resource}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Resources */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Handbook</div>
                <div className="text-xs text-gray-600">View</div>
              </div>
            </div>
          </div>
          <div className="card hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Team Directory</div>
                <div className="text-xs text-gray-600">View</div>
              </div>
            </div>
          </div>
          <div className="card hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Laptop className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">IT Support</div>
                <div className="text-xs text-gray-600">Contact</div>
              </div>
            </div>
          </div>
          <div className="card hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Award className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">FAQs</div>
                <div className="text-xs text-gray-600">View</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Onboarding;

