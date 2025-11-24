import ModulePage from '../ModulePage';
import { BookOpen, Clock, Award, Users, TrendingUp, CheckCircle2, PlayCircle, Calendar, Circle, Star, Download, FileText, Video, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const Training = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const myCourses = [
    { 
      id: 1, 
      title: 'Leadership Fundamentals', 
      category: 'Leadership',
      status: 'completed', 
      progress: 100,
      duration: '8 hours',
      completedDate: '2024-01-15',
      instructor: 'Sarah Johnson',
      description: 'Learn essential leadership skills including team management, decision-making, and communication.',
      modules: 6,
      completedModules: 6,
      certificate: true,
    },
    { 
      id: 2, 
      title: 'Customer Service Excellence', 
      category: 'Customer Service',
      status: 'in-progress', 
      progress: 65,
      duration: '6 hours',
      startDate: '2024-01-20',
      instructor: 'Mike Chen',
      description: 'Master the art of delivering exceptional customer experiences and handling difficult situations.',
      modules: 5,
      completedModules: 3,
      certificate: false,
    },
    { 
      id: 3, 
      title: 'Project Management Basics', 
      category: 'Project Management',
      status: 'not-started', 
      progress: 0,
      duration: '10 hours',
      instructor: 'Emily Davis',
      description: 'Introduction to project management methodologies, tools, and best practices.',
      modules: 8,
      completedModules: 0,
      certificate: false,
    },
    { 
      id: 4, 
      title: 'Advanced Data Analysis', 
      category: 'Analytics',
      status: 'enrolled', 
      progress: 0,
      duration: '12 hours',
      startDate: '2024-02-01',
      instructor: 'David Kim',
      description: 'Deep dive into data analysis techniques, visualization, and reporting.',
      modules: 10,
      completedModules: 0,
      certificate: false,
    },
  ];

  const availableCourses = [
    { 
      id: 5, 
      title: 'Effective Communication', 
      category: 'Soft Skills',
      duration: '4 hours',
      level: 'Beginner',
      rating: 4.8,
      students: 245,
    },
    { 
      id: 6, 
      title: 'Time Management Mastery', 
      category: 'Productivity',
      duration: '3 hours',
      level: 'Beginner',
      rating: 4.6,
      students: 189,
    },
    { 
      id: 7, 
      title: 'Agile Methodology', 
      category: 'Project Management',
      duration: '8 hours',
      level: 'Intermediate',
      rating: 4.9,
      students: 312,
    },
  ];

  const stats = {
    completed: myCourses.filter(c => c.status === 'completed').length,
    inProgress: myCourses.filter(c => c.status === 'in-progress').length,
    totalHours: myCourses.reduce((acc, c) => acc + (c.status === 'completed' ? parseInt(c.duration) : 0), 0),
    certificates: myCourses.filter(c => c.certificate && c.status === 'completed').length,
  };

  return (
    <ModulePage 
      title="Training & Development"
      description="Training courses, development programs, and learning resources"
    >
      <div className="space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">{stats.completed}</div>
                <div className="text-sm font-medium text-slate-600 mt-1">Completed</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <PlayCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">{stats.inProgress}</div>
                <div className="text-sm font-medium text-slate-600 mt-1">In Progress</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">{stats.totalHours}</div>
                <div className="text-sm font-medium text-slate-600 mt-1">Hours Completed</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900">{stats.certificates}</div>
                <div className="text-sm font-medium text-slate-600 mt-1">Certificates</div>
              </div>
            </div>
          </div>
        </div>

        {/* My Courses */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900">My Courses</h2>
            <div className="flex gap-2">
              {['all', 'in-progress', 'completed', 'enrolled'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {myCourses
              .filter(course => selectedCategory === 'all' || course.status === selectedCategory)
              .map((course) => (
                <div key={course.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-primary-100 rounded-xl">
                          <BookOpen className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{course.title}</h3>
                          <p className="text-sm text-slate-600 mt-1">{course.category}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 mb-4 ml-16">{course.description}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 ml-16">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">{course.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          <span className="font-medium">{course.completedModules}/{course.modules} modules</span>
                        </div>
                        {course.certificate && course.status === 'completed' && (
                          <div className="flex items-center gap-2 text-emerald-600 font-semibold">
                            <Award className="w-4 h-4" />
                            Certificate Available
                          </div>
                        )}
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      course.status === 'completed' 
                        ? 'bg-emerald-100 text-emerald-700'
                        : course.status === 'in-progress'
                        ? 'bg-blue-100 text-blue-700'
                        : course.status === 'enrolled'
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {course.status.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="ml-16">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">Progress</span>
                      <span className="text-sm font-bold text-slate-900">{course.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all ${
                          course.status === 'completed' 
                            ? 'bg-emerald-600'
                            : course.status === 'in-progress'
                            ? 'bg-blue-600'
                            : 'bg-slate-400'
                        }`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    {course.status === 'in-progress' && (
                      <button className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold flex items-center gap-2">
                        <PlayCircle className="w-4 h-4" />
                        Continue Learning
                      </button>
                    )}
                    {course.status === 'completed' && course.certificate && (
                      <button className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all text-sm font-semibold flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download Certificate
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Available Courses */}
        <div className="card">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Available Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {availableCourses.map((course) => (
              <div key={course.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{course.title}</h3>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold">
                    {course.level}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-4 font-medium">{course.category}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-slate-900">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{course.students}</span>
                  </div>
                </div>
                <button className="w-full px-4 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold flex items-center justify-center gap-2 group-hover:shadow-md">
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="card bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 border-purple-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Recommended Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-purple-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Management Track</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">For those looking to advance into management roles</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-emerald-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-900">Leadership Fundamentals</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                  <Circle className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">Team Management</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                  <Circle className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">Strategic Planning</span>
                </div>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-all text-sm font-semibold">
                View Path
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl border border-purple-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Technical Excellence</h3>
              </div>
              <p className="text-sm text-slate-600 mb-4">For technical professionals seeking mastery</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                  <Circle className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">Advanced Data Analysis</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                  <Circle className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">System Architecture</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg">
                  <Circle className="w-5 h-5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-700">DevOps Practices</span>
                </div>
              </div>
              <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all text-sm font-semibold">
                View Path
              </button>
            </div>
          </div>
        </div>

        {/* Course Resources */}
        <div className="card">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Video className="w-5 h-5 text-primary-600" />
                </div>
                <h3 className="font-bold text-slate-900">Video Library</h3>
              </div>
              <p className="text-sm text-slate-600">Access recorded training sessions and tutorials</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900">Documentation</h3>
              </div>
              <p className="text-sm text-slate-600">Download course materials and guides</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900">Community</h3>
              </div>
              <p className="text-sm text-slate-600">Connect with other learners and instructors</p>
            </div>
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Training;

