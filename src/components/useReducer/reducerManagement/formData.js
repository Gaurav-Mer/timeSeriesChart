export const handleFormDispatch = (state, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE":
            return { ...state, [action.payload.name]: action.payload.value };
        case "SET_EDIT_DATA":
            return { ...action.payload }
        default:
            return state;
    }
};
