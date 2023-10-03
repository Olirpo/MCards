<script>
    import Categoria from '$lib/Categoria.svelte'
</script>  

<main class="flex flex-col items-center w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border pt-4 pb-6">
    <header class="w-screen flex justify-between px-6">
        <a href="/" class="flex justify-right mx-0 font-black text-5xl">MCards</a>
        <a data-sveltekit-reload href="/login" class="text-white no-underline">
            Cerrar Sesión
        </a>
    </header>
    <h2 class="flex justify-right mx-0 font-black text-4xl">Que Quieres estudiar hoy?</h2>
   <div class="flex justify-around mt-10 w-screen h-full" >
    <Categoria titulo="Intervalos" descripcion="    Un excelente lugar por el que iniciar tu entrenamiento auditivo son los intervalos.     Se conoce como intervalos a la distancia (osea el intervalo) entre dos notas que pueden sonar ya sea al unísono o espaciadas temporalmente.     Son una gran ayuda para reconocer tonos con notas guía."></Categoria>
    <Categoria titulo="Notas" descripcion="Ni idea"></Categoria>
    <Categoria titulo="Acordes" descripcion="Ni idea"></Categoria>
   </div>
</main>

<style>
    @import '../styles/landing.css';
</style>