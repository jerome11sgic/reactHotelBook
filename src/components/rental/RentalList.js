import React from 'react';
import { RentalCard } from './RentalCard';

// Attempt 1
// export class RentalList extends React.Component {
//     render() {
//         return (
//             <section id="rentalListing">
//                 <h1 className="page-title">Your Home All Around the World</h1>
//                 <div className="row">
//                     <RentalCard />
//                     <RentalCard />
//                     <RentalCard />
//                     <RentalCard />
//                 </div>
//             </section>
//         );
//     }
// }

export class RentalList extends React.Component {
    constructor() {
        super();

        this.state = {
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
                bedrooms : 9,
                guests: 4,
                description: "Very nice Apartment",
                dailyRate: 33,
                shared: true,
                createdAt: "24/12/2017"
            }
            ]
        }
    }

    renderRentals() {
        return this.state.rentals.map((rental, index) => {
            console.log(rental)
            return (
                <RentalCard key={index} rental={rental}/>
            )
        });
    }

    render() {
        return (
            <section id="rentalListing">
                <h1 className="page-title">Your Home All Around the World</h1>
                <div className="row">
                    {this.renderRentals()}
                </div>
            </section>
        );
    }
}