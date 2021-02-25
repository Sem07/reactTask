import React, {Component} from 'react';
import {items} from "../../itemsData/itemsData";
import {sortBy} from "lodash"
import {v4 as uuidv4} from "uuid"


class Lists extends Component {
    state = {
        lists: [...items]
    }
    deletedProduct = (itemId) =>{
        this.setState(state => {
            const { lists } = state;
            const filteredItems = lists.filter(item => item.id !== itemId);
            return {
                lists: filteredItems
            };
        });
    };
    createdProduct = () => {
        this.setState(state => {
            const { lists } = state;

            const newId = uuidv4();
            const newItem = { id: newId, name: `item ${newId}`, priority: 2 };
            return {
                lists: [...lists, newItem]
            };
        });
    };

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Priority</th>
                    <th>Deleted</th>
                    <th>Created</th>
                    <th>Present</th>
                </tr>
                </thead>
                <tbody>
                { sortBy(this.state.lists, number => number.priority).map(
                    product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.priority}</td>
                        <td>
                            <button onClick={() => this.deletedProduct(product.id)}>Deleted</button>
                        </td>
                        <td>
                            <button onClick={() => this.createdProduct()}>Created</button>
                        </td>
                        <td>
                            <button onClick={() => this.setState({ status: !this.product.have })}>
                                {`Product ${product.have ? 'is available' : 'ran out'}`}
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

        );
    }
}

export default Lists;
