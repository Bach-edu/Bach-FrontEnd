# SkillLink Creativo - Frontend

Una plataforma moderna y responsiva para músicos que permite conectarse, practicar y desarrollar habilidades musicales a través de desafíos colaborativos.

## 🎵 Descripción del Proyecto

SkillLink Creativo es una aplicación web diseñada para la comunidad musical, ofreciendo un espacio donde los músicos pueden:

- **Conectar** con otros músicos de su área
- **Practicar** con herramientas interactivas
- **Completar desafíos** musicales para mejorar sus habilidades
- **Seguir su progreso** con métricas detalladas
- **Comunicarse** con la comunidad

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Framework principal
- **Vite 6.3.5** - Build tool y dev server
- **React Router DOM 7.6.2** - Manejo de rutas
- **Tailwind CSS 4.1.10** - Estilos y diseño responsivo
- **Zustand 5.0.5** - Gestión de estado global
- **Lucide React 0.518.0** - Iconografía moderna

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **Vite** - Bundler y servidor de desarrollo
- **PostCSS** - Procesamiento de CSS

## 📱 Características Principales

### ✨ Diseño Responsivo
- Optimizado para dispositivos móviles (< 600px)
- Breakpoints personalizados para diferentes tamaños de pantalla
- Menú hamburguesa desplegable en dispositivos móviles
- Interfaz adaptativa hasta 1200px

### 🔐 Sistema de Autenticación
- Login/logout seguro
- Rutas protegidas
- Persistencia de sesión con localStorage
- Estados de carga y manejo de errores

### 🎯 Funcionalidades Core
- **Dashboard**: Panel principal con métricas y actividad reciente
- **Discover**: Exploración de músicos y contenido
- **Challenges**: Desafíos musicales interactivos
- **Messages**: Sistema de mensajería
- **Progress**: Seguimiento detallado del progreso personal
- **Profile**: Gestión del perfil de usuario

## 📂 Estructura del Proyecto

```
Bach-Frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── Components/
│   │   ├── Challenges/        # Desafíos musicales
│   │   ├── Dashboard/         # Panel principal
│   │   ├── Discover/          # Exploración
│   │   ├── Header/            # Navegación principal
│   │   ├── Home/              # Página de inicio
│   │   ├── LoadingSpinner/    # Componente de carga
│   │   ├── Login/             # Autenticación
│   │   ├── Messages/          # Mensajería
│   │   ├── Profile/           # Perfil de usuario
│   │   ├── Progress/          # Seguimiento de progreso
│   │   └── ProtectedRoute/    # Rutas protegidas
│   ├── hooks/
│   │   └── useUsers.js        # Hook personalizado
│   ├── routes/
│   │   └── index.jsx          # Configuración de rutas
│   ├── stores/
│   │   └── authStore.js       # Store de autenticación
│   ├── App.css                # Estilos globales
│   ├── App.jsx                # Componente principal
│   ├── index.css              # Estilos base
│   └── main.jsx               # Punto de entrada
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd Bach-Frontend
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint para verificar el código |

## 🎨 Diseño y UX

### Breakpoints Responsivos
- **Mobile**: < 600px - Menú hamburguesa, diseño compacto
- **Tablet**: 600px - 1200px - Navegación híbrida
- **Desktop**: > 1200px - Navegación completa, elementos expandidos

### Paleta de Colores
- **Primario**: Gradiente púrpura a azul (`purple-500` → `blue-600`)
- **Secundario**: Tonos de gris (`slate-50` → `slate-900`)
- **Acentos**: Verde para éxito, rojo para alertas, amarillo para logros

### Componentes de UI
- Tarjetas con sombras suaves y bordes redondeados
- Animaciones fluidas con CSS transitions
- Iconografía consistente con Lucide React
- Tipografía escalable y legible

## 🔧 Configuración de Desarrollo

### Tailwind CSS
Configuración personalizada con breakpoints y utilidades extendidas:

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '600px'},
        'xs': '480px',
      },
      fontSize: {
        '2xs': ['0.625rem', '0.75rem'],
      },
    },
  },
}
```

### Zustand Store
Gestión de estado simplificada para autenticación:

```javascript
// authStore.js
const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: true,
      // ... métodos
    })
  )
)
```

## 🚀 Despliegue

### Vercel (Recomendado)
La aplicación está configurada para desplegarse fácilmente en Vercel:

1. **Conectar repositorio a Vercel**
2. **Configuración automática** (ya incluida en `vercel.json`)
3. **Deploy automático** en cada push a main

### Configuración de Vercel
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Otras Plataformas
- **Netlify**: Drag & drop de la carpeta `dist/`
- **GitHub Pages**: Con GitHub Actions
- **Railway/Render**: Conexión directa del repositorio

## 📊 Métricas y Performance

### Optimizaciones Implementadas
- **Code Splitting** automático con Vite
- **Tree Shaking** para reducir el bundle
- **Lazy Loading** de componentes pesados
- **Imágenes optimizadas** y compresión
- **CSS optimizado** con Tailwind purge

### Lighthouse Score Target
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 85+

## 🧪 Testing y Calidad

### ESLint Configuration
- Reglas estrictas para React
- Hooks rules enforcement
- Import/export validation
- Code style consistency

### Mejores Prácticas Implementadas
- Componentes funcionales con hooks
- Estado global centralizado
- Rutas protegidas y manejo de errores
- Responsive design 
- Accesibilidad web (WCAG 2.1)

## 🤝 Contribución

### Flujo de Trabajo
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

### Estándares de Código
- Seguir las reglas de ESLint
- Componentes funcionales preferidos
- Nombres descriptivos en español/inglés
- Documentación en línea para funciones complejas

## 📄 Licencia

Este proyecto es parte del programa educativo de ALURA - Bach Frontend.

## 👥 Equipo de Desarrollo

- **Frontend Developer**: 
- **UI/UX Design**: 
- **Project Manager**: 

## 📞 Soporte

...

---

**Desarrollado con ❤️ para la comunidad musical**