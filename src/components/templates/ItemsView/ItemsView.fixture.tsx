import * as React from "react";
import ItemsView from "./ItemsView";
import {IListItemProps} from "../../organisms/ListItem/ListItem";


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
                buttonLabel: 'card 1',
                cardId: '1',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 2',
                cardId: '2',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 3',
                cardId: '3',
                onClickCard: () => {}
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
                buttonLabel: 'card 11',
                cardId: '1',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 22',
                cardId: '2',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 33',
                cardId: '3',
                onClickCard: () => {}
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
                buttonLabel: 'card 111',
                cardId: '1',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 333',
                cardId: '2',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 111',
                cardId: '3',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 333',
                cardId: '4',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 111',
                cardId: '5',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 333',
                cardId: '6',
                onClickCard: () => {}
            }
        ]
    },
]
const ItemsViewCosmos = () => {
    return (
        <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
            <ItemsView listItems={listItem} addNewTask={(taskName) => {}} />
        </div>
    )
};

export default ItemsViewCosmos;
