import React from "react";
import { v4 } from 'uuid';
import { FiFilePlus } from 'react-icons/fi';

class SubmitForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isModalOpen: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        if(!this.state.value) {
            return;
        }

        const item = {
            ...this.state,
            id: v4()
        }

        this.props.onAddItem(item);
        this.setState({
            value: '',
            isModalOpen: false
        });
    }

    handleOpenModal() {
        this.setState({ isModalOpen: true });
    }

    handleCloseModal() {
        this.setState({ isModalOpen: false });
    }

    render () {
        return (
            <>
                <button onClick={this.handleOpenModal}>
                    Add New Todo
                </button>
                {this.state.isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleChange.bind(this)} 
                                    placeholder="Enter todo"
                                />
                                <button disabled={!this.state.value}>
                                    Submit
                                    <FiFilePlus />
                                </button>
                                <button onClick={this.handleCloseModal}>
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </>
        )
    }
}

export default SubmitForm;
