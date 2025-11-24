import ModulePage from '../ModulePage';
import { FileText, User, Calendar, Search, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { useState } from 'react';

const InternalNotes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['all', 'General', 'Customer', 'Project', 'Team', 'Process'];

  const notes = [
    {
      id: 'NOTE-001',
      title: 'Customer ABC Corp - Special Requirements',
      content: 'Customer requires installation during off-hours. Coordinate with installation team for evening schedule.',
      category: 'Customer',
      author: 'John Sales',
      createdDate: new Date(2024, 0, 25),
      tags: ['customer', 'installation', 'special'],
      relatedTo: 'ABC Corp',
    },
    {
      id: 'NOTE-002',
      title: 'Project Alpha - Status Update',
      content: 'Project Alpha is on track. All milestones met. Next review scheduled for next week.',
      category: 'Project',
      author: 'Jane Manager',
      createdDate: new Date(2024, 0, 24),
      tags: ['project', 'status', 'milestone'],
      relatedTo: 'Project Alpha',
    },
    {
      id: 'NOTE-003',
      title: 'Team Meeting Notes - Q1 Planning',
      content: 'Discussed Q1 goals and resource allocation. Key decisions: Hire 2 new team members, expand to 3 new markets.',
      category: 'Team',
      author: 'Bob Director',
      createdDate: new Date(2024, 0, 23),
      tags: ['meeting', 'planning', 'Q1'],
      relatedTo: 'Team Meeting',
    },
    {
      id: 'NOTE-004',
      title: 'Process Improvement - Order Fulfillment',
      content: 'Identified bottleneck in order fulfillment. Proposed solution: Automate inventory checks. To be reviewed by operations team.',
      category: 'Process',
      author: 'Alice Operations',
      createdDate: new Date(2024, 0, 22),
      tags: ['process', 'improvement', 'automation'],
      relatedTo: 'Order Fulfillment',
    },
    {
      id: 'NOTE-005',
      title: 'General - Office Maintenance',
      content: 'Scheduled office maintenance for next week. All staff notified. Conference room will be unavailable on Tuesday.',
      category: 'General',
      author: 'Admin Team',
      createdDate: new Date(2024, 0, 26),
      tags: ['office', 'maintenance'],
      relatedTo: 'Office',
    },
  ];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || note.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <ModulePage title="Internal Notes" description="Internal communication, notes, and team updates">
      <div className="space-y-6">
        {/* Search and Filters */}
        <div className="card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    filterCategory === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
            <button className="px-4 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-semibold flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Note
            </button>
          </div>
        </div>

        {/* Notes List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Notes ({filteredNotes.length})</h2>
          <div className="space-y-4">
            {filteredNotes.map((note) => (
              <div key={note.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <FileText className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{note.title}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm font-medium text-primary-600">{note.category}</span>
                          <span className="text-sm text-slate-500">•</span>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <User className="w-4 h-4" />
                            {note.author}
                          </div>
                          <span className="text-sm text-slate-500">•</span>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Calendar className="w-4 h-4" />
                            {format(note.createdDate, 'MMM d, yyyy')}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 space-y-2">
                      <p className="text-sm text-slate-700">{note.content}</p>
                      {note.relatedTo && (
                        <div className="text-sm text-slate-600">
                          <span className="font-semibold">Related to:</span> {note.relatedTo}
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        {note.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-12">
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                    Share
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

export default InternalNotes;

