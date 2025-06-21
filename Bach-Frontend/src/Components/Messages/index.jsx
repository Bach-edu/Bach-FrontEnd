import { useState } from 'react';
import { Search, Send, MessageSquare, Phone, Video, MoreVertical } from 'lucide-react';

// Este componente está hecho para funcionar sin tipado explícito
const MessagesPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const mockUsers = [
    {
      id: '2',
      name: 'Marcus Johnson',
      email: 'marcus@example.com',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'New York, USA',
      instruments: ['Drums'],
      skillLevel: 'advanced',
      genres: ['Jazz', 'Funk'],
      bio: '',
      goals: [],
      achievements: [],
      joinDate: new Date(),
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
      genres: ['Classical'],
      bio: '',
      goals: [],
      achievements: [],
      joinDate: new Date(),
      isOnline: false
    },
    {
      id: '4',
      name: 'Jake Thompson',
      email: 'jake@example.com',
      avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      location: 'London, UK',
      instruments: ['Bass'],
      skillLevel: 'beginner',
      genres: ['Rock', 'Blues'],
      bio: '',
      goals: [],
      achievements: [],
      joinDate: new Date(),
      isOnline: true
    }
  ];

  const mockMessages = [
    {
      id: '1',
      senderId: '2',
      receiverId: '1',
      content: 'Hey! I saw your guitar playing video. Really impressive technique!',
      timestamp: new Date('2024-01-15T10:30:00'),
      read: true
    },
    {
      id: '2',
      senderId: '1',
      receiverId: '2',
      content: 'Thank you so much! I\'ve been working on that piece for weeks.',
      timestamp: new Date('2024-01-15T10:35:00'),
      read: true
    },
    {
      id: '3',
      senderId: '2',
      receiverId: '1',
      content: 'Would you be interested in collaborating on a jazz fusion piece?',
      timestamp: new Date('2024-01-15T10:40:00'),
      read: true
    },
    {
      id: '4',
      senderId: '3',
      receiverId: '1',
      content: 'Hi! I\'m organizing a chamber music group. Would you like to join?',
      timestamp: new Date('2024-01-14T14:20:00'),
      read: false
    },
    {
      id: '5',
      senderId: '4',
      receiverId: '1',
      content: 'Could you give me some tips on bass guitar? I\'m just starting out.',
      timestamp: new Date('2024-01-13T16:45:00'),
      read: false
    }
  ];

  const conversations = mockUsers.map(user => {
    const userMessages = mockMessages.filter(msg =>
      msg.senderId === user.id || msg.receiverId === user.id
    );
    const lastMessage = userMessages[userMessages.length - 1];
    const unreadCount = userMessages.filter(msg =>
      msg.senderId === user.id && !msg.read
    ).length;

    return {
      id: user.id,
      participants: [user],
      lastMessage,
      unreadCount
    };
  });

  const getConversationMessages = (conversationId) => {
    return mockMessages
      .filter(msg =>
        msg.senderId === conversationId || msg.receiverId === conversationId
      )
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  };

  const selectedUser = selectedConversation ?
    mockUsers.find(user => user.id === selectedConversation) : null;

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() && selectedConversation) {
      console.log('Sending message:', newMessage, 'to:', selectedConversation);
      setNewMessage('');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden h-[calc(100vh-10rem)]">
        <div className="flex h-full">
          {/* Conversations List */}
          <div className="w-full md:w-1/3 border-r border-slate-200 flex flex-col">
            <div className="p-6 border-b border-slate-200">
              <h1 className="text-2xl font-bold text-slate-900 mb-4">Messages</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => {
                const user = conversation.participants[0];
                const isSelected = selectedConversation === conversation.id;

                return (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`w-full p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors text-left ${isSelected ? 'bg-purple-50 border-purple-200' : ''}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-12 h-12 rounded-full"
                        />
                        {user.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-sm font-semibold text-slate-900 truncate">{user.name}</h3>
                          {conversation.lastMessage && (
                            <span className="text-xs text-slate-500">
                              {conversation.lastMessage.timestamp.toLocaleDateString()}
                            </span>
                          )}
                        </div>
                        {conversation.lastMessage && (
                          <p className="text-sm text-slate-600 truncate">
                            {conversation.lastMessage.content}
                          </p>
                        )}
                      </div>
                      {conversation.unreadCount > 0 && (
                        <div className="w-5 h-5 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center">
                          {conversation.unreadCount}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chat Area */}
          <div className="hidden md:flex md:flex-1 flex-col">
            {selectedUser ? (
              <>
                <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={selectedUser.avatar}
                        alt={selectedUser.name}
                        className="w-10 h-10 rounded-full"
                      />
                      {selectedUser.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-slate-900">{selectedUser.name}</h2>
                      <p className="text-sm text-slate-500">
                        {selectedUser.isOnline ? 'Online' : 'Last seen recently'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg">
                      <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {getConversationMessages(selectedConversation).map((message) => {
                    const isSent = message.senderId === '1';
                    return (
                      <div key={message.id} className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${isSent ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-900'}`}>
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${isSent ? 'text-purple-200' : 'text-slate-500'}`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <form onSubmit={handleSendMessage} className="p-6 border-t border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full px-4 py-3 border border-slate-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={!newMessage.trim()}
                      className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Select a conversation</h3>
                  <p className="text-slate-600">Choose a conversation from the list to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
