import ModulePage from '../ModulePage';
import { TrendingUp, Eye, Heart, MessageCircle, Share2, Users, BarChart3, Calendar } from 'lucide-react';

const Engagement = () => {
  const metrics = [
    {
      period: 'This Week',
      impressions: 125000,
      engagements: 8500,
      likes: 4200,
      comments: 450,
      shares: 380,
      clicks: 12500,
      conversionRate: 3.2,
    },
    {
      period: 'Last Week',
      impressions: 118000,
      engagements: 7800,
      likes: 3900,
      comments: 420,
      shares: 350,
      clicks: 11200,
      conversionRate: 2.9,
    },
    {
      period: 'This Month',
      impressions: 485000,
      engagements: 32500,
      likes: 16800,
      comments: 1850,
      shares: 1520,
      clicks: 48500,
      conversionRate: 3.1,
    },
  ];

  const platformBreakdown = [
    { platform: 'LinkedIn', impressions: 185000, engagements: 12500, engagementRate: 6.8 },
    { platform: 'Twitter', impressions: 150000, engagements: 9800, engagementRate: 6.5 },
    { platform: 'Facebook', impressions: 120000, engagements: 7200, engagementRate: 6.0 },
    { platform: 'Instagram', impressions: 30000, engagements: 3000, engagementRate: 10.0 },
  ];

  const topContent = [
    { title: 'Product Launch Announcement', platform: 'LinkedIn', engagements: 850, engagementRate: 7.2 },
    { title: 'Customer Success Story', platform: 'Twitter', engagements: 720, engagementRate: 8.5 },
    { title: 'Industry Insights Blog', platform: 'Facebook', engagements: 650, engagementRate: 6.8 },
  ];

  const currentWeek = metrics[0];
  const lastWeek = metrics[1];
  const impressionsChange = ((currentWeek.impressions - lastWeek.impressions) / lastWeek.impressions * 100).toFixed(1);
  const engagementsChange = ((currentWeek.engagements - lastWeek.engagements) / lastWeek.engagements * 100).toFixed(1);

  return (
    <ModulePage title="Engagement Tracking" description="Track marketing engagement metrics and performance">
      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-2xl font-bold text-slate-900">{currentWeek.impressions.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Impressions</div>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="text-xs text-emerald-600 font-semibold">+{impressionsChange}% vs last week</div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-2xl font-bold text-slate-900">{currentWeek.engagements.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Engagements</div>
              </div>
              <div className="p-2 bg-emerald-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <div className="text-xs text-emerald-600 font-semibold">+{engagementsChange}% vs last week</div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-2xl font-bold text-slate-900">{currentWeek.conversionRate}%</div>
                <div className="text-sm text-slate-600">Conversion Rate</div>
              </div>
              <div className="p-2 bg-purple-100 rounded-lg">
                <BarChart3 className="w-5 h-5 text-purple-600" />
              </div>
            </div>
            <div className="text-xs text-emerald-600 font-semibold">+0.3% vs last week</div>
          </div>
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-2xl font-bold text-slate-900">{currentWeek.clicks.toLocaleString()}</div>
                <div className="text-sm text-slate-600">Clicks</div>
              </div>
              <div className="p-2 bg-primary-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary-600" />
              </div>
            </div>
            <div className="text-xs text-emerald-600 font-semibold">+11.6% vs last week</div>
          </div>
        </div>

        {/* Engagement Breakdown */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Engagement Breakdown</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-red-600" />
                <span className="font-semibold text-slate-900">Likes</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">{currentWeek.likes.toLocaleString()}</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-900">Comments</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">{currentWeek.comments.toLocaleString()}</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Share2 className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-slate-900">Shares</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">{currentWeek.shares.toLocaleString()}</div>
            </div>
            <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary-600" />
                <span className="font-semibold text-slate-900">Clicks</span>
              </div>
              <div className="text-2xl font-bold text-slate-900">{currentWeek.clicks.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Platform Performance */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Platform Performance</h2>
          <div className="space-y-4">
            {platformBreakdown.map((platform) => (
              <div key={platform.platform} className="p-4 border border-slate-200 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-slate-900">{platform.platform}</h3>
                  <span className="text-sm font-semibold text-primary-600">{platform.engagementRate}% engagement rate</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-600">Impressions</div>
                    <div className="text-lg font-bold text-slate-900">{platform.impressions.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-slate-600">Engagements</div>
                    <div className="text-lg font-bold text-slate-900">{platform.engagements.toLocaleString()}</div>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-3">
                  <div
                    className="bg-primary-600 h-2 rounded-full"
                    style={{ width: `${platform.engagementRate * 10}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Content */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Top Performing Content</h2>
          <div className="space-y-3">
            {topContent.map((content, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-xl hover:border-primary-300 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">{content.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{content.platform}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-slate-900">{content.engagements}</div>
                    <div className="text-xs text-slate-600">{content.engagementRate}% rate</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Engagement;

