// src/routes/+layout.js

import { redirect } from "@sveltejs/kit";

export const load = async ({ url }) => {

    let params = {};

    url.href.split('#')[1]?.split('&')?.map((str) =>
        str.split('=')).forEach(([key, value]) => {
            params[key] = value;
        })


    if (params?.access_token && params?.refresh_token) {
        throw redirect(303, `${url.origin}?access_token=${params?.access_token}&refresh_token=${params?.refresh_token}`)
    }
    return {};
}
