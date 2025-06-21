import { useState, useEffect } from 'react';

const mockUsers = [
  {
    id: '2',
    name: 'Marcus Johnson',
    email: 'marcus@example.com',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'New York, USA',
    instruments: ['Drums', 'Percussion'],
    skillLevel: 'advanced',
    genres: ['Jazz', 'Funk', 'R&B'],
    bio: 'Professional drummer with 15+ years of experience. Love teaching and jamming with new people!',
    goals: ['Expand into electronic music', 'Teach more students'],
    achievements: [],
    joinDate: new Date('2023-06-15'),
    isOnline: true
  },
  {
    id: '3',
    name: 'Elena Vasquez',
    email: 'elena@example.com',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Barcelona, Spain',
    instruments: ['Violin', 'Piano'],
    skillLevel: 'professional',
    genres: ['Classical', 'Chamber Music', 'Contemporary'],
    bio: 'Classically trained violinist and composer. Always excited to mentor aspiring musicians.',
    goals: ['Compose a symphony', 'Collaborate with pop artists'],
    achievements: [],
    joinDate: new Date('2023-03-20'),
    isOnline: false
  },
  {
    id: '4',
    name: 'Jake Thompson',
    email: 'jake@example.com',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'London, UK',
    instruments: ['Bass', 'Guitar'],
    skillLevel: 'beginner',
    genres: ['Rock', 'Blues', 'Alternative'],
    bio: 'Just started my musical journey! Looking for friends to learn and grow with.',
    goals: ['Learn basic bass techniques', 'Join a band', 'Write original songs'],
    achievements: [],
    joinDate: new Date('2024-01-10'),
    isOnline: true
  },
  {
    id: '5',
    name: 'Amy Chen',
    email: 'amy@example.com',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    location: 'Toronto, Canada',
    instruments: ['Piano', 'Synthesizer', 'Vocals'],
    skillLevel: 'intermediate',
    genres: ['Electronic', 'Pop', 'Ambient'],
    bio: 'Electronic music producer and singer-songwriter. Love creating atmospheric soundscapes!',
    goals: ['Release first album', 'Learn advanced synthesis', 'Collaborate internationally'],
    achievements: [],
    joinDate: new Date('2023-09-05'),
    isOnline: true
  }
];

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setUsers(mockUsers);
      setFilteredUsers(mockUsers);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
  
  const searchUsers = (filters) => {
    let filtered = users;

    if (filters.instrument) {      filtered = filtered.filter(user => 
        user.instruments.some(inst => 
          inst.toLowerCase().includes(filters.instrument.toLowerCase())
        )
      );
    }

    if (filters.skillLevel) {
      filtered = filtered.filter(user => user.skillLevel === filters.skillLevel);
    }

    if (filters.location) {      filtered = filtered.filter(user => 
        user.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    if (filters.genre) {
      filtered = filtered.filter(user =>        user.genres.some(genre => 
          genre.toLowerCase().includes(filters.genre.toLowerCase())
        )
      );
    }

    if (filters.searchTerm) {      filtered = filtered.filter(user => 
        user.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        user.bio.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  };

  return {
    users: filteredUsers,
    isLoading,
    searchUsers
  };
};