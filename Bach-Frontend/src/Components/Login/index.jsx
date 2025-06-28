import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, Mail, Lock, User, Guitar, Piano, SmilePlus, Eye, EyeOff } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { loginBack, registerBack } from '../../utils/api';

const LoginPage = () => {
  const { login, register, isLoading, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: "",
    password: "",
    nombreReal: '',
    intereses: '',
    instrumentoDominados: ''
  });
  //const res = loginBack(formData);
  //console.log('📡 Respuesta del backend (login):', res);

  useEffect(() => {
    console.log('🔄 LoginPage mount - isAuthenticated:', isAuthenticated, 'isLoading:', isLoading);
    if (isAuthenticated && !isLoading) {
      console.log('➡️ Ya autenticado, redirigiendo al dashboard...');
      navigate('/dashboard');
    }
  }, []); // Solo al montar

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let success = false;
      if (isLoginMode) {
        // Llamada correcta: paso email y password
        const res = await loginBack(formData.email, formData.password);
        console.log('📡 Respuesta del backend (login):', res);

        if (!res.success) {
          alert(res.message);
          return;
        }

        // Guarda el usuario/token en tu store
        success = await login(formData.email, formData.password);
      } else {
        // similar para registerBack...
        const userData = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          nombreReal: formData.nombreReal,
          intereses: [formData.intereses],
          instrumentoDominados: [formData.instrumentoDominados]
        };
        console.log('🧾 Enviando al backend:', JSON.stringify(userData, null, 2));
        const res = await registerBack(userData);
        console.log('📡 Respuesta del backend (register):', res);
        if (res.success === false) { alert(res.message); return; }
        success = await register(userData);
      }

      if (success) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Music className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Bach Edu
          </h1>
          <p className="text-slate-600">
            {isLoginMode ? 'Welcome back! Continue your musical journey' : 'Start your musical adventure today'}
          </p>
        </div>
        {/* Empieza formulario */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200/50">
          <div className="flex mb-6 bg-slate-100 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setIsLoginMode(true)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${isLoginMode
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-800'
                }`}
            >

              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLoginMode(false)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${!isLoginMode
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
                      name="nombreReal"
                      value={formData.nombreReal}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                      required={!isLoginMode}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
                  <div className="relative">
                    <SmilePlus className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Create a artist username"
                      required={!isLoginMode}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Instruments</label>
                  <div className="relative">
                    <Guitar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      name="instrumentoDominados"
                      value={formData.instrumentoDominados}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      required={!isLoginMode}
                    >
                      <option value="">Select an instrument</option>
                      <option value="PIANO">PIANO</option>
                      <option value="GUITARRA">GUITARRA</option>
                      <option value="VIOLIN">VIOLIN</option>
                      <option value="BATERIA">BATERIA</option>
                      <option value="VOCAL">VOCAL</option>
                      <option value="OTROS">OTROS</option>

                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Interest</label>
                  <div className="relative">
                    <Piano className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      name="intereses"
                      value={formData.intereses}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
                      required={!isLoginMode}
                    >
                      <option value="">Select an option</option>
                      <option value="INSTRUMENTO">INSTRUMENTO</option>
                      <option value="TEORIA">TEORIA</option>
                      <option value="COMPOSICION">COMPOSICION</option>
                      <option value="PRODUCCION">PRODUCCION</option>
                      <option value="OTROS">OTROS</option>


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
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
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
              className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-blue-700 focus:ring-4 focus:ring-purple-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? 'Please wait...' : (isLoginMode ? 'Sign In' : 'Create Account')}
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
