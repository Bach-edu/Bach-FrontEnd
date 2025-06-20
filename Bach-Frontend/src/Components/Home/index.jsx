import React from "react";
import {
  Music,
  Users,
  Target,
  BookOpenCheck,
  Trophy,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-pink-800 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <Music className="w-12 h-12 mb-4" />
        <h1 className="text-4xl font-bold mb-2">SkillLink Creativo</h1>
        <p className="text-lg mb-6 max-w-xl">
          Connect, learn, and grow your musical skills with a community of passionate musicians
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-purple-800 font-semibold px-6 py-2 rounded-md hover:bg-purple-100 transition">
            Start Your Journey →
          </button>
          <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-purple-800 transition">
            Sign In
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 text-gray-900 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Everything You Need to Grow Musically</h2>
          <p className="mt-2 text-lg">
            From beginners to professionals, our platform provides the tools and community to accelerate your musical journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Connect with Musicians</h3>
            <p className="text-sm text-gray-600">
              Find fellow musicians who share your passion and complement your skills.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Target className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Set & Achieve Goals</h3>
            <p className="text-sm text-gray-600">
              Track your musical journey with personalized goals and milestones.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <BookOpenCheck className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Collaborate & Learn</h3>
            <p className="text-sm text-gray-600">
              Join projects, find mentors, and grow your musical abilities together.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <Trophy className="w-8 h-8 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Showcase Progress</h3>
            <p className="text-sm text-gray-600">
              Share your achievements and celebrate your musical growth with the community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;