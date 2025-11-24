import ModulePage from '../ModulePage';
import { CheckCircle2, Circle, Clock, Calendar } from 'lucide-react';

const Roadmap = () => {
  const quarters = [
    {
      quarter: 'Q1 2024',
      status: 'completed',
      theme: 'Foundation & Launch',
      milestones: [
        { title: 'Launch new product line', completed: true },
        { title: 'Expand market presence in key regions', completed: true },
        { title: 'Hire 15 new team members', completed: true },
        { title: 'Establish strategic partnerships', completed: true },
      ],
      metrics: [
        { label: 'Revenue Growth', value: '+25%', target: '+20%' },
        { label: 'New Customers', value: '150', target: '120' },
      ],
    },
    {
      quarter: 'Q2 2024',
      status: 'in-progress',
      theme: 'Digital Transformation',
      milestones: [
        { title: 'Digital transformation initiatives', completed: true },
        { title: 'Process automation implementation', completed: true },
        { title: 'Customer portal launch', completed: false },
        { title: 'Data analytics platform setup', completed: false },
      ],
      metrics: [
        { label: 'Efficiency Gain', value: '+15%', target: '+10%' },
        { label: 'Customer Satisfaction', value: '4.6/5', target: '4.5/5' },
      ],
    },
    {
      quarter: 'Q3 2024',
      status: 'planned',
      theme: 'Expansion & Growth',
      milestones: [
        { title: 'International market entry', completed: false },
        { title: 'Partnership development program', completed: false },
        { title: 'New service offerings launch', completed: false },
        { title: 'Regional office expansion', completed: false },
      ],
      metrics: [
        { label: 'Market Expansion', value: 'TBD', target: '3 new regions' },
        { label: 'Partnerships', value: 'TBD', target: '10+ partners' },
      ],
    },
    {
      quarter: 'Q4 2024',
      status: 'planned',
      theme: 'Optimization & Scale',
      milestones: [
        { title: 'Operational efficiency optimization', completed: false },
        { title: 'Scale infrastructure for growth', completed: false },
        { title: 'Annual planning and strategy review', completed: false },
        { title: 'Team expansion and development', completed: false },
      ],
      metrics: [
        { label: 'Operational Efficiency', value: 'TBD', target: '+20%' },
        { label: 'Team Size', value: 'TBD', target: '200+ employees' },
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50';
      case 'in-progress':
        return 'border-blue-500 bg-blue-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  return (
    <ModulePage 
      title="Business Roadmap"
      description="Strategic roadmap, quarterly milestones, and key initiatives"
    >
      <div className="space-y-6">
        {/* Roadmap Overview */}
        <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-primary-600" />
            <h2 className="text-xl font-bold text-gray-900">2024 Strategic Roadmap</h2>
          </div>
          <p className="text-gray-700">
            Our roadmap outlines key strategic initiatives, milestones, and goals for 2024. 
            Each quarter focuses on specific themes that build upon previous achievements 
            and set the foundation for future growth.
          </p>
        </div>

        {/* Quarterly Roadmaps */}
        {quarters.map((quarter, index) => (
          <div key={index} className={`card border-l-4 ${getStatusColor(quarter.status)}`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {getStatusIcon(quarter.status)}
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{quarter.quarter}</h3>
                  <p className="text-sm text-gray-600 mt-1">Theme: {quarter.theme}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                quarter.status === 'completed' 
                  ? 'bg-green-100 text-green-700'
                  : quarter.status === 'in-progress'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700'
              }`}>
                {quarter.status.replace('-', ' ')}
              </span>
            </div>

            {/* Milestones */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Key Milestones</h4>
              <div className="space-y-2">
                {quarter.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 bg-white rounded">
                    {milestone.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                    )}
                    <span className={milestone.completed ? 'text-gray-600 line-through' : 'text-gray-900'}>
                      {milestone.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Key Metrics</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quarter.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <span className={`text-sm font-semibold ${
                        metric.value === 'TBD' ? 'text-gray-400' : 'text-primary-600'
                      }`}>
                        {metric.value}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">Target: {metric.target}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Annual Goals Summary */}
        <div className="card bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">2024 Annual Goals Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-1">40%</div>
              <div className="text-sm text-gray-600">Revenue Growth Target</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">New Customers Target</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction Target</div>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Roadmap;

