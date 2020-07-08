import React from "react";
import Input from "./Input";

const InputCosmos = () => (
    <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly', height: '30vh'}}>
        <Input placeholder="Enter list title... " value="tesxt value" onChange={e => alert('hi')} />
        <Input onChange={e => alert('hi')} />
    </div>
);

export default InputCosmos;
