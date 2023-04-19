import React from 'react';
import { FiTrash, FiSquare, FiCheckSquare } from 'react-icons/fi';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    handleDelete(id) {
        this.props.onDelete(id);
    }

    handleDone(id) {
        const updatedList = this.props.list.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    done: !item.done
                };
            }
            return item;
        });

        this.props.onUpdateList(updatedList);
    }

    render() {
        const styles = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
        return (
            <ul>
                {this.props.list.map(item => {
                    const { id, value, done } = item;
                    return (
                        <li key={id} style={styles}>
                            {done ? <FiCheckSquare onClick={this.handleDone.bind(this, id)} style={{ marginRight: '15px' }} /> : <FiSquare onClick={this.handleDone.bind(this, id)} style={{ marginRight: '15px' }} />}
                            <h4 style={{ marginRight: '15px' }}>{value}</h4>
                            <button onClick={this.handleDelete.bind(this, id)}>
                                <FiTrash />
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default TodoList;

