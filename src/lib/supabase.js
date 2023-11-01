// // src/hooks.server.js
// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
// import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'

// export const supabaseClient = async ({ event, resolve }) => {
//   event.locals.supabase = createSupabaseServerClient({
//     supabaseUrl: PUBLIC_SUPABASE_URL,
//     supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
//     event,
//   })

//   /**
//    * a little helper that is written for convenience so that instead
//    * of calling `const { data: { session } } = await supabase.auth.getSession()`
//    * you just call this `await getSession()`
//    */
//   event.locals.getSession = async () => {
//     const {
//       data: { session },
//     } = await event.locals.supabase.auth.getSession()
//     return session
//   }

//   return resolve(event, {
//     filterSerializedResponseHeaders(name) {
//       return name === 'content-range'
//     },
//   })
// }

import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';


export const supabaseClient = createClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY
);