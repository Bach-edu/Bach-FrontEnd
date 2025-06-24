import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Mock user data
const mockUser = {
  id: '1',
  name: 'Sofia Rodriguez',
  email: 'sofia@example.com',
  avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
  location: 'Madrid, Spain',
  instruments: ['Guitar', 'Piano', 'Vocals'],
  skillLevel: 'intermediate',
  genres: ['Pop', 'Rock', 'Jazz', 'Classical'],
  bio: 'Passionate musician looking to improve my skills and connect with fellow artists. I love collaborating on creative projects!',
  goals: ['Master jazz guitar', 'Learn music production', 'Form a band'],
  achievements: [
    {
      id: '1',
      title: 'First Challenge Complete',
      description: 'Completed your first musical challenge',
      icon: 'trophy',
      dateEarned: new Date('2024-01-15'),
      category: 'challenge'
    },
    {
      id: '2',
      title: 'Social Butterfly',
      description: 'Connected with 10+ musicians',
      icon: 'users',
      dateEarned: new Date('2024-02-01'),
      category: 'social'
    }
  ],
  joinDate: new Date('2024-01-01'),
  isOnline: true
};

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,
      hasInitialized: false,

      initialize: () => {
        console.log('🔑 AuthStore inicializando...');
        const state = get();
        
        // Si ya tenemos datos persistidos, mantener el estado de autenticación
        if (state.user) {
          console.log('👤 Usuario encontrado en storage:', state.user.name);
          set({ 
            isAuthenticated: true, 
            isLoading: false, 
            hasInitialized: true 
          });
        } else {
          console.log('🔍 No hay usuario en storage');
          set({ 
            isAuthenticated: false, 
            isLoading: false, 
            hasInitialized: true 
          });
        }
        console.log('⏱️ AuthStore inicialización completa');
      },

      login: async (email, password) => {
        console.log('🔐 Iniciando login para:', email);
        set({ isLoading: true });

        try {
          await new Promise(resolve => setTimeout(resolve, 500));

          const user = {
            ...mockUser,
            email,
            name: email.split('@')[0]
          };

          set({
            user,
            isAuthenticated: true,
            isLoading: false
          });

          console.log('✅ Login exitoso!');
          return true;
        } catch (error) {
          console.error('❌ Error en login:', error);
          set({ isLoading: false });
          return false;
        }
      },

      register: async (userData) => {
        console.log('📝 Iniciando registro para:', userData.email);
        set({ isLoading: true });

        try {
          await new Promise(resolve => setTimeout(resolve, 500));

          const user = {
            ...mockUser,
            ...userData,
            id: Date.now().toString(),
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`
          };

          set({
            user,
            isAuthenticated: true,
            isLoading: false
          });

          console.log('✅ Registro exitoso!');
          return true;
        } catch (error) {
          console.error('❌ Error en registro:', error);
          set({ isLoading: false });
          return false;
        }
      },

      logout: () => {
        console.log('🚪 Cerrando sesión...');
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false
        });
        console.log('✅ Sesión cerrada');
      },

      setLoading: (loading) => {
        set({ isLoading: loading });
      }
    }),    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        hasInitialized: false // Siempre empezar como false al cargar
      })
    }
  )
);
