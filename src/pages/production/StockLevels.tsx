import ModulePage from '../ModulePage';
import { Package, AlertTriangle, CheckCircle2, TrendingUp, TrendingDown } from 'lucide-react';

const StockLevels = () => {
  const items = [
    {
      id: 'MAT-001',
      name: 'Material A',
      currentStock: 450,
      minStock: 200,
      maxStock: 1000,
      unit: 'units',
      status: 'healthy',
      location: 'Warehouse A',
      lastRestocked: '2024-01-20',
    },
    {
      id: 'MAT-002',
      name: 'Material B',
      currentStock: 150,
      minStock: 200,
      maxStock: 800,
      unit: 'units',
      status: 'low',
      location: 'Warehouse B',
      lastRestocked: '2024-01-15',
    },
    {
      id: 'MAT-003',
      name: 'Component X',
      currentStock: 850,
      minStock: 300,
      maxStock: 1200,
      unit: 'pieces',
      status: 'healthy',
      location: 'Warehouse A',
      lastRestocked: '2024-01-22',
    },
    {
      id: 'MAT-004',
      name: 'Raw Material Y',
      currentStock: 80,
      minStock: 100,
      maxStock: 500,
      unit: 'kg',
      status: 'critical',
      location: 'Warehouse C',
      lastRestocked: '2024-01-10',
    },
  ];

  const stats = {
    total: items.length,
    healthy: items.filter(i => i.status === 'healthy').length,
    low: items.filter(i => i.status === 'low').length,
    critical: items.filter(i => i.status === 'critical').length,
  };

  return (
    <ModulePage title="Stock Levels" description="Current stock levels and inventory status">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="card">
            <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
            <div className="text-sm text-slate-600 mt-1">Total Items</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-emerald-600">{stats.healthy}</div>
            <div className="text-sm text-slate-600 mt-1">Healthy</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-yellow-600">{stats.low}</div>
            <div className="text-sm text-slate-600 mt-1">Low Stock</div>
          </div>
          <div className="card">
            <div className="text-2xl font-bold text-red-600">{stats.critical}</div>
            <div className="text-sm text-slate-600 mt-1">Critical</div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Stock Levels</h2>
          <div className="space-y-4">
            {items.map((item) => {
              const stockPercentage = (item.currentStock / item.maxStock) * 100;
              const isLow = item.currentStock < item.minStock;
              
              return (
                <div key={item.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${
                          item.status === 'healthy' ? 'bg-emerald-100' :
                          item.status === 'low' ? 'bg-yellow-100' :
                          'bg-red-100'
                        }`}>
                          <Package className={`w-5 h-5 ${
                            item.status === 'healthy' ? 'text-emerald-600' :
                            item.status === 'low' ? 'text-yellow-600' :
                            'text-red-600'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                          <p className="text-sm text-slate-600 mt-1">{item.id} • {item.location}</p>
                        </div>
                      </div>
                      <div className="ml-12 space-y-2">
                        <div className="flex items-center gap-6 text-sm text-slate-600">
                          <div>
                            <span className="font-semibold text-slate-900">{item.currentStock}</span> {item.unit} in stock
                          </div>
                          <div>
                            Min: <span className="font-semibold">{item.minStock}</span> {item.unit}
                          </div>
                          <div>
                            Max: <span className="font-semibold">{item.maxStock}</span> {item.unit}
                          </div>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all ${
                              item.status === 'healthy' ? 'bg-emerald-600' :
                              item.status === 'low' ? 'bg-yellow-600' :
                              'bg-red-600'
                            }`}
                            style={{ width: `${Math.min(stockPercentage, 100)}%` }}
                          />
                        </div>
                        {isLow && (
                          <div className="flex items-center gap-2 text-sm text-red-600 font-semibold">
                            <AlertTriangle className="w-4 h-4" />
                            <span>Below minimum stock level!</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                      item.status === 'healthy' ? 'bg-emerald-100 text-emerald-700' :
                      item.status === 'low' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {item.status}
                    </span>
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

export default StockLevels;

