import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({ params }) => {
    console.log(params.query);
    return {
        query: params.query
    }
}