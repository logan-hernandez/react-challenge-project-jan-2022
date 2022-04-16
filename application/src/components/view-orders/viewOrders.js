import React, { useState, useEffect, useReducer } from 'react';
import { Template } from '../../components';
import { SERVER_IP } from '../../private';
import OrdersList from './ordersList';
import './viewOrders.css';

export default function ViewOrders(props) {
    const [orders, setOrders] = useState([]);
    const [_, forceUpdate] = useReducer((x) => x + 1, 0)

    useEffect(() => {
        fetch(`${SERVER_IP}/api/current-orders`)
            .then(response => response.json())
            .then(response => {
                if(response.success) {
                    setOrders(response.orders);
                } else {
                    console.log('Error getting orders');
                }
            });
    }, [_])

    return (
        <Template>
            <div className="container-fluid">
                <OrdersList
                    forceUpdate={forceUpdate}
                    orders={orders}
                />
            </div>
        </Template>
    );
}