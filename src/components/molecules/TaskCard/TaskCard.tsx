import * as React from "react";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import Text from "../../atoms/Text/Text";
import './TaskCard.scss';

export interface ITaskCardProps {
    buttonLabel: string,
    cardId: string,
    taskId: string,
    onClickCard?: (e: any) => void,
    children?: React.ReactNode,
}

const TaskCard: React.FC<ITaskCardProps> = props => {
    const DragCard = (e: any, cardId: string) => {
        e.dataTransfer.setData("cardId", cardId);
        e.dataTransfer.setData("taskId", props.taskId);
    };
    return (
        <div draggable={true} onDragStart={e => DragCard(e, props.cardId)}>
            <CustomButton onClick={props.onClickCard} className="btn-component--taskCard">
                <div className="taskCard">
                    <Text color="black" textLabel={props.buttonLabel} />
                    {props.children}
                </div>
            </CustomButton>
        </div>
    )
}

export default TaskCard;
