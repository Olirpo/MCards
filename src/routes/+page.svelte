<script>
    import NoLogged from "$lib/components/No-logged.svelte";
    import Logged from "$lib/components/Logged.svelte";

    export let data;
</script>

{#if data.session}
    <Logged />
{:else}
    <NoLogged />
{/if}

