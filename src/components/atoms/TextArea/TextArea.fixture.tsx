import * as React from "react";
import TextArea from "./TextArea";

const TextAreaCosmos = () => {
    return (
        <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly', height: '30vh'}}>
            <TextArea placeholder="Enter a title for the card ..." />
        </div>
        )
}

export default TextAreaCosmos;