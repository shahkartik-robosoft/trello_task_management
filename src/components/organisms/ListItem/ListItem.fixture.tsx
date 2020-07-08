import * as React from "react";
import ListItem, {IListItemProps} from "./ListItem";
import {ITaskCardProps} from "../../molecules/TaskCard/TaskCard";

const ListItemCosmos = () => {
    const tasCards: Array<ITaskCardProps> = [
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
    ];
    return (
        <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly', height: '60vh'}}>
                <ListItem listLabel="To Do"
                          actionButtonLabel="Add Another Card"
                          saveButtonLabel="Add Card"
                          addCardPlaceHolder="Enter a Title for this card..."
                          taskCards={tasCards} />
        </div>
    )
};

export default ListItemCosmos;
