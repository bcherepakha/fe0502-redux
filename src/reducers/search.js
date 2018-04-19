const search = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.payload.search
    default:
      return state
  }
}

export default search;
