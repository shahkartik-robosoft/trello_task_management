import * as React from "react";
import AddCardActionPanel from "./AddCardActionPanel";

const AddCardActionPanelCosmos = () => {
    return (
        <div>
            <AddCardActionPanel taskId="1" actionButtonLabel="Add Another Card" addCardPlaceHolder="Enter a Title for this card..." saveButtonLabel="Add Card" onAddCard={value => {}} />
        </div>
    )
}

export default AddCardActionPanelCosmos;
