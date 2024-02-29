export function wrapPromise(promise) {
    let status = "pending";
    let response;

    const suspender = promise.then(res => {
        status = "success";
        response = res
    }, (err) => {
        status = "error";
        response = err
    });

    const read = () => {
        switch (status) {
            case "pending":
                console.log("pending state");
                throw suspender
            case "error":
                console.log("error state");
                throw response
            default:
                console.log("default state", response);
                return response
        }
    }
    return { read }
}

