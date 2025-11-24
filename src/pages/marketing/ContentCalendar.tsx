import ModulePage from '../ModulePage';
import { Calendar, FileText, Image, Video, Megaphone, CheckCircle2, Clock } from 'lucide-react';
import { format } from 'date-fns';

const ContentCalendar = () => {
  const content = [
    {
      id: 1,
      title: 'Product Launch Announcement',
      type: 'social',
      platform: 'LinkedIn',
      scheduledDate: new Date(2024, 1, 1),
      status: 'scheduled',
      author: 'Marketing Team',
      contentType: 'post',
    },
    {
      id: 2,
      title: 'Q1 Results Blog Post',
      type: 'blog',
      platform: 'Website',
      scheduledDate: new Date(2024, 1, 5),
      status: 'draft',
      author: 'Content Team',
      contentType: 'article',
    },
    {
      id: 3,
      title: 'Customer Success Story Video',
      type: 'video',
      platform: 'YouTube',
      scheduledDate: new Date(2024, 1, 8),
      status: 'scheduled',
      author: 'Video Team',
      contentType: 'video',
    },
    {
      id: 4,
      title: 'Weekly Newsletter',
      type: 'email',
      platform: 'Email',
      scheduledDate: new Date(2024, 1, 2),
      status: 'published',
      author: 'Marketing Team',
      contentType: 'newsletter',
      publishedDate: new Date(2024, 1, 2),
    },
    {
      id: 5,
      title: 'Infographic: Industry Trends',
      type: 'graphic',
      platform: 'Instagram',
      scheduledDate: new Date(2024, 1, 3),
      status: 'scheduled',
      author: 'Design Team',
      contentType: 'infographic',
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return <FileText className="w-5 h-5" />;
      case 'video': return <Video className="w-5 h-5" />;
      case 'graphic': return <Image className="w-5 h-5" />;
      default: return <Megaphone className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-600';
      case 'video': return 'bg-purple-100 text-purple-600';
      case 'graphic': return 'bg-pink-100 text-pink-600';
      case 'email': return 'bg-orange-100 text-orange-600';
      default: return 'bg-primary-100 text-primary-600';
    }
  };

  const upcoming = content.filter(c => c.status === 'scheduled' || c.status === 'draft').slice(0, 5);
  const published = content.filter(c => c.status === 'published');

  return (
    <ModulePage title="Content Calendar" description="Marketing content calendar and scheduling">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{content.length}</div>
            <div className="text-sm text-slate-600 mt-1">Total Content</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-blue-600">{content.filter(c => c.status === 'scheduled').length}</div>
            <div className="text-sm text-slate-600 mt-1">Scheduled</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-yellow-600">{content.filter(c => c.status === 'draft').length}</div>
            <div className="text-sm text-slate-600 mt-1">Drafts</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{published.length}</div>
            <div className="text-sm text-slate-600 mt-1">Published</div>
          </div>
        </div>

        {/* Upcoming Content */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Upcoming Content</h2>
          <div className="space-y-4">
            {upcoming.map((item) => (
              <div key={item.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-slate-600">
                          <span>{item.platform}</span>
                          <span>•</span>
                          <span>{item.contentType}</span>
                          <span>•</span>
                          <span>{item.author}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4" />
                      <span>Scheduled: {format(item.scheduledDate, 'MMM d, yyyy')}</span>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                    item.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                    item.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Published Content */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Recently Published</h2>
          <div className="space-y-4">
            {published.map((item) => (
              <div key={item.id} className="p-6 border border-slate-200 rounded-xl bg-emerald-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-slate-600">
                          <span>{item.platform}</span>
                          <span>•</span>
                          <span>{item.author}</span>
                        </div>
                      </div>
                    </div>
                    {item.publishedDate && (
                      <div className="ml-12 flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Published: {format(item.publishedDate, 'MMM d, yyyy')}</span>
                      </div>
                    )}
                  </div>
                  <span className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-100 text-emerald-700">
                    Published
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

export default ContentCalendar;

