import ModulePage from '../ModulePage';
import { Target, TrendingUp, Users, Award, Globe } from 'lucide-react';

const Vision = () => {
  const visionPillars = [
    {
      icon: <Target className="w-6 h-5" />,
      title: 'Market Leadership',
      description: 'Become the #1 trusted partner in our industry by 2027, recognized for innovation and excellence.',
    },
    {
      icon: <TrendingUp className="w-6 h-5" />,
      title: 'Sustainable Growth',
      description: 'Achieve 300% revenue growth over 5 years while maintaining profitability and quality standards.',
    },
    {
      icon: <Users className="w-6 h-5" />,
      title: 'People First',
      description: 'Build a world-class team where every employee can grow, thrive, and achieve their full potential.',
    },
    {
      icon: <Award className="w-6 h-5" />,
      title: 'Excellence in Service',
      description: 'Deliver exceptional customer experiences that exceed expectations and build lasting relationships.',
    },
    {
      icon: <Globe className="w-6 h-5" />,
      title: 'Global Impact',
      description: 'Expand our reach to serve customers across multiple regions while maintaining our core values.',
    },
  ];

  const visionTimeline = [
    { year: '2024', milestone: 'Establish market presence and build core team' },
    { year: '2025', milestone: 'Launch innovative products and expand customer base' },
    { year: '2026', milestone: 'Achieve regional market leadership' },
    { year: '2027', milestone: 'Become industry-recognized leader with global presence' },
  ];

  return (
    <ModulePage 
      title="Company Vision"
      description="Our vision for the future and long-term aspirations"
    >
      <div className="space-y-6">
        {/* Main Vision Statement */}
        <div className="card bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary-600 rounded-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading provider of innovative solutions in our industry, 
                delivering exceptional value to our customers while fostering a 
                culture of excellence and continuous improvement. We envision a future 
                where our company sets the standard for quality, innovation, and 
                customer satisfaction, creating lasting impact in every market we serve.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Pillars */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Vision Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visionPillars.map((pillar, index) => (
              <div key={index} className="p-5 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
                <div className="text-primary-600 mb-3">{pillar.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Timeline */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Vision Timeline</h2>
          <div className="space-y-4">
            {visionTimeline.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {index < visionTimeline.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.year}</h3>
                  <p className="text-gray-600">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Metrics */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Vision Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-1">10,000+</div>
              <div className="text-sm text-gray-600">Target Customers by 2027</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Team Members by 2027</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-1">95%+</div>
              <div className="text-sm text-gray-600">Customer Satisfaction Target</div>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Vision;

