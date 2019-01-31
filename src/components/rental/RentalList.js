import React from 'react';
import { RentalCard } from './RentalCard';
import { connect } from 'react-redux';

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
 
    renderRentals() {
   
        return this.props.rentals.map((rental, index) => {
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

function mapStateToProps(state){
  
    return{
        
        rentals:state.rentals
    }
}

export default connect(mapStateToProps)(RentalList)