import  { useState } from 'react';
import { Music, Mail, Lock, User, MapPin, Guitar, Eye, EyeOff } from 'lucide-react';

const LoginPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    location: '',
    instrument: ''
  });

  const [message, setMessage] = useState('');

  // Simulación de login
  const mockLogin = async (email, password) => {
    console.log('🔐 Login:', email, password);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  };

  // Simulación de registro
  const mockRegister = async (data) => {
    console.log('📝 Register:', data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLoginMode) {
        await mockLogin(formData.email, formData.password);
        setMessage('✅ Login successful!');
      } else {
        await mockRegister({
          name: formData.name,
          email: formData.email,
          location: formData.location,
          instruments: [formData.instrument],
          skillLevel: 'beginner',
          genres: [],
          bio: '',
          goals: []
        });
        setMessage('✅ Registration successful!');
      }
      setIsAuthenticated(true);
    } catch (error) {
      console.error('❌ Error:', error);
      setMessage('❌ Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-green-600">🎉 {message}</h1>
          <p className="text-slate-700">You are now logged in. This is a standalone component.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Music className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            SkillLink Creativo
          </h1>
          <p className="text-slate-600">
            {isLoginMode ? 'Welcome back! Continue your musical journey' : 'Start your musical adventure today'}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200/50">
          <div className="flex mb-6 bg-slate-100 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setIsLoginMode(true)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                isLoginMode
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLoginMode(false)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                !isLoginMode
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLoginMode && (
              <>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., Bogotá, Colombia"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Primary Instrument</label>
                  <div className="relative">
                    <Guitar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      name="instrument"
                      value={formData.instrument}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
                      required
                    >
                      <option value="">Select an instrument</option>
                      <option value="Guitar">Guitar</option>
                      <option value="Piano">Piano</option>
                      <option value="Violin">Violin</option>
                      <option value="Drums">Drums</option>
                      <option value="Bass">Bass</option>
                      <option value="Vocals">Vocals</option>
                      <option value="Saxophone">Saxophone</option>
                      <option value="Trumpet">Trumpet</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-blue-700 focus:ring-4 focus:ring-purple-200 disabled:opacity-50 shadow-lg"
            >
              {isLoading ? 'Please wait...' : isLoginMode ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              {isLoginMode ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                {isLoginMode ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
