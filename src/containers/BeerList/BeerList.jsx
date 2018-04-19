import React from 'react';
import BeerCard from '../../components/BeerCard/BeerCard';
import iFetch from '../../i/XHR/iFetch';
import {connect} from 'react-redux';
import {getBeerList, changeFavourites, getData, fetchBeerList} from '../../actions/actionsNewApp';

class BeerList extends React.PureComponent {
    componentDidMount() {
        if (!this.props.beerList.length) {
            this.props.fetchBeerList({
                method: 'GET',
                url: 'https://api.punkapi.com/v2/beers'
            });
        }
    }

    render() {
        const {searched, favourites, changeFavourites} = this.props;
        let {beerList} = this.props;

        if (searched) {
            beerList = beerList.filter(beerInfo => beerInfo.name.includes(searched));
        }

        return <div className='beer-list'>
            {beerList.map(beerInfo =>
                <BeerCard
                    key={beerInfo.id}
                    id={beerInfo.id}
                    image={beerInfo.image_url}
                    title={beerInfo.name}
                    description={beerInfo.description}
                    favourite={favourites[beerInfo.id]}
                    toggleFavourites={changeFavourites}/>)}
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        beerList: state.beer.beer,
        favourites: state.beer.favourites,
        searched: state.search
    }
}

export function mapActionToProps(dispatch) {
    return {
        getBeerList: beerList => dispatch(getBeerList(beerList)),
        changeFavourites: (id, isFavourite) => dispatch(changeFavourites(id, isFavourite)),
        fetchBeerList: fetchOption => dispatch(fetchBeerList(fetchOption))
    }
}

export {BeerList};
export default connect(mapStateToProps, mapActionToProps)(BeerList);
