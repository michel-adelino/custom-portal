import { ReactNode } from 'react';

interface ModulePageProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

const ModulePage = ({ title, description, children }: ModulePageProps) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{title}</h1>
        {description && (
          <p className="text-slate-600 mt-2 text-lg">{description}</p>
        )}
      </div>

      {children || (
        <div className="card">
          <p className="text-slate-500">This module is under development. Content will be available soon.</p>
        </div>
      )}
    </div>
  );
};

export default ModulePage;

