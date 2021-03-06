import React from 'react';
import {Link} from 'react-router-dom';

export function RentalCard(props) {
    const rental=props.rental;
    return (
        <div className='col-md-3 col-xs-6'>
        <Link to={`/rentals/${rental.id}`}>
            <div className="card bwm-card">
                <img className="card-img-top" src={rental.image} alt="" />
                <div className="card-block">
                    <h6 className="card-subtitle">{rental.shared ? 'shared':'whole'} {rental.category} &#183; {rental.city}</h6>
                    <h4 className="card-title">{rental.title}</h4>
                    <p className="card-text">${rental.dailyRate} per Night&#183; Free Cancelation</p>
                    <a href="" className="card-link">More Info</a>
                </div>
            </div>
            </Link>
        </div>
    )
}