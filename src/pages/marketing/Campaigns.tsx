import ModulePage from '../ModulePage';
import { Megaphone, Calendar, Users } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const Campaigns = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const campaigns = [
    {
      id: 'CAMP-001',
      name: 'Q1 Product Launch',
      type: 'Product Launch',
      status: 'active',
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 2, 31),
      budget: 50000,
      spent: 32000,
      targetAudience: 'Enterprise Customers',
      channels: ['Email', 'Social Media', 'Web'],
      metrics: {
        impressions: 125000,
        clicks: 8500,
        conversions: 245,
        revenue: 125000,
      },
    },
    {
      id: 'CAMP-002',
      name: 'Spring Promotion',
      type: 'Promotional',
      status: 'planned',
      startDate: new Date(2024, 2, 1),
      endDate: new Date(2024, 4, 31),
      budget: 30000,
      spent: 0,
      targetAudience: 'SMB Customers',
      channels: ['Email', 'Social Media'],
      metrics: null,
    },
    {
      id: 'CAMP-003',
      name: 'Brand Awareness Q1',
      type: 'Brand Awareness',
      status: 'completed',
      startDate: new Date(2023, 9, 1),
      endDate: new Date(2023, 11, 31),
      budget: 40000,
      spent: 38500,
      targetAudience: 'General Market',
      channels: ['Social Media', 'Display Ads', 'Content'],
      metrics: {
        impressions: 500000,
        clicks: 25000,
        conversions: 1200,
        revenue: 180000,
      },
    },
  ];

  const filteredCampaigns = filterStatus === 'all' 
    ? campaigns 
    : campaigns.filter(c => c.status === filterStatus);

  const stats = {
    total: campaigns.length,
    active: campaigns.filter(c => c.status === 'active').length,
    planned: campaigns.filter(c => c.status === 'planned').length,
    completed: campaigns.filter(c => c.status === 'completed').length,
    totalBudget: campaigns.reduce((sum, c) => sum + c.budget, 0),
    totalSpent: campaigns.reduce((sum, c) => sum + c.spent, 0),
  };

  return (
    <ModulePage title="Campaign Planning" description="Marketing campaign planning, execution, and tracking">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600 mt-1">Total Campaigns</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-blue-600">{stats.active}</div>
            <div className="text-sm text-slate-600 mt-1">Active</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-yellow-600">{stats.planned}</div>
            <div className="text-sm text-slate-600 mt-1">Planned</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{stats.completed}</div>
            <div className="text-sm text-slate-600 mt-1">Completed</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-primary-600">${(stats.totalBudget / 1000).toFixed(0)}k</div>
            <div className="text-sm text-slate-600 mt-1">Total Budget</div>
          </div>
        </div>

        {/* Filters */}
        <div className="card">
          <div className="flex gap-2">
            {['all', 'active', 'planned', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterStatus === status
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Campaigns List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Campaigns ({filteredCampaigns.length})</h2>
          <div className="space-y-4">
            {filteredCampaigns.map((campaign) => {
              const budgetUsed = (campaign.spent / campaign.budget) * 100;
              
              return (
                <div key={campaign.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <Megaphone className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{campaign.name}</h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm font-medium text-primary-600">{campaign.type}</span>
                            <span className="text-sm text-slate-500">•</span>
                            <span className="text-sm text-slate-600">{campaign.targetAudience}</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-12 space-y-3">
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{format(campaign.startDate, 'MMM d')} - {format(campaign.endDate, 'MMM d, yyyy')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>Channels: {campaign.channels.join(', ')}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-slate-600">Budget Usage</span>
                            <span className="font-bold text-slate-900">${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-3">
                            <div
                              className={`h-3 rounded-full ${
                                budgetUsed >= 100 ? 'bg-red-600' :
                                budgetUsed >= 75 ? 'bg-yellow-600' :
                                'bg-primary-600'
                              }`}
                              style={{ width: `${Math.min(budgetUsed, 100)}%` }}
                            />
                          </div>
                        </div>
                        {campaign.metrics && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-3 bg-slate-50 rounded-lg">
                            <div>
                              <div className="text-xs text-slate-600">Impressions</div>
                              <div className="text-sm font-bold text-slate-900">{campaign.metrics.impressions.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-600">Clicks</div>
                              <div className="text-sm font-bold text-slate-900">{campaign.metrics.clicks.toLocaleString()}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-600">Conversions</div>
                              <div className="text-sm font-bold text-slate-900">{campaign.metrics.conversions}</div>
                            </div>
                            <div>
                              <div className="text-xs text-slate-600">Revenue</div>
                              <div className="text-sm font-bold text-emerald-600">${campaign.metrics.revenue.toLocaleString()}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      campaign.status === 'active' ? 'bg-blue-100 text-blue-700' :
                      campaign.status === 'planned' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div className="flex gap-2 ml-12">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold">
                      View Details
                    </button>
                    {campaign.status === 'active' && (
                      <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                        View Analytics
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default Campaigns;

