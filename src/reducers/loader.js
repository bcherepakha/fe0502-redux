const loader = (state = false, action) => {
    switch (action.type) {
        case 'LOADER_SHOW':
            return true;
        case 'LOADER_HIDE':
            return false;
        case 'LOADER_TOGGLE':
            return !state;
        default:
            return state
    }
}

export default loader;
