import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateEditMode = () => {
        // метод из React.Component, который перезаписывает свойства, которые мы меняем и которые есть в стейте
        // этот метод асинхронный!
        // debugger;
        this.setState({
            editMode: true
        });
    };
    deactivateEditMode = () => {
        // метод из React.Component, который перезаписывает свойства, которые мы меняем и которые есть в стейте
        // этот метод асинхронный!
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    // сравниваем предыдущее и текущее состояние статуса и обновляем его только если пришло новое
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '------'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                        autoFocus={true}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;
