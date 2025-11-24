import ModulePage from '../ModulePage';
import { format } from 'date-fns';
import { Calendar, User, Target, MessageSquare, TrendingUp, Award } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const OneOnOneMeetings = () => {
  const { user } = useAuth();
  
  const meetings = [
    { 
      id: 1, 
      employee: 'John Doe', 
      role: 'Senior Developer',
      department: 'Engineering',
      date: new Date(2024, 0, 20), 
      duration: '45 minutes',
      type: 'Career Development',
      status: 'completed',
      topics: [
        'Career growth path discussion',
        'Technical skill development opportunities',
        'Leadership training interest',
        'Project ownership opportunities',
      ],
      actionItems: [
        { task: 'Enroll in advanced React course', owner: 'John Doe', due: new Date(2024, 0, 27), completed: true },
        { task: 'Assign to lead new feature project', owner: 'Manager', due: new Date(2024, 1, 1), completed: true },
      ],
      notes: 'John expressed strong interest in taking on more leadership responsibilities. Discussed potential paths for growth within the engineering team. Very positive meeting.',
      nextMeeting: new Date(2024, 1, 17),
    },
    { 
      id: 2, 
      employee: 'Jane Smith', 
      role: 'Sales Manager',
      department: 'Sales',
      date: new Date(2024, 0, 22), 
      duration: '30 minutes',
      type: 'Performance Review',
      status: 'completed',
      topics: [
        'Q1 performance review',
        'Sales target achievement',
        'Team management feedback',
        'Q2 goals and objectives',
      ],
      actionItems: [
        { task: 'Complete leadership assessment', owner: 'Jane Smith', due: new Date(2024, 0, 29), completed: false },
      ],
      notes: 'Excellent Q1 performance - exceeded targets by 15%. Discussed strategies for Q2 and potential for team expansion.',
      nextMeeting: new Date(2024, 1, 19),
    },
    { 
      id: 3, 
      employee: 'Bob Johnson', 
      role: 'Marketing Specialist',
      department: 'Marketing',
      date: new Date(2024, 1, 5), 
      duration: '60 minutes',
      type: 'Goal Setting',
      status: 'scheduled',
      topics: [
        '2024 personal development goals',
        'Marketing campaign planning',
        'Skill enhancement areas',
        'Work-life balance discussion',
      ],
      actionItems: [],
      notes: '',
      nextMeeting: new Date(2024, 2, 4),
    },
    { 
      id: 4, 
      employee: 'Alice Williams', 
      role: 'Operations Coordinator',
      department: 'Operations',
      date: new Date(2024, 0, 15), 
      duration: '30 minutes',
      type: 'Check-in',
      status: 'completed',
      topics: [
        'Workload assessment',
        'Process improvement suggestions',
        'Team collaboration',
      ],
      actionItems: [
        { task: 'Review process documentation', owner: 'Alice Williams', due: new Date(2024, 0, 25), completed: true },
      ],
      notes: 'Alice provided valuable feedback on operational processes. Discussed automation opportunities.',
      nextMeeting: new Date(2024, 1, 12),
    },
  ];

  const upcomingMeetings = meetings.filter(m => m.status === 'scheduled' || new Date(m.nextMeeting) > new Date());
  const completedMeetings = meetings.filter(m => m.status === 'completed');

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Career Development': 'bg-purple-100 text-purple-700',
      'Performance Review': 'bg-blue-100 text-blue-700',
      'Goal Setting': 'bg-green-100 text-green-700',
      'Check-in': 'bg-orange-100 text-orange-700',
    };
    return colors[type] || 'bg-gray-100 text-gray-700';
  };

  return (
    <ModulePage 
      title="1:1 Meetings"
      description="Track one-on-one meetings with team members"
    >
      <div className="space-y-6">
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{meetings.length}</div>
                <div className="text-sm text-gray-600">Total Meetings</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{completedMeetings.length}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Target className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{upcomingMeetings.length}</div>
                <div className="text-sm text-gray-600">Upcoming</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {meetings.reduce((acc, m) => acc + (m.actionItems?.length || 0), 0)}
                </div>
                <div className="text-sm text-gray-600">Action Items</div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Meetings */}
        {upcomingMeetings.length > 0 && (
          <div className="card bg-blue-50 border-blue-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Meetings</h2>
            <div className="space-y-3">
              {upcomingMeetings.map((meeting) => (
                <div key={meeting.id} className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{meeting.employee}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {format(meeting.nextMeeting, 'MMMM d, yyyy')} • {meeting.duration}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(meeting.type)}`}>
                      {meeting.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Meetings */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">All 1:1 Meetings</h2>
          <div className="space-y-6">
            {meetings.map((meeting) => (
              <div key={meeting.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <User className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{meeting.employee}</h3>
                        <p className="text-sm text-gray-600">{meeting.role} • {meeting.department}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 ml-12">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {format(meeting.date, 'MMMM d, yyyy')}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        {meeting.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(meeting.type)}`}>
                      {meeting.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      meeting.status === 'completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {meeting.status}
                    </span>
                  </div>
                </div>

                {/* Topics Discussed */}
                {meeting.topics && meeting.topics.length > 0 && (
                  <div className="mb-4 ml-12">
                    <h4 className="font-semibold text-gray-900 mb-2">Topics Discussed</h4>
                    <ul className="space-y-1">
                      {meeting.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-primary-600 mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Items */}
                {meeting.actionItems && meeting.actionItems.length > 0 && (
                  <div className="mb-4 ml-12">
                    <h4 className="font-semibold text-gray-900 mb-2">Action Items</h4>
                    <div className="space-y-2">
                      {meeting.actionItems.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2 bg-gray-50 rounded">
                          {item.completed ? (
                            <Award className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Target className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <span className={`text-sm ${item.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                              {item.task}
                            </span>
                            <div className="text-xs text-gray-500 mt-1">
                              Owner: {item.owner} • Due: {format(item.due, 'MMM d, yyyy')}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Notes */}
                {meeting.notes && (
                  <div className="ml-12 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Meeting Notes</h4>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">{meeting.notes}</p>
                  </div>
                )}

                {/* Next Meeting */}
                {meeting.nextMeeting && (
                  <div className="ml-12 mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Next Meeting:</strong> {format(meeting.nextMeeting, 'MMMM d, yyyy')}
                    </p>
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

export default OneOnOneMeetings;

