import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import * as redux from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import { Header } from './shared/Header';
import  RentalList  from './components/rental/RentalList';
import { RentalDetail } from './components/rental/ReactDetail';

class App extends Component {
  debugger;
  render() {
    const store = redux.createStore(() => {
      return {
        rentals: [{
          id: "1",
          title: "Central Apartment",
          city: "New York",
          street: "Times Square",
          category: "apartment",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 3,
          guests: 12,
          description: "Very nice Apartment",
          dailyRate: 34,
          shared: false,
          createdAt: "24/12/2017"
        },
        {
          id: "2",
          title: "Central Apartment 2",
          city: "San Fransisco",
          street: "Main Street",
          category: "condo",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 2,
          guests: 2,
          description: "Very nice Apartment",
          dailyRate: 12,
          shared: true,
          createdAt: "24/12/2017"
        },
        {
          id: "3",
          title: "Central Apartment 3",
          city: "Bratislava",
          street: "Hlavna",
          category: "condo",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 2,
          guests: 1,
          description: "Very nice Apartment",
          dailyRate: 334,
          shared: false,
          createdAt: "24/12/2017"
        },
        {
          id: "4",
          title: "Central Apartment 4",
          city: "Berlin",
          street: "Haupt strasse",
          category: "house",
          image: "http://via.placeholder.com/350x250",
          bedrooms: 9,
          guests: 4,
          description: "Very nice Apartment",
          dailyRate: 33,
          shared: true,
          createdAt: "24/12/2017"
        }
        ]
      }
    });
    debugger;
    return (
      
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className="container">
              <Route exact path="/" render={() => <Redirect to='/rentals' />} />
              <Route exact path="/rentals" component={RentalList} />
              <Route exact path="/rentals/:id" component={RentalDetail} />
            </div>

          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
