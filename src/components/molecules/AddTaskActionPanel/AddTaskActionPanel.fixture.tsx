import * as React from "react";
import AddTaskActionPanel from "./AddCardActionPanel";

const AddTaskActionPanelCosmos = () => {
    return (
        <div>
            <AddTaskActionPanel addItemPlaceHolder="Enter list title..." actionButtonLabel="+ Add Another List" saveButtonLabel="Add List" saveTask={() => {}} />
        </div>
    )
};

export default AddTaskActionPanelCosmos;