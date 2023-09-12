/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage : {
        'primer-fondo': "url('images/fondo.png')",
        'segundo-fondo': "url('images/fondo-conoce-mas.png')"

      },
      fontFamily :{
        'poppins' : ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};