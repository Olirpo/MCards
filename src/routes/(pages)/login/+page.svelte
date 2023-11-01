<script lang="ts">
    import { enhance, type SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase.js';
	import type { Provider } from '@supabase/supabase-js';

	const signInWithProvider = async (provider: Provider) => {
		const { data, error } = await supabaseClient.auth.signInWithOAuth({
			provider: provider
		});
	};

	const submitSocialLogin = async ({ action, cancel }) => {
		const provider = 'google';
        if(provider === 'google'){
            await signInWithProvider('google')
        }
		
		cancel();
	};
</script>
<main class="flex flex-col items-end w-full h-screen bg-no-repeat bg-primer-fondo bg-cover bg-center text-white font-poppins box-border p-6">
    <Header texto="Registrate" url="/register"></Header>
    <div class="w-full flex justify-center">
        <form class="socials" method="POST" use:enhance={submitSocialLogin}>
            <button formaction="?/login&provider=github" class="btn btn-ghost">Github</button>
            <button formaction="?/login&provider=discord" class="btn btn-ghost">Discord</button>
            <button formaction="?/login&provider=google" class="btn btn-ghost">Google</button>
        </form>
    
    </div>
    
</main>

