import React from 'react';
import { Music, Users, Trophy, MessageSquare, TrendingUp, Calendar, Star, Play } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';

const Dashboard = () => {
  const { user } = useAuthStore();

  const stats = [
    { label: 'Challenges Completed', value: '12', icon: Trophy, color: 'text-yellow-600 bg-yellow-100' },
    { label: 'Connections Made', value: '24', icon: Users, color: 'text-blue-600 bg-blue-100' },
    { label: 'Practice Hours', value: '48', icon: Music, color: 'text-purple-600 bg-purple-100' },
    { label: 'Messages', value: '7', icon: MessageSquare, color: 'text-green-600 bg-green-100' },
  ];

  const recentActivities = [
    { type: 'challenge', title: 'Completed "Jazz Chord Progressions"', time: '2 hours ago', icon: Trophy },
    { type: 'connection', title: 'Connected with Marcus Johnson', time: '5 hours ago', icon: Users },
    { type: 'practice', title: 'Logged 2 hours of guitar practice', time: '1 day ago', icon: Music },
    { type: 'message', title: 'New message from Elena Vasquez', time: '2 days ago', icon: MessageSquare },
  ];

  const recommendedChallenges = [
    {
      title: 'Blues Scale Mastery',
      description: 'Master the blues scale in all positions',
      participants: 8,
      duration: '2 weeks',
      level: 'Intermediate'
    },
    {
      title: 'Rhythm Guitar Fundamentals',
      description: 'Build solid rhythm guitar foundation',
      participants: 15,
      duration: '3 weeks',
      level: 'Beginner'
    },
    {
      title: 'Song Arrangement Challenge',
      description: 'Arrange a popular song for your instrument',
      participants: 6,
      duration: '1 month',
      level: 'Advanced'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}! 🎵</h1>
            <p className="text-purple-100 text-lg">Ready to continue your musical journey? Let's make some progress today!</p>
          </div>
          <div className="absolute top-0 right-0 opacity-10 transform rotate-12">
            <Music className="w-32 h-32" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/50 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-slate-900">Recent Activity</h2>
              <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-900 font-medium">{activity.title}</p>
                      <p className="text-sm text-slate-500">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Actions & Recommendations */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors duration-200">
                <Play className="w-5 h-5" />
                <span className="font-medium">Start Practice Session</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200">
                <Users className="w-5 h-5" />
                <span className="font-medium">Find Practice Partners</span>
              </button>
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 transition-colors duration-200">
                <Trophy className="w-5 h-5" />
                <span className="font-medium">Join New Challenge</span>
              </button>
            </div>
          </div>

          {/* This Week's Goal */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200/50">
            <div className="flex items-center space-x-2 mb-3">
              <Star className="w-5 h-5 text-orange-600" />
              <h3 className="text-lg font-semibold text-slate-900">This Week's Goal</h3>
            </div>
            <p className="text-slate-700 mb-4">Practice jazz chord progressions for 5 hours</p>
            <div className="w-full bg-orange-200 rounded-full h-2 mb-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <p className="text-sm text-slate-600">3 of 5 hours completed</p>
          </div>
        </div>
      </div>

      {/* Recommended Challenges */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Recommended Challenges</h2>
          <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">View All Challenges</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedChallenges.map((challenge, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-6 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  challenge.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                  challenge.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {challenge.level}
                </span>
                <div className="flex items-center space-x-1 text-sm text-slate-500">
                  <Users className="w-4 h-4" />
                  <span>{challenge.participants}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{challenge.title}</h3>
              <p className="text-slate-600 mb-4">{challenge.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>{challenge.duration}</span>
                </div>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors duration-200">
                  Join Challenge
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
