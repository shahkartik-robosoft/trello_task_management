import * as React from "react";
import ListItem from "./ListItem";
import {ICardDetailsModalProps} from "../../pages/CardDetailsModal/CardDetailsModal";
import {reducer} from "../../../context/reducer";
import {initState, TrelloContext} from "../../../context/trelloContext";

const ListItemCosmos = () => {
    const [state, dispatch] = React.useReducer(reducer, initState);
    const tasCards: Array<ICardDetailsModalProps> = [
        {
            card: {
                buttonLabel: 'card 1',
                cardId: '1',
                taskId: '1',
            },
            cardLabels: [],
            cardDescription: {
                description: 'description ',
                addDescription: (desc) => {},
            },
            cardChecklist: []
        },
        {
            card: {
                buttonLabel: 'card 2',
                cardId: '2',
                taskId: '2',
            },
            cardLabels: [],
            cardDescription: {
                description: 'description ',
                addDescription: (desc) => {},
            },
            cardChecklist: []
        },
        {
            card: {
                buttonLabel: 'card 3',
                cardId: '3',
                taskId: '3',
            },
            cardLabels: [],
            cardDescription: {
                description: 'description ',
                addDescription: (desc) => {},
            },
            cardChecklist: []
        }
    ];
    return (
        <TrelloContext.Provider value={{ state, dispatch}}>
            <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly', height: '60vh'}}>
                    <ListItem taskId="1" listLabel="To Do"
                              actionButtonLabel="Add Another Card"
                              saveButtonLabel="Add Card"
                              addCardPlaceHolder="Enter a Title for this card..."
                              taskCards={tasCards}
                              onAddCard= {name => {}} />
            </div>
        </TrelloContext.Provider>
    )
};

export default ListItemCosmos;
