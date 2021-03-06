import * as React from "react";
import TaskCard from "./TaskCard";
import EditIcon from "@material-ui/icons/Edit";

const TaskCardCosmos = () => {
    return (
        <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly', height: '30vh'}}>
            <TaskCard taskId="1" cardId="1" onClickCard={() => {}} buttonLabel="card 1">
                <EditIcon />
            </TaskCard>
        </div>
    )
}

export default TaskCardCosmos;
