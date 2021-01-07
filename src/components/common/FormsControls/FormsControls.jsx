import React from "react";
import styles from './FormsControls.module.css';

// универсальный кастомный форм-контрол для использования валидации
const FormControl = ({input, meta, child, ...props}) => {
    // флаг показа ошибки (есть или нет ошибки)
    const showError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + " " + (showError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
};

// кастомная textarea для использования валидации
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
};

// кастомный input для использования валидации
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
};

