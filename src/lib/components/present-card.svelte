<script>
    export let title = 'Que buscamos?';
    export let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,600;1,400;1,900&display=swap');
    div{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 30%;
    }
    h3{
        font-size: 2rem;
        text-align: center
        ;    }
</style>

<div class="h-5/6 flex flex-col justify-around bg-violet-card font-poppins text-white box-border border-2 rounded-3xl border-white border-solid pt-0 px-12 pb-0">
    <h3 class="text-base text-center" >{title}</h3>
    <p>{content}</p>
</div>

