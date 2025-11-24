import ModulePage from '../ModulePage';
import { Package, Search, TrendingUp, TrendingDown, Plus } from 'lucide-react';
import { useState } from 'react';

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['all', 'Raw Materials', 'Components', 'Finished Goods', 'Supplies', 'Tools'];

  const inventory = [
    {
      id: 'INV-001',
      name: 'Raw Material A',
      category: 'Raw Materials',
      currentStock: 1250,
      unit: 'kg',
      location: 'Warehouse A - Section 1',
      lastUpdated: '2024-01-25',
      value: 25000,
      movement: 'in',
      movementQty: 200,
    },
    {
      id: 'INV-002',
      name: 'Component X',
      category: 'Components',
      currentStock: 850,
      unit: 'units',
      location: 'Warehouse B - Section 3',
      lastUpdated: '2024-01-26',
      value: 17000,
      movement: 'out',
      movementQty: 50,
    },
    {
      id: 'INV-003',
      name: 'Finished Product Y',
      category: 'Finished Goods',
      currentStock: 320,
      unit: 'units',
      location: 'Warehouse C - Section 2',
      lastUpdated: '2024-01-27',
      value: 48000,
      movement: 'in',
      movementQty: 30,
    },
    {
      id: 'INV-004',
      name: 'Tool Set Alpha',
      category: 'Tools',
      currentStock: 15,
      unit: 'sets',
      location: 'Tool Room',
      lastUpdated: '2024-01-24',
      value: 7500,
      movement: 'out',
      movementQty: 2,
    },
    {
      id: 'INV-005',
      name: 'Office Supplies Pack',
      category: 'Supplies',
      currentStock: 45,
      unit: 'packs',
      location: 'Warehouse A - Section 4',
      lastUpdated: '2024-01-23',
      value: 2250,
      movement: 'in',
      movementQty: 10,
    },
  ];

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const totalValue = inventory.reduce((sum, item) => sum + item.value, 0);
  const totalItems = inventory.length;

  return (
    <ModulePage title="Inventory Tracking" description="Inventory management, tracking, and movement history">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Package className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{totalItems}</div>
                <div className="text-sm text-slate-600">Total Items</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">${(totalValue / 1000).toFixed(0)}k</div>
                <div className="text-sm text-slate-600">Total Value</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{inventory.reduce((sum, i) => sum + i.currentStock, 0)}</div>
                <div className="text-sm text-slate-600">Total Units</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="card">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search inventory..."
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
              Add Item
            </button>
          </div>
        </div>

        {/* Inventory List */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">All Inventory Items ({filteredInventory.length})</h2>
          <div className="space-y-4">
            {filteredInventory.map((item) => (
              <div key={item.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Package className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-sm font-medium text-primary-600">{item.category}</span>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm text-slate-600">{item.id}</span>
                          <span className="text-sm text-slate-500">•</span>
                          <span className="text-sm text-slate-600">{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 space-y-2">
                      <div className="flex items-center gap-6 text-sm text-slate-600">
                        <div>
                          <span className="font-semibold text-slate-900">Stock:</span> {item.currentStock} {item.unit}
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900">Value:</span> ${item.value.toLocaleString()}
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900">Last Updated:</span> {item.lastUpdated}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.movement === 'in' ? (
                          <div className="flex items-center gap-2 text-sm text-emerald-600">
                            <TrendingUp className="w-4 h-4" />
                            <span className="font-semibold">+{item.movementQty} {item.unit} received</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-sm text-red-600">
                            <TrendingDown className="w-4 h-4" />
                            <span className="font-semibold">-{item.movementQty} {item.unit} issued</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-12">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold">
                    Adjust Stock
                  </button>
                  <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all text-sm font-semibold">
                    View History
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

export default Inventory;

