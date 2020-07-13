import * as React from "react";
import ItemsView from "./ItemsView";
import {IListItemProps} from "../../organisms/ListItem/ListItem";
import {reducer} from "../../../context/reducer";
import {initState, TrelloContext} from "../../../context/trelloContext";


export const listItem: Array<IListItemProps> = [
    {
        listLabel: "To Do",
        taskId: "1",
        onAddCard: (name) => {},
        actionButtonLabel: "Add Another Card",
        saveButtonLabel: "Add Card",
        addCardPlaceHolder: "Enter a Title for this card...",
        taskCards: [
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
        ]
    },
    {
        listLabel: "In Progress",
        taskId: "2",
        onAddCard: (name) => {},
        actionButtonLabel: "Add Another Card",
        saveButtonLabel: "Add Card",
        addCardPlaceHolder: "Enter a Title for this card...",
        taskCards: [
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
                    buttonLabel: 'card 22s2',
                    cardId: '2222',
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
                    buttonLabel: 'card 333332',
                    cardId: '32222',
                    taskId: '3',
                },
                cardLabels: [],
                cardDescription: {
                    description: 'description ',
                    addDescription: (desc) => {},
                },
                cardChecklist: []
            }
        ]
    },
    {
        listLabel: "Done",
        taskId: "3",
        onAddCard: (name) => {},
        actionButtonLabel: "Add Another Card",
        saveButtonLabel: "Add Card",
        addCardPlaceHolder: "Enter a Title for this card...",
        taskCards: [
            {
                card: {
                    buttonLabel: 'card 1',
                    cardId: '1',
                    taskId: '1111',
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
                    buttonLabel: 'card 33',
                    cardId: '33',
                    taskId: '33',
                },
                cardLabels: [],
                cardDescription: {
                    description: 'description ',
                    addDescription: (desc) => {},
                },
                cardChecklist: []
            }
        ]
    },
]
const ItemsViewCosmos = () => {
    const [state, dispatch] = React.useReducer(reducer, initState);
    return (
        <TrelloContext.Provider value={{ state, dispatch}}>
            <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                <ItemsView listItems={listItem} addNewTask={(taskName) => {}} />
            </div>
        </TrelloContext.Provider>
    )
};

export default ItemsViewCosmos;
