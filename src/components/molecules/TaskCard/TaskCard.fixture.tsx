import * as React from "react";
import TaskCard from "./TaskCard";
import EditIcon from "@material-ui/icons/Edit";

const TaskCardCosmos = () => {
    return (
        <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly', height: '30vh'}}>
            <TaskCard onClickCard={() => {}} buttonLabel="card 1">
                <EditIcon />
            </TaskCard>
        </div>
    )
}

export default TaskCardCosmos;
