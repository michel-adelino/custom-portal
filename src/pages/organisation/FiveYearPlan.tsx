import ModulePage from '../ModulePage';
import { Target, TrendingUp, Globe, Award, Building2, Zap, Users, BarChart3 } from 'lucide-react';

const FiveYearPlan = () => {
  const phases = [
    {
      period: 'Years 1-2',
      title: 'Foundation & Growth',
      theme: 'Establishing Market Presence',
      icon: <Building2 className="w-6 h-6" />,
      color: 'blue',
      focus: 'Build strong foundation and achieve initial growth',
      keyGoals: [
        'Establish market presence in primary regions',
        'Build operational excellence and core processes',
        'Grow team to 250+ professionals',
        'Achieve $30M annual revenue',
        'Build customer base of 1,500+',
        'Establish brand recognition',
      ],
      milestones: [
        'Complete Series A funding',
        'Launch flagship products',
        'Establish key partnerships',
        'Build core technology platform',
      ],
    },
    {
      period: 'Years 3-4',
      title: 'Expansion',
      theme: 'Scaling & Diversification',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'green',
      focus: 'Scale operations and expand market reach',
      keyGoals: [
        'Enter 5+ new geographic markets',
        'Launch 3+ new product lines',
        'Scale team to 500+ employees',
        'Achieve $100M annual revenue',
        'Grow to 5,000+ customers',
        'Establish international presence',
      ],
      milestones: [
        'International market entry',
        'Major product launches',
        'Strategic acquisitions',
        'IPO or major funding round',
      ],
    },
    {
      period: 'Year 5',
      title: 'Market Leadership',
      theme: 'Industry Dominance',
      icon: <Award className="w-6 h-6" />,
      color: 'purple',
      focus: 'Achieve market leadership and sustainable advantage',
      keyGoals: [
        'Become #1 in target markets',
        'Achieve $200M+ annual revenue',
        'Grow to 10,000+ customers',
        'Scale to 1,000+ employees',
        'Establish innovation leadership',
        'Build sustainable competitive moat',
      ],
      milestones: [
        'Market leadership position',
        'Industry recognition and awards',
        'Global brand establishment',
        'Sustainable profitability',
      ],
    },
  ];

  const strategicPriorities = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Talent & Culture',
      description: 'Build world-class team and culture that attracts top talent',
      initiatives: [
        'Establish best-in-class employee experience',
        'Build strong employer brand',
        'Develop leadership pipeline',
        'Create inclusive and diverse workplace',
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Innovation & Technology',
      description: 'Drive continuous innovation and technology leadership',
      initiatives: [
        'Invest in R&D and innovation',
        'Build cutting-edge technology platform',
        'Establish innovation labs',
        'Partner with leading tech companies',
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Market Expansion',
      description: 'Strategic expansion into new markets and segments',
      initiatives: [
        'Enter international markets',
        'Expand product portfolio',
        'Build strategic partnerships',
        'Acquire complementary businesses',
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Operational Excellence',
      description: 'Optimize operations for scale and efficiency',
      initiatives: [
        'Implement advanced analytics',
        'Automate key processes',
        'Build scalable infrastructure',
        'Establish best practices',
      ],
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

  const visionMetrics = {
    revenue: '$200M+',
    customers: '10,000+',
    employees: '1,000+',
    markets: '15+',
    products: '10+',
    marketShare: '25%+',
  };

  return (
    <ModulePage 
      title="5 Year Plan"
      description="Long-term strategic vision and roadmap (2024-2028)"
    >
      <div className="space-y-6">
        {/* Vision Overview */}
        <div className="card bg-gradient-to-r from-primary-50 via-purple-50 to-blue-50 border-primary-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5-Year Strategic Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our 5-year plan outlines the path to becoming an industry leader through strategic growth, 
            innovation, and operational excellence. We will build a sustainable, scalable business that 
            creates lasting value for customers, employees, and stakeholders.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-primary-600 mb-1">{visionMetrics.revenue}</div>
              <div className="text-xs text-gray-600">Annual Revenue</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-primary-600 mb-1">{visionMetrics.customers}</div>
              <div className="text-xs text-gray-600">Customers</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-primary-600 mb-1">{visionMetrics.employees}</div>
              <div className="text-xs text-gray-600">Employees</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-primary-600 mb-1">{visionMetrics.markets}</div>
              <div className="text-xs text-gray-600">Markets</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-primary-600 mb-1">{visionMetrics.products}</div>
              <div className="text-xs text-gray-600">Products</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-xl font-bold text-primary-600 mb-1">{visionMetrics.marketShare}</div>
              <div className="text-xs text-gray-600">Market Share</div>
            </div>
          </div>
        </div>

        {/* Phase Plans */}
        {phases.map((phase, index) => {
          const colors = getColorClasses(phase.color);
          return (
            <div key={index} className={`card border-l-4 ${colors.border} ${colors.bg}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 bg-white rounded-lg ${colors.text}`}>
                  {phase.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{phase.period}: {phase.title}</h2>
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">
                      {index === 0 ? 'Current' : index === 1 ? 'Upcoming' : 'Future'}
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 font-medium mb-1">{phase.theme}</p>
                  <p className="text-gray-600">{phase.focus}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Key Goals */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Key Goals
                  </h3>
                  <ul className="space-y-2">
                    {phase.keyGoals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700">
                        <span className={`${colors.text} mt-1`}>✓</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Major Milestones */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Major Milestones
                  </h3>
                  <div className="space-y-3">
                    {phase.milestones.map((milestone, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${colors.border.replace('border-', 'bg-')}`} />
                          <span className="text-gray-900 font-medium">{milestone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Strategic Priorities */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Strategic Priorities (All 5 Years)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicPriorities.map((priority, index) => (
              <div key={index} className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    {priority.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{priority.title}</h3>
                    <p className="text-sm text-gray-600">{priority.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-12">
                  {priority.initiatives.map((initiative, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 mt-1">•</span>
                      <span>{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Success Factors */}
        <div className="card bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Critical Success Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Execution Excellence</h3>
              <p className="text-sm text-gray-600">
                Consistent execution of strategic initiatives with focus on quality and results
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Adaptability</h3>
              <p className="text-sm text-gray-600">
                Ability to pivot and adapt to changing market conditions and opportunities
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Financial Discipline</h3>
              <p className="text-sm text-gray-600">
                Maintain financial health while investing in growth and innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default FiveYearPlan;

