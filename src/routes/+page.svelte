<script>
    import NoLogged from "$lib/components/No-logged.svelte";
    import Logged from "$lib/components/Logged.svelte";

    export let data;
</script>

{#if data.session}
    <h1>
        ESTOY LOGUEADO CON GOOGLE Y MI NOMBRE EMAIL: {data.session.user.email}
    </h1>
    <Logged />
{:else}
    <NoLogged />
{/if}

