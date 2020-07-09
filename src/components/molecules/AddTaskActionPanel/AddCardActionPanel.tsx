import * as React from "react";
import Input from "../../atoms/Input/Input";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CloseIcon from "@material-ui/icons/Close";
import './AddTaskActionPanel.scss';

interface IAddTaskActionPanel {
    addItemPlaceHolder: string,
    actionButtonLabel: string,
    saveButtonLabel: string,
    saveTask: (taskName: string) => void;
}

const AddTaskActionPanel: React.FC<IAddTaskActionPanel> = props => {
    const [addingItem, setAddingItem] = React.useState(false);
    const [taskLabel, SetTaskLabel] = React.useState('');

    const saveTaskName = () => {
        setAddingItem(false);
        props.saveTask(taskLabel);
    }

    if (addingItem) {
        return (
            <div className="addTaskActionPanel">
                <Input onChange={(e) => SetTaskLabel(e.target.value)} placeholder={props.addItemPlaceHolder} />
                <div className="addTaskActionPanel--panel">
                    <CustomButton className='btn-component--AddAction' onClick={saveTaskName}>{props.saveButtonLabel}</CustomButton>
                    <CloseIcon onClick={() => setAddingItem(false)} />
                </div>
            </div>
        )
    }
    return (
        <CustomButton className='btn-component--AddNewList' onClick={() => setAddingItem(true)}>
            + Add another list
        </CustomButton>
    )
};

export default AddTaskActionPanel;
