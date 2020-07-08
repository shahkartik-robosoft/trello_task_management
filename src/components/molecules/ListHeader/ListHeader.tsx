import * as React from "react";
import LabelList from "../LabelList/LabelList";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import './ListHeader.scss';

interface IListHeaderProps {
    listLabel: string,
}
const ListHeader: React.FC<IListHeaderProps> = props => {
    return (
        <div className="listHeader">
            <LabelList textLabel={props.listLabel} />
            <CustomButton>...</CustomButton>
        </div>
    )
};

export default ListHeader;
