import React, {Component} from 'react';

class List extends Component {

    render() {

        const {id, name, priority} = this.props.product;

        return (
            <table className="table">
                <tbody>
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{priority}</td>
                        <td>'11122'</td>
                        <td>'item.phone'</td>
                    </tr>
                    <tr key={name}>
                        <td>{name}</td>
                    </tr>
                </tbody>
            </table>

        );
    }
}

export default List;
