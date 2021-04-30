import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, CardHeader, CardMedia, CardContent} from '@material-ui/core';

class RentalItem extends Component {
    static propTypes = {
        rentalItem: PropTypes.shape({
            title: PropTypes.string.isRequired,
            houseType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            location: PropTypes.shape({
                city: PropTypes.string.isRequired,
                country: PropTypes.string.isRequired
            }).isRequired,
            payment: PropTypes.shape({
                cost: PropTypes.number.isRequired,
                description: PropTypes.string.isRequired
            }).isRequired,
            host: PropTypes.shape({
                name: PropTypes.string.isRequired,
                isSuperhost: PropTypes.bool.isRequired
            }).isRequired,
            rating: PropTypes.shape({
                stars: PropTypes.number.isRequired,
                reviews: PropTypes.number.isRequired
            }).isRequired
        }).isRequired
    }

    render() {
        const { title, houseType, image, location, payment, host, rating } = this.props.rentalItem;
        const { city, country } = location;
        const { cost, description } = payment;
        const { name, isSuperhost } = host;
        const { stars, reviews } = rating;
        return (
            <div>
                <CardHeader
                    title={title}
                    subheader={houseType}
                />
                <div style={{position:'relative', color:'red'}}>
                    <img
                        className="rentalImage"
                        src={image}
                        alt={title}
                    />
                    <div style={{position:'absolute', top:'8px', left:'16px'}}>{city}, {country}</div>
                    <div style={{position:'absolute', top:'8px', right:'16px'}}>{stars} ★</div>
                    <div style={{position:'absolute', top:'24px', right:'16px'}}>{reviews} Reviews</div>
                </div>
                <CardContent>
                    <Typography variant="body2" align="right"> {isSuperhost && 'Super'} Host: {name} </Typography>
                    <Typography variant="subtitle1"> ${cost} per night </Typography>
                    <Typography variant="subtitle2"> {description} </Typography>
                </CardContent>
            </div>
        )
    }
}

export default RentalItem
