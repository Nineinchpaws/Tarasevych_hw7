import React from 'react';
import { connect } from 'react-redux';
import { incrementAction } from '../../../redux/actions';
import ChildComponent from '../ChildComponent/ChildComponent';

class ParentComponent extends React.Component {
    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                <ChildComponent />
                <h4>{this.props.counter}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(incrementAction);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent);