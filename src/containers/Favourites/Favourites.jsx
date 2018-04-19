import {BeerList, mapActionToProps} from '../BeerList/BeerList'
import {connect} from 'react-redux';
import { createSelector } from 'reselect'

const beerSelector = createSelector(
    state => state.beer.beer,
    state => state.beer.favourites,
    (beer, favourites) => beer.filter(beerInfo => favourites[beerInfo.id])
);

function mapStateToProps(state) {
    return {
        beerList: beerSelector(state),
        favourites: state.beer.favourites,
        searched: ''
    }
}

export default connect(mapStateToProps, mapActionToProps)(BeerList);
