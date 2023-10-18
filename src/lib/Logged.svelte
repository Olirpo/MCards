<script>
    import Categoria from '$lib/Categoria.svelte';
    import Header from '$lib/Header.svelte';
</script>  

<main class="flex flex-col items-center w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border pt-4 pb-6">
    <Header texto="Cerrar Sesión" url='/login'></Header>
    <h2 class="flex justify-right mx-0 font-semibold text-4xl">Que Quieres estudiar hoy?</h2>
   <div class="flex justify-around mt-10 w-screen h-full" >
    <Categoria titulo="Intervalos" descripcion="    Un excelente lugar por el que iniciar tu entrenamiento auditivo son los intervalos.     Se conoce como intervalos a la distancia (osea el intervalo) entre dos notas que pueden sonar ya sea al unísono o espaciadas temporalmente.     Son una gran ayuda para reconocer tonos con notas guía."></Categoria>
    <Categoria titulo="Notas" descripcion="Se te presentará una escala o un acorde y seguidamente una nota la cual deberás reconocer. La idea de esto es facilitar el flujo a la hora de transcribir, componer o simplemente reconocer una nota en un contexto dado."></Categoria>
    <Categoria titulo="Acordes" descripcion="Existen muchisimos tipos de acordes en la musica, usualmente en la musica clasica hablamos de acordes de 3 notas (Mayores, Menores o Disminuidos) mientras que en un ambiente jazzistico generalmente el minimo se trata de una tetrada (4 notas). Ve subiendo de nivel comenzando por reconocer mayores y menores y adentrate en los acordes más ricos en colores tonales que te daran grandes herramientas para componer."></Categoria>
   </div>
</main>

<style>
    @import '../styles/landing.css';
</style>