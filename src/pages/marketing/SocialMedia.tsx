import ModulePage from '../ModulePage';
import { Share2, TrendingUp, Users, Heart, MessageCircle, Eye, Calendar, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const SocialMedia = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  const platforms = ['all', 'LinkedIn', 'Twitter', 'Facebook', 'Instagram'];

  const posts = [
    {
      id: 'POST-001',
      platform: 'LinkedIn',
      content: 'Excited to announce our new product launch! 🚀',
      scheduledDate: new Date(2024, 1, 1),
      status: 'published',
      metrics: {
        impressions: 12500,
        engagements: 850,
        likes: 420,
        comments: 45,
        shares: 38,
      },
      author: 'Marketing Team',
    },
    {
      id: 'POST-002',
      platform: 'Twitter',
      content: 'Check out our latest blog post on industry trends! #Innovation',
      scheduledDate: new Date(2024, 1, 2),
      status: 'scheduled',
      author: 'Content Team',
    },
    {
      id: 'POST-003',
      platform: 'Facebook',
      content: 'Thank you to all our customers for an amazing year! 🙏',
      scheduledDate: new Date(2024, 1, 3),
      status: 'scheduled',
      author: 'Marketing Team',
    },
    {
      id: 'POST-004',
      platform: 'Instagram',
      content: 'Behind the scenes at our production facility 📸',
      scheduledDate: new Date(2024, 0, 28),
      status: 'published',
      metrics: {
        impressions: 18500,
        engagements: 1200,
        likes: 680,
        comments: 95,
        shares: 52,
      },
      author: 'Social Media Team',
    },
  ];

  const filteredPosts = selectedPlatform === 'all' 
    ? posts 
    : posts.filter(post => post.platform === selectedPlatform);

  const stats = {
    total: posts.length,
    published: posts.filter(p => p.status === 'published').length,
    scheduled: posts.filter(p => p.status === 'scheduled').length,
    totalEngagements: posts.filter(p => p.metrics).reduce((sum, p) => sum + (p.metrics?.engagements || 0), 0),
  };

  const getPlatformColor = (platform: string) => {
    const colors: Record<string, string> = {
      'LinkedIn': 'bg-blue-100 text-blue-600',
      'Twitter': 'bg-sky-100 text-sky-600',
      'Facebook': 'bg-indigo-100 text-indigo-600',
      'Instagram': 'bg-pink-100 text-pink-600',
    };
    return colors[platform] || 'bg-slate-100 text-slate-600';
  };

  return (
    <ModulePage title="Social Media" description="Social media management and post scheduling">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600 mt-1">Total Posts</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{stats.published}</div>
            <div className="text-sm text-slate-600 mt-1">Published</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-blue-600">{stats.scheduled}</div>
            <div className="text-sm text-slate-600 mt-1">Scheduled</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-primary-600">{stats.totalEngagements.toLocaleString()}</div>
            <div className="text-sm text-slate-600 mt-1">Total Engagements</div>
          </div>
        </div>

        {/* Platform Filters */}
        <div className="card">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Platform:</span>
            {platforms.map((platform) => (
              <button
                key={platform}
                onClick={() => setSelectedPlatform(platform)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedPlatform === platform
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </button>
            ))}
            <button className="ml-auto px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-semibold flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Post
            </button>
          </div>
        </div>

        {/* Posts List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Posts ({filteredPosts.length})</h2>
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <div key={post.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${getPlatformColor(post.platform)}`}>
                        <Share2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{post.id}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className={`text-sm font-semibold ${getPlatformColor(post.platform)} px-2 py-1 rounded`}>
                            {post.platform}
                          </span>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm text-slate-600">{post.author}</span>
                          <span className="text-sm text-slate-500">•</span>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Calendar className="w-4 h-4" />
                            {format(post.scheduledDate, 'MMM d, yyyy')}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 space-y-3">
                      <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">{post.content}</p>
                      {post.metrics && (
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                          <div className="text-center p-2 bg-white rounded-lg">
                            <Eye className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                            <div className="text-xs text-slate-600">Impressions</div>
                            <div className="text-sm font-bold text-slate-900">{post.metrics.impressions.toLocaleString()}</div>
                          </div>
                          <div className="text-center p-2 bg-white rounded-lg">
                            <TrendingUp className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                            <div className="text-xs text-slate-600">Engagements</div>
                            <div className="text-sm font-bold text-slate-900">{post.metrics.engagements.toLocaleString()}</div>
                          </div>
                          <div className="text-center p-2 bg-white rounded-lg">
                            <Heart className="w-4 h-4 text-red-600 mx-auto mb-1" />
                            <div className="text-xs text-slate-600">Likes</div>
                            <div className="text-sm font-bold text-slate-900">{post.metrics.likes.toLocaleString()}</div>
                          </div>
                          <div className="text-center p-2 bg-white rounded-lg">
                            <MessageCircle className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                            <div className="text-xs text-slate-600">Comments</div>
                            <div className="text-sm font-bold text-slate-900">{post.metrics.comments}</div>
                          </div>
                          <div className="text-center p-2 bg-white rounded-lg">
                            <Share2 className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                            <div className="text-xs text-slate-600">Shares</div>
                            <div className="text-sm font-bold text-slate-900">{post.metrics.shares}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                    post.status === 'published' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {post.status}
                  </span>
                </div>
                <div className="flex gap-2 ml-12">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold">
                    View Analytics
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default SocialMedia;

