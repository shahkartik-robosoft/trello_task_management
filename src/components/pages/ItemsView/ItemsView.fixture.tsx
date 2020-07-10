import * as React from "react";
import ItemsView from "./ItemsView";
import {IListItemProps} from "../../organisms/ListItem/ListItem";
import {StoreProvider} from "../../../redux/store";


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
]
const ItemsViewCosmos = () => {
    return (
        <StoreProvider>
            <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                <ItemsView listItems={listItem} addNewTask={(taskName) => {}} />
            </div>
        </StoreProvider>
    )
};

export default ItemsViewCosmos;
