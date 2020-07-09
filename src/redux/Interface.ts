import {ITaskCardProps} from "../components/molecules/TaskCard/TaskCard";

export interface ITask {
    listLabel: string,
    taskCards?: Array<ITaskCardProps>,
    taskId: string,
}
export interface IState {
    taskList: Array<ITask>,
}
