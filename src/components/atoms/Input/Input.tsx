import * as React from "react";
import './Input.scss';

interface IInputProps {
    placeholder?: string,
    value?: string,
    onChange: (e: any) => void;
    onInput?: (e: any) => void;
    style?: string,
    classname?: {},
}

const Input: React.SFC<IInputProps> = props => {
    return (
        <input
            defaultValue={props.value}
            placeholder={props.placeholder}
            onKeyUp={props.onChange}
            onInput={props.onInput}
            className='Input' type="input" />
    )
}

export default Input;