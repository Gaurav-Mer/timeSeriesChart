export const formReducer = (state, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE":
            return { ...state, [action.payload.key]: action.payload.value };
        case "CLEAR_FIELD":
            return initalFormData
        default:
            break;
    }
}



export const initalFormData = {
    name: "",
    email: "",
    password: "",
    phone: "",
}