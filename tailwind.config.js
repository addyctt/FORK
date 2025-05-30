/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c3aed',
          light: '#9d68fb',
          dark: '#5b21b6',
        },
        secondary: '#2dd4bf',
        accent: '#f43f5e',
        background: '#0f172a',
        foreground: '#f8fafc',
        card: '#1e293b',
        'card-foreground': '#f1f5f9',
        border: '#334155',
        input: '#1e293b',
        ring: '#7c3aed',
        muted: '#64748b',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-in-out',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};