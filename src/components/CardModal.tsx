
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CardDetailsModal from "./pages/CardDetailsModal/CardDetailsModal";
import {IState} from "../context/Interface";
import {Actions} from "../context/enums";
import {TrelloContext} from "../context/trelloContext";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

export default function CardModal() {
    const state = React.useContext(TrelloContext)?.state;
    const dispatch = React.useContext(TrelloContext)?.dispatch;
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        // setOpen(false);
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

