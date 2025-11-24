import ModulePage from '../ModulePage';
import { Award, Calendar, User, CheckCircle2, Clock, FileText, Star, Target } from 'lucide-react';
import { format } from 'date-fns';
import { useAuth } from '../../context/AuthContext';

const Reviews = () => {
  const { user } = useAuth();

  const reviews = [
    {
      id: 'REV-001',
      period: 'Q4 2023',
      reviewDate: new Date(2023, 11, 15),
      status: 'completed',
      reviewer: 'Manager Name',
      overallRating: 4.5,
      categories: {
        'Performance': 4.5,
        'Communication': 4.0,
        'Teamwork': 5.0,
        'Innovation': 4.0,
      },
      strengths: [
        'Excellent problem-solving skills',
        'Strong team collaboration',
        'Consistent high-quality work',
      ],
      areasForImprovement: [
        'Time management in high-pressure situations',
        'Public speaking confidence',
      ],
      goals: [
        'Complete advanced training course',
        'Lead cross-functional project',
      ],
    },
    {
      id: 'REV-002',
      period: 'Q1 2024',
      reviewDate: new Date(2024, 2, 20),
      status: 'scheduled',
      reviewer: 'Manager Name',
      overallRating: null,
    },
    {
      id: 'REV-003',
      period: 'Q3 2023',
      reviewDate: new Date(2023, 8, 10),
      status: 'completed',
      reviewer: 'Previous Manager',
      overallRating: 4.2,
      categories: {
        'Performance': 4.0,
        'Communication': 4.5,
        'Teamwork': 4.0,
        'Innovation': 4.5,
      },
      strengths: [
        'Creative solutions',
        'Good client relationships',
      ],
      areasForImprovement: [
        'Documentation skills',
      ],
      goals: [
        'Improve technical documentation',
      ],
    },
  ];

  const completedReviews = reviews.filter(r => r.status === 'completed');
  const upcomingReviews = reviews.filter(r => r.status === 'scheduled');

  return (
    <ModulePage title="Performance Reviews" description="Performance review history and upcoming reviews">
      <div className="space-y-6">
        {/* Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary-100 rounded-lg">
                <Award className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{completedReviews.length}</div>
                <div className="text-sm text-slate-600">Completed Reviews</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">{upcomingReviews.length}</div>
                <div className="text-sm text-slate-600">Upcoming</div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Star className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">
                  {completedReviews.length > 0 
                    ? (completedReviews.reduce((sum, r) => sum + (r.overallRating || 0), 0) / completedReviews.length).toFixed(1)
                    : 'N/A'}
                </div>
                <div className="text-sm text-slate-600">Avg Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Reviews */}
        {upcomingReviews.length > 0 && (
          <div className="card bg-blue-50 border-blue-200">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Upcoming Reviews</h2>
            <div className="space-y-4">
              {upcomingReviews.map((review) => (
                <div key={review.id} className="p-6 bg-white border border-blue-200 rounded-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{review.period} Review</h3>
                      <div className="flex items-center gap-3 mt-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>Scheduled: {format(review.reviewDate, 'MMM d, yyyy')}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Reviewer: {review.reviewer}</span>
                        </div>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-xs font-semibold">
                      Scheduled
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completed Reviews */}
        <div className="card">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Review History</h2>
          <div className="space-y-6">
            {completedReviews.map((review) => (
              <div key={review.id} className="p-6 border border-slate-200 rounded-xl hover:border-primary-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <Award className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{review.period} Performance Review</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <Calendar className="w-4 h-4" />
                            {format(review.reviewDate, 'MMM d, yyyy')}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-slate-600">
                            <User className="w-4 h-4" />
                            {review.reviewer}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-12 space-y-4">
                      {/* Overall Rating */}
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-slate-700">Overall Rating:</span>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-5 h-5 ${
                                star <= Math.round(review.overallRating || 0)
                                  ? 'text-yellow-500 fill-yellow-500'
                                  : 'text-slate-300'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-lg font-bold text-slate-900">{review.overallRating}/5.0</span>
                        </div>
                      </div>

                      {/* Category Ratings */}
                      <div>
                        <div className="text-sm font-semibold text-slate-900 mb-2">Category Ratings:</div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {review.categories && Object.entries(review.categories).map(([category, rating]) => (
                            <div key={category} className="p-3 bg-slate-50 rounded-lg">
                              <div className="text-xs text-slate-600 mb-1">{category}</div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span className="text-sm font-bold text-slate-900">{rating}/5.0</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Strengths */}
                      <div>
                        <div className="text-sm font-semibold text-emerald-700 mb-2">Strengths:</div>
                        <ul className="space-y-1">
                          {review.strengths && review.strengths.map((strength, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                              <span>{strength}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Areas for Improvement */}
                      <div>
                        <div className="text-sm font-semibold text-yellow-700 mb-2">Areas for Improvement:</div>
                        <ul className="space-y-1">
                          {review.areasForImprovement && review.areasForImprovement.map((area, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                              <span className="text-yellow-600 mt-0.5">•</span>
                              <span>{area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Goals */}
                      <div>
                        <div className="text-sm font-semibold text-primary-700 mb-2">Goals Set:</div>
                        <ul className="space-y-1">
                          {review.goals && review.goals.map((goal, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                              <Target className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-xs font-semibold">
                    Completed
                  </span>
                </div>
                <div className="flex gap-2 ml-12">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all text-sm font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    View Full Review
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

export default Reviews;

