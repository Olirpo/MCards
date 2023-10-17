/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      },
      backgroundImage : {
        'primer-fondo': "linear-gradient(to right, rgba(0,0,0,0.1),rgba(0,0,0,0.75)),url('images/fondo.png')",
        'segundo-fondo': "linear-gradient(to right, rgba(0,0,0,0.1),rgba(0,0,0,0.75)),url('images/fondo-conoce-mas.png')"

      },
      fontFamily :{
        'poppins' : ['Poppins', 'sans-serif'],
        'body': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ],
            'sans': [
          'Inter', 
          'ui-sans-serif', 
          'system-ui', 
          '-apple-system', 
          'system-ui', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'Noto Sans', 
          'sans-serif', 
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol', 
          'Noto Color Emoji'
        ]
      },
      backgroundColor : {
        'violet-card': 'rgba(97, 0, 161, 0.301)',
        'transparente': 'rgba(0, 0, 0, 0.3)'
      }

    }
  },
  plugins: []
};