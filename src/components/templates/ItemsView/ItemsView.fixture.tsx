import * as React from "react";
import ItemsView from "./ItemsView";
import {IListItemProps} from "../../organisms/ListItem/ListItem";


export const listItem: Array<IListItemProps> = [
    {
        listLabel: "To Do",
        actionButtonLabel: "Add Another Card",
        saveButtonLabel: "Add Card",
        addCardPlaceHolder: "Enter a Title for this card...",
        taskCards: [
            {
                buttonLabel: 'card 1',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 2',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 3',
                onClickCard: () => {}
            }
        ]
    },
    {
        listLabel: "In Progress",
        actionButtonLabel: "Add Another Card",
        saveButtonLabel: "Add Card",
        addCardPlaceHolder: "Enter a Title for this card...",
        taskCards: [
            {
                buttonLabel: 'card 11',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 22',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 33',
                onClickCard: () => {}
            }
        ]
    },
    {
        listLabel: "Done",
        actionButtonLabel: "Add Another Card",
        saveButtonLabel: "Add Card",
        addCardPlaceHolder: "Enter a Title for this card...",
        taskCards: [
            {
                buttonLabel: 'card 111',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 333',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 111',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 333',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 111',
                onClickCard: () => {}
            },
            {
                buttonLabel: 'card 333',
                onClickCard: () => {}
            }
        ]
    },
]
const ItemsViewCosmos = () => {
    return (
        <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
            <ItemsView listItems={listItem} />
        </div>
    )
};

export default ItemsViewCosmos;
