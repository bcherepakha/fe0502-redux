export const changeFilter = search => ({
  type: 'CHANGE_FILTER',
  payload: {
      search
  }
});

export const getBeerList = beerList => ({
    type: 'GET_BEER_LIST',
    payload: {
        beerList
    }
});

export const fetchBeerList = fetchOption => ({
    type: 'FETCH_BEER_LIST',
    fetch: fetchOption
});

export const changeFavourites = (id, isFavourite) => ({
    type: 'CHANGE_BEER_FAVOURITES',
    payload: {
        id,
        isFavourite
    }
});

export const loaderShow = () => ({type: 'LOADER_SHOW'});

export const loaderHide = () => ({type: 'LOADER_HIDE'});

export const loaderToggle = () => ({type: 'LOADER_TOGGLE'});
