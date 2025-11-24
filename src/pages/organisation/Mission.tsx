import ModulePage from '../ModulePage';
import { Shield, Lightbulb, Award, Users, Heart, Target } from 'lucide-react';

const Mission = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity',
      color: 'blue',
      description: 'We conduct business with honesty, transparency, and ethical practices. Our word is our bond, and we build trust through consistent actions.',
      examples: [
        'Transparent communication with all stakeholders',
        'Ethical decision-making in all situations',
        'Accountability for our actions and commitments',
      ],
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      color: 'purple',
      description: 'We continuously seek better ways to serve our customers and improve our processes. Innovation drives our competitive advantage.',
      examples: [
        'Encouraging creative problem-solving',
        'Investing in new technologies and methods',
        'Learning from failures and iterating quickly',
      ],
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      color: 'gold',
      description: 'We strive for the highest quality in everything we do. Good enough is never enough - we aim for excellence in every detail.',
      examples: [
        'Setting high standards and exceeding them',
        'Continuous improvement in all areas',
        'Delivering exceptional results consistently',
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      color: 'green',
      description: 'We work together to achieve common goals. We believe that the best results come from diverse teams working in harmony.',
      examples: [
        'Open communication across departments',
        'Shared ownership of outcomes',
        'Supporting each other\'s success',
      ],
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Respect',
      color: 'pink',
      description: 'We treat everyone with dignity and respect. We value diverse perspectives and create an inclusive environment for all.',
      examples: [
        'Valuing different opinions and backgrounds',
        'Creating a safe and inclusive workplace',
        'Showing appreciation for contributions',
      ],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Customer Focus',
      color: 'orange',
      description: 'Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.',
      examples: [
        'Putting customer needs first',
        'Building long-term relationships',
        'Going above and beyond to delight customers',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      gold: 'bg-yellow-50 border-yellow-200 text-yellow-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      pink: 'bg-pink-50 border-pink-200 text-pink-600',
      orange: 'bg-orange-50 border-orange-200 text-orange-600',
    };
    return colors[color] || colors.blue;
  };

  return (
    <ModulePage 
      title="Mission & Values"
      description="Our mission statement and core values that guide everything we do"
    >
      <div className="space-y-6">
        {/* Mission Statement */}
        <div className="card bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            To empower businesses through innovative solutions, exceptional service, 
            and unwavering commitment to excellence. We are dedicated to creating 
            value for our customers, employees, and stakeholders while building a 
            sustainable and successful organization that makes a positive impact 
            in the communities we serve.
          </p>
          <div className="mt-6 pt-6 border-t border-primary-200">
            <h3 className="font-semibold text-gray-900 mb-3">What This Means</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-primary-600 font-bold mt-1">→</span>
                <span>We solve real business problems with practical, innovative solutions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600 font-bold mt-1">→</span>
                <span>We build lasting relationships based on trust and mutual respect</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600 font-bold mt-1">→</span>
                <span>We invest in our people and create opportunities for growth</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary-600 font-bold mt-1">→</span>
                <span>We operate with integrity and social responsibility</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg border-2 ${getColorClasses(value.color)} hover:shadow-lg transition-all`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-700 mb-4">{value.description}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">In Practice:</h4>
                  <ul className="space-y-2">
                    {value.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Living Our Values */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Living Our Values</h2>
          <p className="text-gray-700 mb-4">
            Our values aren't just words on a wall - they guide our daily decisions, 
            shape our culture, and define how we interact with each other and our customers. 
            Every team member is expected to embody these values in their work.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 italic">
              "Values are like fingerprints. Nobody's are the same, but you leave them 
              all over everything you do." - We ensure our values are visible in every 
              project, every interaction, and every decision we make.
            </p>
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Mission;

