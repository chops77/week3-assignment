import React, { Component } from 'react'
import airbnbs from './airbnbs.json';
import RentalItem from './RentalItem';
import ShoppingCart from './ShoppingCart';
import { CssBaseline, Typography, AppBar, IconButton, Button, Card, CardActions} from '@material-ui/core';
import { House } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export class RentalApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [{ title: 'A big house', cost: 100 }, { title: 'A small cabin', cost: 80 }],
            drawerOpen: true
        };
    }

    onReserve = (newItem) => {
        return () => {
            this.setState({
                cart: [...this.state.cart, newItem]
            });
        };
    }

    onRemove = (idx) => {
        return () => {
            let newCart = this.state.cart;
            newCart.splice(idx, 1);
            this.setState({
                cart: newCart
            })
        }
    }

    setDrawerOpen = (isDrawerOpen) => {
        this.setState({
            drawerOpen: isDrawerOpen
        })
    }
      
    toggleDrawer = () => {
        this.setState((state) => ({ drawerOpen: !state.drawerOpen }))
    }

    render() {
        console.log(this.state.cart)
        return (
            <div>
                <CssBaseline />
                <AppBar position="relative">
                    <Typography variant="h3">
                        <House fontSize="large"/> Available Rentals
                        <Typography variant="h5" align="right">
                            <IconButton aria-label="Toggle Drawer" onClick={this.toggleDrawer}>
                                <ShoppingCartIcon fontSize="large"/>
                                View Cart
                            </IconButton>
                        </Typography>
                    </Typography>
                </AppBar>
                {airbnbs.map((rental, idx) => {
                    return (
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Card variant="outlined" style={{maxWidth: 500}}key={idx}>
                                <RentalItem key={idx} rentalItem={rental} />
                                <CardActions style={{ width: '100%', justifyContent: 'center' }}>
                                    <Button variant="contained" color="primary" onClick={this.onReserve({ title: rental.title, cost: rental.payment.cost })}>Reserve</Button>
                                </CardActions>
                                
                            </Card>
                        </div>
                    );
                })}
                <ShoppingCart
                    cart={this.state.cart}
                    onRemove={this.onRemove}
                    open={this.state.drawerOpen}
                    setDrawerOpen={this.setDrawerOpen}
                />
            </div>
        )
    }
}

export default RentalApp
