import { wrapPromise } from "./wrapPromise";

export const fetchUserData = (url) => {
    const promise = fetch(url).then(res => res.json()).then(res => {
        return res
    });
    return wrapPromise(promise);
}