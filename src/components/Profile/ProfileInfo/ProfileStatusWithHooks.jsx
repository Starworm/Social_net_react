import React, {useState} from "react";


const ProfileStatusWithHooks = (props) => {

    // хук со значением по умолчанию - локальный стейт,
    // useState возвращает массив с 2-мя объектами:
    // [0] - значение, которое изначально передаем - в данном случае false
    // [1] - функция, которая будет менять это значение
    let [editMode, setEditMode] = useState(false);

    // хук со значением по умолчанию - локальный стейт,
    // useState возвращает массив с 2-мя объектами:
    // [0] - значение, которое изначально передаем - в данном случае статус
    // [1] - функция, которая будет менять это значение
    let [status, setStatusMode] = useState(props.status);

    const activateEditMode = () => {
        // метод из React.Component, который перезаписывает свойства, которые мы меняем и которые есть в стейте
        // для установки нового значения используем функцию, полученную из хука
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        // метод из React.Component, который перезаписывает свойства, которые мы меняем и которые есть в стейте
        // для установки нового значения используем функцию, полученную из хука
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatusMode(e.currentTarget.value);

    };

    return (
        <div>
            {!editMode && <div>
                <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
