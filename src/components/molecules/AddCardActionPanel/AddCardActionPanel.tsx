import * as React from "react";
import TextArea from "../../atoms/TextArea/TextArea";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CloseIcon from "@material-ui/icons/Close";
import './AddCardActionPanel.scss';
import AddCard from "../AddCard/AddCard";

interface IAddCardActionPanelProps {
    addCardPlaceHolder: string,
    actionButtonLabel: string,
    saveButtonLabel: string,

}

const AddCardActionPanel: React.FC<IAddCardActionPanelProps> = props => {
    const [addingCard, setAddingCard] = React.useState(false);

    if (addingCard) {
        return (
            <div className="addCardActionPanel">
                <TextArea placeholder={props.addCardPlaceHolder} />
                <div className="addCardActionPanel--panel">
                    <CustomButton className='btn-component--AddAction' onClick={() => setAddingCard(false)}>{props.saveButtonLabel}</CustomButton>
                    <CloseIcon onClick={() => setAddingCard(false)} />
                </div>
            </div>
        )
    } else {
        return (
            <AddCard icon="+" label={props.actionButtonLabel} onClick={() => setAddingCard(true)}/>
        )
    }
}

export default AddCardActionPanel;
