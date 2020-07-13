import {ITaskCardProps} from "../components/molecules/TaskCard/TaskCard";
import {ICardDetailsModalProps} from "../components/pages/CardDetailsModal/CardDetailsModal";

export interface ITask {
    listLabel: string,
    taskCards?: Array<ICardDetailsModalProps>,
    taskId: string,
}

export interface ISelectedCard {
    cardId: string,
    taskId: string,
}

export interface IState {
    taskList: Array<ITask>,
    cardSelected: ISelectedCard,
}
