import * as React from "react";
import './TextArea.scss';

interface ITextAreaProps {
    placeholder: string,
    onInput?: (e: any) => void;
}
const TextArea: React.SFC<ITextAreaProps> = props => {
    return (
        <textarea placeholder={props.placeholder} className='textArea' />
    )
}

export default TextArea;
