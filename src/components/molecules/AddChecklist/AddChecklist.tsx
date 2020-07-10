import * as React from "react";
import CloseIcon from "@material-ui/icons/Close";
import './Addchecklist.scss';
import Text from "../../atoms/Text/Text";
import Input from "../../atoms/Input/Input";
import CustomButton from "../../atoms/CustomButton/CustomButton";


interface IAddChecklistProp {
    addChecklist: (checklist: string) => void;
    closePop: ()=> void;
}

const AddChecklist: React.FC<IAddChecklistProp> = props => {
    const [checkList, setCheckList] = React.useState('');
    return (
        <div className='addChecklist'>
            <div className='addChecklist--header'>
                <Text textLabel='Add Checklist' color='gray' fontSize='xl' style={{ flex: 2, textAlign: 'center' }} />
                <CloseIcon style={{ cursor: 'pointer' }} onClick={props.closePop} />
            </div>
            <Text textLabel='Title' color='gray' />
            <Input placeholder='Checklist' onChange={e => setCheckList(e.target.value)} />
            <CustomButton className='btn-component--AddAction' onClick={() => props.addChecklist(checkList)}>ADD</CustomButton>
        </div>
    )
};

export default AddChecklist;