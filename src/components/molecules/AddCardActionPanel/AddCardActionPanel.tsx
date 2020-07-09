import * as React from "react";
import TextArea from "../../atoms/TextArea/TextArea";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CloseIcon from "@material-ui/icons/Close";
import './AddCardActionPanel.scss';
import AddCard from "../AddCard/AddCard";

interface IAddCardActionPanelProps {
    taskId: string,
    addCardPlaceHolder: string,
    actionButtonLabel: string,
    saveButtonLabel: string,
    onAddCard: (cardName: string, taskId: string) => void;

}

const AddCardActionPanel: React.FC<IAddCardActionPanelProps> = props => {
    const [addingCard, setAddingCard] = React.useState(false);
    const [cardName, setCardName] = React.useState('');
    const addCard = () => {
        setAddingCard(false);
        props.onAddCard(cardName, props.taskId);
    }

    if (addingCard) {
        return (
            <div className="addCardActionPanel">
                <TextArea placeholder={props.addCardPlaceHolder} onInput={(e) => setCardName(e.target.value)} />
                <div className="addCardActionPanel--panel">
                    <CustomButton className='btn-component--AddAction' onClick={addCard}>{props.saveButtonLabel}</CustomButton>
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
