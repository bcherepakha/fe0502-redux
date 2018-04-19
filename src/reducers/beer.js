const beer = (state = {beer: [], favourites: {}}, action) => {
  switch (action.type) {
    case 'GET_BEER_LIST':
        return {
            ...state,
            beer: action.payload.beerList
        }
    case 'FETCH_BEER_LIST':
        return {
            ...state,
            beer: action.success
        }
    case 'CHANGE_BEER_FAVOURITES':
        const {favourites} = state,
            {id, isFavourite} = action.payload,
            newFavourites = {...favourites};

        if (isFavourite) {
            newFavourites[id] = true;
        } else {
            delete newFavourites[id];
        }

        window.localStorage.setItem('favourites', JSON.stringify(newFavourites));

        return {
            ...state,
            favourites: newFavourites
        }
    default:
      return state
  }
}

export default beer;
