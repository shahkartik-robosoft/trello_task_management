import * as React from "react";
import './TextArea.scss';

interface ITextAreaProps {
    placeholder: string,
    onInput?: (e: any) => void;
    className?: string;
    rowSize?: number;
}
const TextArea: React.SFC<ITextAreaProps> = props => {
    return (
        <textarea rows={props.rowSize || 4} placeholder={props.placeholder} onInput={props.onInput} className={`textArea ${props.className}`} />
    )
}

export default TextArea;
