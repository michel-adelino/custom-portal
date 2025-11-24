import ModulePage from '../ModulePage';
import { FileText, BookOpen, Search, Eye, Calendar, User, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const KnowledgeCentre = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Policies', 'Products', 'Service', 'Processes', 'Technical', 'HR'];

  const articles = [
    { 
      id: 1, 
      title: 'Company Policies Overview', 
      category: 'Policies', 
      views: 245, 
      author: 'HR Department',
      lastUpdated: '2024-01-15',
      tags: ['policy', 'compliance', 'guidelines'],
      description: 'Comprehensive guide to all company policies including code of conduct, attendance, and benefits.',
    },
    { 
      id: 2, 
      title: 'Product Specifications Guide', 
      category: 'Products', 
      views: 189,
      author: 'Product Team',
      lastUpdated: '2024-01-20',
      tags: ['products', 'specifications', 'technical'],
      description: 'Detailed specifications for all product lines including features, dimensions, and technical details.',
    },
    { 
      id: 3, 
      title: 'Customer Service Best Practices', 
      category: 'Service', 
      views: 312,
      author: 'Customer Success',
      lastUpdated: '2024-01-18',
      tags: ['customer service', 'best practices', 'training'],
      description: 'Essential practices for delivering exceptional customer service and handling various scenarios.',
    },
    { 
      id: 4, 
      title: 'IT Security Protocols', 
      category: 'Technical', 
      views: 156,
      author: 'IT Department',
      lastUpdated: '2024-01-22',
      tags: ['security', 'IT', 'protocols'],
      description: 'Security protocols and best practices for protecting company data and systems.',
    },
    { 
      id: 5, 
      title: 'Onboarding Process Documentation', 
      category: 'HR', 
      views: 278,
      author: 'HR Department',
      lastUpdated: '2024-01-10',
      tags: ['onboarding', 'HR', 'process'],
      description: 'Complete documentation of the employee onboarding process and checklist.',
    },
    { 
      id: 6, 
      title: 'Quality Assurance Standards', 
      category: 'Processes', 
      views: 201,
      author: 'Quality Team',
      lastUpdated: '2024-01-25',
      tags: ['quality', 'standards', 'processes'],
      description: 'Quality assurance standards and procedures for maintaining product and service excellence.',
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularArticles = [...articles].sort((a, b) => b.views - a.views).slice(0, 3);

  return (
    <ModulePage title="Knowledge Centre" description="Central repository of company knowledge and documentation">
      <div className="space-y-6">
        {/* Search and Filters */}
        <div className="card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary-600" />
            <h2 className="text-lg font-bold text-slate-900">Popular Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {popularArticles.map((article) => (
              <div key={article.id} className="bg-white p-4 rounded-xl border border-primary-200 hover:shadow-md transition-all cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-primary-600" />
                  <span className="text-xs font-semibold text-primary-600">{article.category}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{article.title}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {article.views}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Articles ({filteredArticles.length})</h2>
          <div className="space-y-4">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div key={article.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <BookOpen className="w-5 h-5 text-primary-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{article.title}</h3>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm font-medium text-primary-600">{article.category}</span>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                              <User className="w-3 h-3" />
                              {article.author}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-slate-500">
                              <Calendar className="w-3 h-3" />
                              {article.lastUpdated}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 ml-12 mb-3">{article.description}</p>
                      <div className="flex items-center gap-2 ml-12">
                        {article.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <Eye className="w-4 h-4" />
                          {article.views}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <p className="text-slate-500">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ModulePage>
  );
};

export default KnowledgeCentre;

