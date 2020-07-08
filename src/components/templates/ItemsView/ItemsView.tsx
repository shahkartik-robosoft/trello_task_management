import * as React from "react";
import ListItem, { IListItemProps } from '../../organisms/ListItem/ListItem';
import CustomButton from "../../atoms/CustomButton/CustomButton";
import './ItemsView.scss';

export interface IItemsProps {
    listItems: Array<IListItemProps>,
    addNewTask?: (e: any) => void;
}

const ItemsView: React.FC<IItemsProps> = props => {
    return (
        <div className="itemsView">
            {
                props.listItems.length > 0 && props.listItems
                .map( (listItem: IListItemProps) => <ListItem listLabel={listItem.listLabel}
                                                              actionButtonLabel={listItem.actionButtonLabel}
                                                              taskCards={listItem.taskCards}
                                                              addCardPlaceHolder={listItem.addCardPlaceHolder}
                                                              saveButtonLabel={listItem.saveButtonLabel} />)
                }
            <CustomButton className='btn-component--AddNewList' onClick={(e) => props.addNewTask!('in new task')}>
                + Add another list
            </CustomButton>
        </div>
    )
}

export default ItemsView;
