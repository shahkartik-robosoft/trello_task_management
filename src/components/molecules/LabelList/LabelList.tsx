import * as React from 'react';
import Text from "../../atoms/Text/Text";
import Input from "../../atoms/Input/Input";
import './LabelList.scss';

interface IAddNewListProps {
    textLabel: string,
}

const LabelList: React.SFC<IAddNewListProps> = props => {
    const [enableEdit, setEnableEdit] = React.useState(false);
    const [label, setLabel] = React.useState(props.textLabel);

    if (enableEdit) {
        return <Input onChange={(e) => e.which === 13 && setEnableEdit(false)} onInput={e => setLabel(e.target.value)} value={label} />
    } else {
        return <Text textLabel={label} color="black" weight="bold" onClick={() => setEnableEdit(true)} className='AddNewList' />
    }
}

export default LabelList;
