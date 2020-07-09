import * as React from "react";
import LabelList from "../LabelList/LabelList";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import './ListHeader.scss';

interface IListHeaderProps {
    listLabel: string,
    taskId: string,
}
const ListHeader: React.FC<IListHeaderProps> = props => {
    return (
        <div className="listHeader">
            <LabelList taskId={props.taskId} textLabel={props.listLabel} />
            <CustomButton>...</CustomButton>
        </div>
    )
};

export default ListHeader;
