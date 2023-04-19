import React from 'react';
import { connect } from 'react-redux';
import { incrementAction } from '../../../redux/actions';

class ChildComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Child Component</h3>
                <button onClick={this.props.increment}>+</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(incrementAction());
        }
    }
}

export default connect(null, mapDispatchToProps)(ChildComponent);
