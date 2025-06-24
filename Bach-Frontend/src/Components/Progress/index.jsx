import React from 'react';
import { Trophy, Star, Calendar, TrendingUp, Music, Target, Award, BarChart3 } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

const ProgressPage = () => {
  const { user } = useAuthStore();

  const progressStats = [
    { label: 'Total Practice Hours', value: '156', change: '+12 this week', icon: Music, color: 'text-purple-600 bg-purple-100' },
    { label: 'Challenges Completed', value: '12', change: '+2 this month', icon: Trophy, color: 'text-yellow-600 bg-yellow-100' },
    { label: 'Skills Learned', value: '8', change: '+1 this week', icon: Star, color: 'text-blue-600 bg-blue-100' },
    { label: 'Current Streak', value: '15 days', change: 'Keep it up!', icon: TrendingUp, color: 'text-green-600 bg-green-100' },
  ];

  const weeklyProgress = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.5 },
    { day: 'Wed', hours: 3.0 },
    { day: 'Thu', hours: 2.0 },
    { day: 'Fri', hours: 2.5 },
    { day: 'Sat', hours: 4.0 },
    { day: 'Sun', hours: 1.5 },
  ];

  const monthlyGoals = [
    { goal: 'Practice 60 hours', current: 48, target: 60, percentage: 80 },
    { goal: 'Complete 3 challenges', current: 2, target: 3, percentage: 67 },
    { goal: 'Learn 5 new songs', current: 3, target: 5, percentage: 60 },
    { goal: 'Connect with 10 musicians', current: 7, target: 10, percentage: 70 },
  ];

  const skillProgress = [
    { skill: 'Guitar Technique', level: 85, increase: 5 },
    { skill: 'Music Theory', level: 72, increase: 8 },
    { skill: 'Rhythm & Timing', level: 90, increase: 3 },
    { skill: 'Improvisation', level: 65, increase: 12 },
  ];

  const recentAchievements = [
    {
      title: 'Blues Master',
      description: 'Completed the Blues Scale Challenge',
      date: '2 days ago',
      icon: Trophy,
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      title: 'Practice Warrior',
      description: '100 hours of practice logged',
      date: '1 week ago',
      icon: Star,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      title: 'Social Butterfly',
      description: 'Connected with 20+ musicians',
      date: '2 weeks ago',
      icon: Award,
      color: 'text-blue-600 bg-blue-100'
    },
  ];

  const maxHours = Math.max(...weeklyProgress.map(day => day.hours));
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 mobile:py-4">
      {/* Header */}
      <div className="mb-6 mobile:mb-4">
        <h1 className="text-3xl mobile:text-2xl font-bold text-slate-900 mb-2">Your Progress</h1>
        <p className="text-slate-600 mobile:text-sm">Track your musical journey and celebrate your achievements</p>
      </div>      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mobile:gap-3 mb-6 mobile:mb-4">
        {progressStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-4 mobile:p-3 shadow-sm border border-slate-200/50">
              <div className="flex items-center justify-between mb-3 mobile:mb-2">
                <div className={`w-10 h-10 mobile:w-8 mobile:h-8 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-5 h-5 mobile:w-4 mobile:h-4" />
                </div>
                <TrendingUp className="w-4 h-4 mobile:w-3 mobile:h-3 text-green-500" />
              </div>
              <div className="text-2xl mobile:text-xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm mobile:text-xs text-slate-600 mb-2">{stat.label}</div>
              <div className="text-xs mobile:text-2xs text-green-600 font-medium">{stat.change}</div>
            </div>
          );
        })}
      </div>      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mobile:gap-4 mb-6 mobile:mb-4">
        {/* Weekly Practice Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-4 mobile:p-3">
          <div className="flex items-center justify-between mb-4 mobile:mb-3">
            <h2 className="text-xl mobile:text-lg font-semibold text-slate-900">Weekly Practice Hours</h2>
            <div className="text-sm mobile:text-xs text-slate-500">This week: 17 hours</div>
          </div>          <div className="space-y-3 mobile:space-y-2">
            {weeklyProgress.map((day, index) => (
              <div key={index} className="flex items-center space-x-3 mobile:space-x-2">
                <div className="w-10 mobile:w-8 text-sm mobile:text-xs font-medium text-slate-600">{day.day}</div>
                <div className="flex-1 bg-slate-200 rounded-full h-3 mobile:h-2 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-600 h-3 mobile:h-2 rounded-full transition-all duration-300 flex items-center justify-end pr-2 mobile:pr-1"
                    style={{ width: `${(day.hours / maxHours) * 100}%` }}
                  >
                    {day.hours > 0 && (
                      <span className="text-xs mobile:text-2xs text-white font-medium">{day.hours}h</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Goals */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-4 mobile:p-3">
          <div className="flex items-center justify-between mb-4 mobile:mb-3">
            <h2 className="text-xl mobile:text-lg font-semibold text-slate-900">Monthly Goals</h2>
            <span className="text-sm mobile:text-xs text-slate-500">January 2024</span>
          </div>
          <div className="space-y-6">
            {monthlyGoals.map((goal, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">{goal.goal}</span>
                  <span className="text-sm text-slate-500">{goal.current}/{goal.target}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${goal.percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-slate-500 mt-1">{goal.percentage}% complete</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skill Progress */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            <h2 className="text-xl font-semibold text-slate-900">Skill Development</h2>
          </div>
          <div className="space-y-6">
            {skillProgress.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">{skill.skill}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-green-600">+{skill.increase}%</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Award className="w-5 h-5 text-yellow-600" />
            <h2 className="text-xl font-semibold text-slate-900">Recent Achievements</h2>
          </div>
          <div className="space-y-4">
            {recentAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-lg">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${achievement.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{achievement.title}</h3>
                    <p className="text-sm text-slate-600 mb-1">{achievement.description}</p>
                    <p className="text-xs text-slate-500">{achievement.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="w-full mt-4 py-2 text-purple-600 hover:text-purple-800 font-medium text-sm">
            View All Achievements
          </button>
        </div>
      </div>

      {/* Progress Timeline */}
      <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200/50 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Calendar className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-900">Learning Journey</h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>
          <div className="space-y-8">
            {[
              { date: 'Jan 15, 2024', title: 'Completed Blues Scale Challenge', type: 'challenge' },
              { date: 'Jan 12, 2024', title: 'Reached 100 practice hours milestone', type: 'milestone' },
              { date: 'Jan 08, 2024', title: 'Connected with Marcus Johnson', type: 'social' },
              { date: 'Jan 05, 2024', title: 'Started Jazz Chord Progressions challenge', type: 'challenge' },
              { date: 'Jan 01, 2024', title: 'Joined SkillLink Creativo', type: 'milestone' },
            ].map((event, index) => (
              <div key={index} className="relative flex items-start space-x-4">
                <div className="relative z-10 w-8 h-8 bg-white border-2 border-purple-300 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-sm text-slate-500 mb-1">{event.date}</div>
                  <div className="text-slate-900 font-medium">{event.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;