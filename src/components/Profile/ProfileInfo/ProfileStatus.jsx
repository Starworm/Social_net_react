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
;

export default ProfileStatus;
