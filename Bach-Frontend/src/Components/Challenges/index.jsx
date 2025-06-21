import React, { useState, useMemo } from 'react';
import { Trophy, Plus, Users, Calendar, Clock, Star, Filter } from 'lucide-react';


const ChallengesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filters, setFilters] = useState({
    instrument: '',
    skillLevel: '',
    status: ''
  });

  const mockChallenges = [
    {
      id: '1',
      title: 'Blues Scale Mastery',
      description: 'Master the blues scale in all five positions across the fretboard. Practice daily exercises and submit weekly progress videos.',
      creator: {
        id: '2',
        name: 'Marcus Johnson',
        email: 'marcus@example.com',
        avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
        location: 'New York, USA',
        instruments: ['Guitar'],
        skillLevel: 'advanced',
        genres: ['Blues', 'Rock'],
        bio: '',
        goals: [],
        achievements: [],
        joinDate: new Date(),
        isOnline: true
      },
      participants: [],
      maxParticipants: 15,
      instrument: 'Guitar',
      skillLevel: 'intermediate',
      duration: '2 weeks',
      startDate: new Date('2024-02-01'),
      endDate: new Date('2024-02-15'),
      status: 'open',
      tags: ['scales', 'blues', 'technique']
    },
    {
      id: '2',
      title: 'Jazz Chord Progressions',
      description: 'Learn and practice essential jazz chord progressions including ii-V-I, circle of fifths, and tritone substitutions.',
      creator: {
        id: '3',
        name: 'Elena Vasquez',
        email: 'elena@example.com',
        avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
        location: 'Barcelona, Spain',
        instruments: ['Piano'],
        skillLevel: 'professional',
        genres: ['Jazz'],
        bio: '',
        goals: [],
        achievements: [],
        joinDate: new Date(),
        isOnline: false
      },
      participants: [],
      maxParticipants: 10,
      instrument: 'Piano',
      skillLevel: 'advanced',
      duration: '3 weeks',
      startDate: new Date('2024-02-05'),
      endDate: new Date('2024-02-26'),
      status: 'active',
      tags: ['jazz', 'chords', 'harmony']
    },
    {
      id: '3',
      title: 'Rhythm Guitar Bootcamp',
      description: 'Build solid rhythm guitar foundation with strumming patterns, chord changes, and timing exercises.',
      creator: {
        id: '1',
        name: 'You',
        email: 'you@example.com',
        avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
        location: 'Madrid, Spain',
        instruments: ['Guitar'],
        skillLevel: 'intermediate',
        genres: [],
        bio: '',
        goals: [],
        achievements: [],
        joinDate: new Date(),
        isOnline: true
      },
      participants: [],
      maxParticipants: 20,
      instrument: 'Guitar',
      skillLevel: 'beginner',
      duration: '4 weeks',
      startDate: new Date('2024-02-10'),
      endDate: new Date('2024-03-10'),
      status: 'open',
      tags: ['rhythm', 'strumming', 'chords']    }
  ];

  // Filtrar challenges basado en filtros seleccionados
  const filteredChallenges = useMemo(() => {
    let filtered = mockChallenges;

    // Filtrar por instrumento
    if (filters.instrument) {
      filtered = filtered.filter(challenge => 
        challenge.instrument.toLowerCase() === filters.instrument.toLowerCase()
      );
    }

    // Filtrar por nivel de habilidad
    if (filters.skillLevel) {
      filtered = filtered.filter(challenge => 
        challenge.skillLevel === filters.skillLevel
      );
    }

    // Filtrar por estado
    if (filters.status) {
      filtered = filtered.filter(challenge => 
        challenge.status === filters.status
      );
    }

    // Filtrar por pestaña activa
    if (activeTab === 'joined') {
      // Aquí podrías filtrar por challenges en los que el usuario participó
      // Por ahora mostramos todos
    } else if (activeTab === 'created') {
      // Filtrar por challenges creados por el usuario actual
      filtered = filtered.filter(challenge => 
        challenge.creator.name === 'You'
      );
    }

    return filtered;
  }, [mockChallenges, filters, activeTab]);

  // Función para manejar cambios en los filtros
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const ChallengeCard = ({ challenge }) => {
    const statusColors = {
      open: 'bg-green-100 text-green-700',
      active: 'bg-blue-100 text-blue-700',
      completed: 'bg-slate-100 text-slate-700'
    };

    const skillLevelColors = {
      beginner: 'bg-green-100 text-green-700',
      intermediate: 'bg-yellow-100 text-yellow-700',
      advanced: 'bg-orange-100 text-orange-700',
      professional: 'bg-purple-100 text-purple-700'
    };

    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-6 hover:shadow-md transition-all duration-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[challenge.status]}`}>
              {challenge.status.charAt(0).toUpperCase() + challenge.status.slice(1)}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${skillLevelColors[challenge.skillLevel]}`}>
              {challenge.skillLevel}
            </span>
          </div>
          <Trophy className="w-5 h-5 text-yellow-500" />
        </div>

        <h3 className="text-lg font-semibold text-slate-900 mb-2">{challenge.title}</h3>
        <p className="text-slate-600 mb-4 line-clamp-3">{challenge.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {challenge.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs">
              #{tag}
            </span>
          ))}
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-slate-600">
              <Users className="w-4 h-4" />
              <span>{challenge.participants.length}/{challenge.maxParticipants} participants</span>
            </div>
            <div className="flex items-center space-x-1 text-slate-600">
              <Calendar className="w-4 h-4" />
              <span>{challenge.duration}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <img
              src={challenge.creator.avatar}
              alt={challenge.creator.name}
              className="w-5 h-5 rounded-full"
            />
            <span>Created by {challenge.creator.name}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Starts {challenge.startDate.toLocaleDateString()}
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors duration-200">
            {challenge.status === 'open' ? 'Join Challenge' : 'View Details'}
          </button>
        </div>
      </div>
    );
  };

  const CreateChallengeForm= () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-900">Create New Challenge</h2>
            <button
              onClick={() => setShowCreateForm(false)}
              className="text-slate-500 hover:text-slate-700"
            >
              ×
            </button>
          </div>
        </div>

        <form className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Challenge Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="e.g., Blues Scale Mastery"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Describe what participants will learn and achieve..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Instrument</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="">Select instrument</option>
                <option value="Guitar">Guitar</option>
                <option value="Piano">Piano</option>
                <option value="Drums">Drums</option>
                <option value="Bass">Bass</option>
                <option value="Violin">Violin</option>
                <option value="Vocals">Vocals</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Skill Level</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="professional">Professional</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Duration</label>
              <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option value="">Select duration</option>
                <option value="1 week">1 week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="3 weeks">3 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2 months">2 months</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Max Participants</label>
              <input
                type="number"
                min="1"
                max="50"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="e.g., 15"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Start Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Tags (comma-separated)</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="e.g., blues, scales, technique"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setShowCreateForm(false)}
              className="px-4 py-2 text-slate-600 hover:text-slate-800 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
            >
              Create Challenge
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Musical Challenges</h1>
          <p className="text-slate-600">Join challenges to improve your skills and connect with other musicians</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="mt-4 sm:mt-0 flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
        >
          <Plus className="w-5 h-5" />
          <span>Create Challenge</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center space-x-1 mb-8 bg-slate-100 rounded-lg p-1">
        {[
          { id: 'all' , label: 'All Challenges' },
          { id: 'joined', label: 'Joined' },
          { id: 'created', label: 'Created by Me' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-4 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-slate-400" />
            <span className="text-sm font-medium text-slate-700">Filter by:</span>
          </div>          <select 
            value={filters.instrument}
            onChange={(e) => handleFilterChange('instrument', e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Instruments</option>
            <option value="guitar">Guitar</option>
            <option value="piano">Piano</option>
            <option value="drums">Drums</option>
            <option value="bass">Bass</option>
            <option value="violin">Violin</option>
            <option value="vocals">Vocals</option>
          </select>
          <select 
            value={filters.skillLevel}
            onChange={(e) => handleFilterChange('skillLevel', e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="professional">Professional</option>
          </select>
          <select 
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">All Status</option>
            <option value="open">Open</option>
            <option value="active">Active</option>            <option value="completed">Completed</option>
          </select>
          <button
            onClick={() => setFilters({ instrument: '', skillLevel: '', status: '' })}
            className="px-4 py-2 text-sm text-slate-600 hover:text-slate-800 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors duration-200"
          >
            Clear Filters
          </button>        </div>
      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-slate-600">
          Showing {filteredChallenges.length} of {mockChallenges.length} challenges
        </p>
        {(filters.instrument || filters.skillLevel || filters.status) && (
          <p className="text-sm text-purple-600">
            Filters applied
          </p>
        )}
      </div>

      {/* Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChallenges.length > 0 ? (
          filteredChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No challenges found</h3>
            <p className="text-slate-500">Try adjusting your filters or create a new challenge!</p>
          </div>
        )}
      </div>

      {/* Create Challenge Modal */}
      {showCreateForm && <CreateChallengeForm />}
    </div>
  );
};

export default ChallengesPage;