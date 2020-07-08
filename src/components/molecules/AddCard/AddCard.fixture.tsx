import * as React from "react";
import AddCard from "./AddCard";

const AddCardCosmos = () => {
    return (
        <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly', height: '30vh'}}>
            <div>
                <AddCard icon="+" label="Add a card" />
            </div>
            <div>
                <AddCard icon="+" label="Add another card" />
            </div>
            <div>
                <AddCard transparent={true} label="Add another list" icon="+" labelStyle={{ color: '#fff', fontSize: '16' }} />
            </div>
        </div>
    )
}

export default AddCardCosmos;
