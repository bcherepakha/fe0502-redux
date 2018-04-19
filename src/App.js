import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Paper from 'material-ui/Paper';

import { Provider } from 'react-redux';
// import store from './store';
//
// import Footer from './containers/Footer';
// import AddTodo from './containers/AddTodo';
// import VisibleTodoList from './containers/VisibleTodoList';

/* import for AppNew */
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import store from './storeNewApp';

import Header from './components/Header/Header';
import SearchForm from './containers/SearchForm/SearchForm';
import BeerList from './containers/BeerList/BeerList';
import Favourites from './containers/Favourites/Favourites';
import Loader from './containers/Loader/Loader';

// class App extends Component {
//   render() {
//     return <MuiThemeProvider>
//         <Provider store={store}>
//             <Paper className='app' zDepth={2} rounded>
//                 <AddTodo/>
//                 <VisibleTodoList/>
//                 <Footer/>
//             </Paper>
//         </Provider>
//     </MuiThemeProvider>;
//   }
// }
//
// export default App;

class AppNew extends Component {
    render() {
      return <MuiThemeProvider>
          <Provider store={store}>
              <Router>
                  <div className="app-new">
                      <Header/>
                      <Switch>
                          <Route exact path='/' render={() => [
                              <SearchForm key='SearchForm'/>,
                              <BeerList key='BeerList'/>
                          ]}/>

                          <Route path='/favourites' component={Favourites}/>
                      </Switch>
                      <Loader/>
                  </div>
              </Router>
          </Provider>
      </MuiThemeProvider>;
    }
}

export default AppNew;
