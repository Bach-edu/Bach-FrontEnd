import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Music, Star, MessageSquare, UserPlus } from 'lucide-react';
import { useUsers } from '../../hooks/useUsers';

const DiscoverPage = () => {
  const { users, isLoading, searchUsers } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    instrument: '',
    skillLevel: '',
    location: '',
    genre: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    searchUsers({ ...filters, searchTerm });
  }, [searchTerm, filters, searchUsers]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      instrument: '',
      skillLevel: '',
      location: '',
      genre: ''
    });
    setSearchTerm('');
  };

  const skillLevelColors = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-orange-100 text-orange-700',
    professional: 'bg-purple-100 text-purple-700'
  };

  const UserCard = ({ user }) => (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-6 hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-xl border-2 border-white shadow-sm"
          />
          {user.isOnline && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{user.name}</h3>
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4" />
                <span>{user.location}</span>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${skillLevelColors[user.skillLevel]}`}>
              {user.skillLevel}
            </span>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {user.instruments.slice(0, 3).map((instrument, index) => (
              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                {instrument}
              </span>
            ))}
            {user.instruments.length > 3 && (
              <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs">
                +{user.instruments.length - 3} more
              </span>
            )}
          </div>

          <p className="text-sm text-slate-600 mb-4 line-clamp-2">{user.bio}</p>

          <div className="flex flex-wrap gap-1 mb-4">
            {user.genres.slice(0, 2).map((genre, index) => (
              <span key={index} className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs">
                {genre}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4" />
                <span>{user.achievements.length} achievements</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <MessageSquare className="w-4 h-4" />
              </button>
              <button className="flex items-center space-x-1 px-3 py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors">
                <UserPlus className="w-4 h-4" />
                <span>Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Discover Musicians</h1>
        <p className="text-slate-600">Connect with fellow musicians and expand your musical network</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200/50 p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search musicians by name, bio, or interests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        {showFilters && (
          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Instrument</label>
                <select
                  value={filters.instrument}
                  onChange={(e) => handleFilterChange('instrument', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">All Instruments</option>
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
                <select
                  value={filters.skillLevel}
                  onChange={(e) => handleFilterChange('skillLevel', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Enter city or country"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Genre</label>
                <select
                  value={filters.genre}
                  onChange={(e) => handleFilterChange('genre', e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">All Genres</option>
                  <option value="Rock">Rock</option>
                  <option value="Jazz">Jazz</option>
                  <option value="Classical">Classical</option>
                  <option value="Pop">Pop</option>
                  <option value="Blues">Blues</option>
                  <option value="Electronic">Electronic</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-slate-600 hover:text-slate-800 text-sm font-medium"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-slate-600">
          {isLoading ? 'Searching...' : `Found ${users.length} musicians`}
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6 animate-pulse">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-slate-200 rounded-xl"></div>
                <div className="flex-1">
                  <div className="h-4 bg-slate-200 rounded mb-2"></div>
                  <div className="h-3 bg-slate-200 rounded mb-4 w-2/3"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-200 rounded"></div>
                    <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : users.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Music className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900 mb-2">No musicians found</h3>
          <p className="text-slate-600">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </div>
  );
};

export default DiscoverPage;
