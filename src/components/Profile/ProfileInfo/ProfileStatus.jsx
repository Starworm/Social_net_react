import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode() {
        // метод из React.Component, который перезаписывает свойства, которые мы меняем и которые есть в стейте
        // этот метод асинхронный!
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode() {
        // метод из React.Component, который перезаписывает свойства, которые мы меняем и которые есть в стейте
        // этот метод асинхронный!
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)
                        }>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                        onBlur={this.deactivateEditMode.bind(this)}
                           value={this.props.status}/>
                </div>
                }
            </div>
        )
    }
}
;

export default ProfileStatus;
