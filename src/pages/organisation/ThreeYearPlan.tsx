import ModulePage from '../ModulePage';
import { Target, TrendingUp, Users, Award, Building2, Globe, Zap } from 'lucide-react';

const ThreeYearPlan = () => {
  const years = [
    {
      year: 1,
      title: 'Foundation',
      theme: 'Building Strong Foundations',
      icon: <Building2 className="w-6 h-6" />,
      color: 'blue',
      objectives: [
        'Establish robust operational infrastructure',
        'Build core team of 100+ professionals',
        'Develop and implement key business processes',
        'Achieve $10M in annual revenue',
        'Establish strong customer base (500+ customers)',
      ],
      keyInitiatives: [
        { name: 'Team Building', progress: 75, description: 'Recruit and onboard top talent across all departments' },
        { name: 'Process Development', progress: 60, description: 'Create and document standard operating procedures' },
        { name: 'Technology Infrastructure', progress: 80, description: 'Build scalable technology platform' },
        { name: 'Market Entry', progress: 70, description: 'Establish presence in primary markets' },
      ],
      metrics: {
        revenue: '$10M',
        customers: '500+',
        employees: '100+',
        marketShare: '5%',
      },
    },
    {
      year: 2,
      title: 'Growth',
      theme: 'Scaling Operations',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'green',
      objectives: [
        'Scale operations to support 3x growth',
        'Expand into 3 new geographic markets',
        'Launch 2 new product lines',
        'Achieve $30M in annual revenue',
        'Grow customer base to 1,500+',
      ],
      keyInitiatives: [
        { name: 'Market Expansion', progress: 0, description: 'Enter new regional markets' },
        { name: 'Product Development', progress: 0, description: 'Launch innovative new products' },
        { name: 'Partnership Development', progress: 0, description: 'Build strategic partnerships' },
        { name: 'Operational Excellence', progress: 0, description: 'Optimize processes for scale' },
      ],
      metrics: {
        revenue: '$30M',
        customers: '1,500+',
        employees: '250+',
        marketShare: '12%',
      },
    },
    {
      year: 3,
      title: 'Excellence',
      theme: 'Market Leadership',
      icon: <Award className="w-6 h-6" />,
      color: 'purple',
      objectives: [
        'Achieve market leadership position',
        'Establish industry best practices',
        'Optimize operations for maximum efficiency',
        'Achieve $60M in annual revenue',
        'Maintain 95%+ customer satisfaction',
      ],
      keyInitiatives: [
        { name: 'Market Leadership', progress: 0, description: 'Become recognized industry leader' },
        { name: 'Innovation Center', progress: 0, description: 'Establish R&D and innovation hub' },
        { name: 'Sustainability Program', progress: 0, description: 'Implement comprehensive sustainability initiatives' },
        { name: 'Global Presence', progress: 0, description: 'Expand to international markets' },
      ],
      metrics: {
        revenue: '$60M',
        customers: '3,000+',
        employees: '400+',
        marketShare: '20%',
      },
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-600' },
      green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-600' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <ModulePage 
      title="3 Year Plan"
      description="Strategic plan and roadmap for the next 3 years (2024-2026)"
    >
      <div className="space-y-6">
        {/* Overview */}
        <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
          <h2 className="text-xl font-bold text-gray-900 mb-3">3-Year Strategic Vision</h2>
          <p className="text-gray-700 mb-4">
            Our 3-year plan outlines a clear path from foundation building to market leadership. 
            Each year builds upon the previous year's achievements, creating momentum for sustainable growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-1">3x</div>
              <div className="text-sm text-gray-600">Revenue Growth Target</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-1">6x</div>
              <div className="text-sm text-gray-600">Customer Growth Target</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl font-bold text-primary-600 mb-1">4x</div>
              <div className="text-sm text-gray-600">Team Growth Target</div>
            </div>
          </div>
        </div>

        {/* Year Plans */}
        {years.map((yearPlan, index) => {
          const colors = getColorClasses(yearPlan.color);
          return (
            <div key={index} className={`card border-l-4 ${colors.border} ${colors.bg}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 bg-white rounded-lg ${colors.text}`}>
                  {yearPlan.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">Year {yearPlan.year}: {yearPlan.title}</h2>
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">
                      {yearPlan.year === 1 ? 'Current' : 'Upcoming'}
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{yearPlan.theme}</p>
                </div>
              </div>

              {/* Objectives */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Key Objectives
                </h3>
                <ul className="space-y-2">
                  {yearPlan.objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className={`${colors.text} mt-1`}>✓</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Initiatives */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Key Initiatives
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {yearPlan.keyInitiatives.map((initiative, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{initiative.name}</h4>
                        {initiative.progress > 0 && (
                          <span className="text-xs text-gray-600">{initiative.progress}%</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{initiative.description}</p>
                      {initiative.progress > 0 && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${colors.border.replace('border-', 'bg-')}`}
                            style={{ width: `${initiative.progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metrics */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Success Metrics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-xl font-bold text-gray-900 mb-1">{yearPlan.metrics.revenue}</div>
                    <div className="text-xs text-gray-600">Annual Revenue</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-xl font-bold text-gray-900 mb-1">{yearPlan.metrics.customers}</div>
                    <div className="text-xs text-gray-600">Customers</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-xl font-bold text-gray-900 mb-1">{yearPlan.metrics.employees}</div>
                    <div className="text-xs text-gray-600">Employees</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                    <div className="text-xl font-bold text-gray-900 mb-1">{yearPlan.metrics.marketShare}</div>
                    <div className="text-xs text-gray-600">Market Share</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Strategic Pillars */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Strategic Pillars Across All Years</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <Users className="w-6 h-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">People & Culture</h3>
              <p className="text-sm text-gray-600">Invest in talent, build strong culture, and develop leaders</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <Globe className="w-6 h-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Market Expansion</h3>
              <p className="text-sm text-gray-600">Grow market presence and enter new markets strategically</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <Zap className="w-6 h-6 text-primary-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Drive innovation in products, processes, and services</p>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default ThreeYearPlan;

