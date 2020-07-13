
import React from 'react';
import Modal from '@material-ui/core/Modal';
import CardDetailsModal from "./pages/CardDetailsModal/CardDetailsModal";
import {Actions} from "../context/enums";
import {TrelloContext} from "../context/trelloContext";

export default function CardModal() {
    const state = React.useContext(TrelloContext)?.state;
    const dispatch = React.useContext(TrelloContext)?.dispatch;
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        return dispatch!({ type: Actions.SELECT_CARD, value: {cardId: '', taskId: '' }});
    };

    if (state!.cardSelected.taskId !== '') {
        const card = state!.taskList.filter(task => task.taskId === state!.cardSelected.taskId)[0]
            .taskCards!.filter(Card => Card.card.cardId === state!.cardSelected.cardId)[0];
        const body = <CardDetailsModal
            card={card.card}
            cardLabels={card.cardLabels}
            cardDescription={card.cardDescription}
            cardChecklist={card.cardChecklist} />;
        return (
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </div>
        )
    } else {
        return (
            <div />
        )
    }
}

