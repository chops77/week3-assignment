import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { CssBaseline, Typography, IconButton, Drawer, Button, List, ListItem } from '@material-ui/core';
import { ChevronRight, RemoveShoppingCart } from '@material-ui/icons';

class ShoppingCart extends Component {
    static propTypes = {
        cart: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                cost: PropTypes.number.isRequired
            })
        ).isRequired,
        onRemove: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        setDrawerOpen: PropTypes.func.isRequired
    }

    render() {
        let total = 0;
        return (
            <div>
                <CssBaseline />
                <Drawer open={this.props.open} variant="persistent" anchor="right">
                    <Typography variant="h5">
                        <IconButton aria-label="Hide Cart" onClick={() => this.props.setDrawerOpen(false)}>
                            <ChevronRight/> Shopping Cart
                        </IconButton>
                    </Typography>
                    <List>
                        {this.props.cart.map((cartItem, idx) => {
                            total += cartItem.cost;
                            // console.log(cartItem, idx)
                            return (
                                <ListItem key={idx}>
                                    {cartItem.title}: ${cartItem.cost}
                                    <IconButton aria-label="Remove Item" onClick={this.props.onRemove(idx)}>
                                        <RemoveShoppingCart />
                                    </IconButton>
                                </ListItem>
                            );
                        })}
                    </List>
                    <Typography>Total: ${total}</Typography>
                </Drawer>
            </div>
        );
    }
}

export default ShoppingCart
