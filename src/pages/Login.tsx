import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Building2 } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (login(email, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-primary-50/30 to-slate-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md border border-slate-200/60">
        <div className="flex items-center justify-center mb-8">
          <div className="p-4 bg-primary-100 rounded-2xl">
            <Building2 className="w-10 h-10 text-primary-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-slate-900 mb-2 tracking-tight">
          Staff Portal
        </h1>
        <p className="text-center text-slate-600 mb-8 text-lg">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
              placeholder="owner@company.com"
              required
            />
            <p className="text-xs text-slate-500 mt-2">
              Try: owner@company.com, manager@company.com, or staff@company.com
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
              placeholder="Enter any password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-all duration-200 font-semibold shadow-sm hover:shadow-md mt-6"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

