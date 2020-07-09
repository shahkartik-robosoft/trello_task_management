import * as React from "react";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import Text from "../../atoms/Text/Text";
import './TaskCard.scss';

export interface ITaskCardProps {
    buttonLabel: string,
    cardId: string,
    onClickCard?: (e: any) => void,
    children?: React.ReactNode,
}

const TaskCard: React.FC<ITaskCardProps> = props => {
    return (
        <CustomButton onClick={props.onClickCard} className="btn-component--taskCard">
            <div className="taskCard">
                <Text color="black" textLabel={props.buttonLabel} />
                {props.children}
            </div>
        </CustomButton>
    )
}

export default TaskCard;
