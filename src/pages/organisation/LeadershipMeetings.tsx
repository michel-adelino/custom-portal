import ModulePage from '../ModulePage';
import { format } from 'date-fns';
import { Calendar, Users, FileText, Clock, CheckCircle2, Circle } from 'lucide-react';

const LeadershipMeetings = () => {
  const meetings = [
    { 
      id: 1, 
      title: 'Q1 Strategy Review', 
      date: new Date(2024, 0, 15), 
      time: '10:00 AM - 12:00 PM',
      location: 'Conference Room A / Zoom',
      attendees: ['John Owner', 'Jane Manager', 'Bob Director', 'Alice VP', 'Charlie Head', 'Diana Lead', 'Eve Manager', 'Frank Director'],
      status: 'completed',
      agenda: [
        'Q1 Performance Review',
        'Strategic Initiatives Progress',
        'Budget vs Actual Analysis',
        'Q2 Planning Discussion',
      ],
      actionItems: [
        { task: 'Finalize Q2 budget allocations', owner: 'Jane Manager', due: new Date(2024, 0, 22), completed: true },
        { task: 'Review and approve new hiring plan', owner: 'Bob Director', due: new Date(2024, 0, 25), completed: true },
      ],
      notes: 'Strong Q1 performance across all departments. Need to accelerate digital transformation initiatives.',
    },
    { 
      id: 2, 
      title: 'Budget Planning Session', 
      date: new Date(2024, 1, 20), 
      time: '2:00 PM - 4:00 PM',
      location: 'Executive Boardroom',
      attendees: ['John Owner', 'Jane Manager', 'Bob Director', 'Alice VP', 'Charlie Head', 'Diana Lead'],
      status: 'scheduled',
      agenda: [
        '2024 Budget Review',
        '2025 Budget Planning',
        'Capital Expenditure Discussion',
        'Resource Allocation Strategy',
      ],
      actionItems: [],
      notes: '',
    },
    { 
      id: 3, 
      title: 'Team Alignment Meeting', 
      date: new Date(2024, 2, 10), 
      time: '9:00 AM - 11:00 AM',
      location: 'Main Conference Hall',
      attendees: ['John Owner', 'Jane Manager', 'Bob Director', 'Alice VP', 'Charlie Head', 'Diana Lead', 'Eve Manager', 'Frank Director', 'Grace Lead', 'Henry Manager'],
      status: 'scheduled',
      agenda: [
        'Company Vision & Mission Alignment',
        'Cross-Department Collaboration',
        'Q2 Goals and Objectives',
        'Team Building Initiatives',
      ],
      actionItems: [],
      notes: '',
    },
    { 
      id: 4, 
      title: 'Monthly Leadership Sync', 
      date: new Date(2024, 1, 5), 
      time: '3:00 PM - 4:00 PM',
      location: 'Zoom',
      attendees: ['John Owner', 'Jane Manager', 'Bob Director', 'Alice VP', 'Charlie Head'],
      status: 'completed',
      agenda: [
        'Monthly Metrics Review',
        'Key Challenges Discussion',
        'Quick Wins Sharing',
      ],
      actionItems: [
        { task: 'Follow up on customer feedback', owner: 'Alice VP', due: new Date(2024, 1, 12), completed: false },
      ],
      notes: 'Good progress on customer satisfaction initiatives. Need to address support response times.',
    },
  ];

  const upcomingMeetings = meetings.filter(m => m.status === 'scheduled').slice(0, 3);

  return (
    <ModulePage 
      title="Leadership Meetings"
      description="Schedule, track, and manage leadership team meetings"
    >
      <div className="space-y-6">
        {/* Upcoming Meetings Summary */}
        <div className="card bg-blue-50 border-blue-200">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Meetings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingMeetings.map((meeting) => (
              <div key={meeting.id} className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">{meeting.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <Calendar className="w-3 h-3 inline mr-1" />
                  {format(meeting.date, 'MMM d, yyyy')}
                </p>
                <p className="text-sm text-gray-600">
                  <Clock className="w-3 h-3 inline mr-1" />
                  {meeting.time}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* All Meetings */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">All Meetings</h2>
          <div className="space-y-6">
            {meetings.map((meeting) => (
              <div key={meeting.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{meeting.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        meeting.status === 'completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {meeting.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {format(meeting.date, 'MMMM d, yyyy')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {meeting.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {meeting.attendees.length} attendees
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">📍 {meeting.location}</p>
                  </div>
                </div>

                {/* Agenda */}
                {meeting.agenda && meeting.agenda.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Agenda
                    </h4>
                    <ul className="space-y-1 ml-6">
                      {meeting.agenda.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-700 list-disc">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Attendees */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Attendees ({meeting.attendees.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {meeting.attendees.map((attendee, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {attendee}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Items */}
                {meeting.actionItems && meeting.actionItems.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Action Items</h4>
                    <div className="space-y-2">
                      {meeting.actionItems.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2 bg-gray-50 rounded">
                          {item.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
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
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Meeting Notes</h4>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">{meeting.notes}</p>
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

export default LeadershipMeetings;

