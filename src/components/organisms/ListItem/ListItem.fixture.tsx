import * as React from "react";
import ListItem from "./ListItem";
import {ITaskCardProps} from "../../molecules/TaskCard/TaskCard";
import {StoreProvider} from "../../../redux/store";

const ListItemCosmos = () => {
    const tasCards: Array<ITaskCardProps> = [
        {
            buttonLabel: 'card 1',
            cardId: '1',
            taskId: '1',
            onClickCard: () => {}
        },
        {
            buttonLabel: 'card 2',
            cardId: '2',
            taskId: '2',
            onClickCard: () => {}
        },
        {
            buttonLabel: 'card 3',
            cardId: '3',
            taskId: '3',
            onClickCard: () => {}
        }
    ];
    return (
        <StoreProvider>
            <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly', height: '60vh'}}>
                    <ListItem taskId="1" listLabel="To Do"
                              actionButtonLabel="Add Another Card"
                              saveButtonLabel="Add Card"
                              addCardPlaceHolder="Enter a Title for this card..."
                              taskCards={tasCards}
                              onAddCard= {name => {}} />
            </div>
        </StoreProvider>
    )
};

export default ListItemCosmos;
