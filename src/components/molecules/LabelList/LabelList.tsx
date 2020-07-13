import * as React from 'react';
import Text from "../../atoms/Text/Text";
import Input from "../../atoms/Input/Input";
import './LabelList.scss';
import {Actions} from "../../../context/enums";
import {TrelloContext} from "../../../context/trelloContext";

interface IAddNewListProps {
    textLabel: string,
    taskId: string,
}

const LabelList: React.SFC<IAddNewListProps> = props => {
    const state = React.useContext(TrelloContext)?.state;
    const dispatch = React.useContext(TrelloContext)?.dispatch;
    const [enableEdit, setEnableEdit] = React.useState(false);
    const [label, setLabel] = React.useState(props.textLabel);

    const updateLabel = () => {
        state!.taskList.map(task => {
            if(task.taskId === props.taskId && task.listLabel !== label) {
                task.listLabel = label;
                return dispatch!({type: Actions.RENAME_TASK, value: state!.taskList});
            }
        });
    }
    const renameLabel = (e: any) => {
        if(e.keyCode === 13) {
            setEnableEdit(false);
            updateLabel();
        }
    }

    if (enableEdit) {
        return <Input onChange={renameLabel} onInput={e => setLabel(e.target.value)} value={label} />
    } else {
        return <Text textLabel={label} color="black" weight="bold" onClick={() => setEnableEdit(true)} className='AddNewList' />
    }
}

export default LabelList;
