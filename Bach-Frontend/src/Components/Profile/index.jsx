import React from "react";
import {
  UserCircle,
  Guitar,
  Piano,
  Mic,
  Trophy,
  Users,
  CalendarDays,
  Clock,
  Activity,
  Star,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 border-b pb-4">
          <UserCircle className="w-16 h-16 text-purple-500" />
          <div>
            <h2 className="text-2xl font-bold">Sofia Rodriguez</h2>
            <p className="text-sm text-gray-500">Madrid, Spain • Online</p>
            <div className="mt-1">
              <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full mr-2">
                Intermediate
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mr-2">
                Guitar
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full mr-2">
                Piano
              </span>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                Vocals
              </span>
            </div>
          </div>
          <button className="ml-auto bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700">
            Edit Profile
          </button>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700">
          Passionate musician looking to improve my skills and connect with fellow artists. I love collaborating on creative projects!
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Musical Genres */}
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="font-semibold mb-2">🎵 Musical Genres</h3>
            <div className="flex flex-wrap gap-2">
              {["Pop", "Rock", "Jazz", "Classical"].map((genre) => (
                <span
                  key={genre}
                  className="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="font-semibold mb-2">🏆 Achievements</h3>
            <div className="space-y-2">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                <p className="font-medium">First Challenge Complete</p>
                <p className="text-sm text-gray-600">Completed your first musical challenge<br/>Earned on 14/1/2024</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                <p className="font-medium">Social Butterfly</p>
                <p className="text-sm text-gray-600">Connected with 10+ musicians<br/>Earned on 31/1/2024</p>
              </div>
            </div>
          </div>

          {/* Musical Goals */}
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="font-semibold mb-2">🎯 Musical Goals</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Master jazz guitar</li>
              <li>Learn music production</li>
              <li>Form a band</li>
            </ul>
          </div>

          {/* Progress Overview */}
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="font-semibold mb-2">⭐ Progress Overview</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium flex justify-between">
                  <span>Challenges Completed</span>
                  <span>12/15</span>
                </p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="bg-purple-500 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div>
                <p className="font-medium flex justify-between">
                  <span>Practice Hours This Month</span>
                  <span>48/60</span>
                </p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="bg-purple-500 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
              <div>
                <p className="font-medium flex justify-between">
                  <span>Community Connections</span>
                  <span>24/30</span>
                </p>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="bg-purple-500 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Member Info */}
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="font-semibold mb-2">📅 Member Since</h3>
            <p className="text-sm text-gray-700">December 31, 2023</p>
          </div>

          {/* Summary */}
          <div className="bg-slate-50 rounded-xl p-4 text-center">
            <p className="text-xl font-semibold text-purple-600">156</p>
            <p className="text-sm text-gray-700">Practice Sessions</p>
            <p className="text-xl font-semibold text-purple-600 mt-4">24</p>
            <p className="text-sm text-gray-700">Connections</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
