/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage : {
        'primer-fondo': "linear-gradient(to right, rgba(0,0,0,0.1),rgba(0,0,0,0.75)),url('images/fondo.png')",
        'segundo-fondo': "linear-gradient(to right, rgba(0,0,0,0.1),rgba(0,0,0,0.75)),url('images/fondo-conoce-mas.png')"

      },
      fontFamily :{
        'poppins' : ['Poppins', 'sans-serif']
      },
      backgroundColor : {
        'violet-card': 'rgba(97, 0, 161, 0.301)',
        'traslucido':  'rgba(0,0,0,0.75)'
      }

    }
  },
  plugins: []
};