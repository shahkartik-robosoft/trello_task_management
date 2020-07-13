import * as React from "react";
import Text from "../../atoms/Text/Text";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import LabelIcon from "@material-ui/icons/Label";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import TimerIcon from "@material-ui/icons/Timer";
import './CardDetailsActionPanel.scss';
import ColorPallet from "../ColorPallet/ColorPallet";
import AddChecklist from "../AddChecklist/AddChecklist";
import {ILabels} from "../CardLabels/CardLabels";


interface ICardDetailsActionPanelProps {
    onClick: (param: PopOptions, value: (Array<ILabels> | string)) => void
}


export type PopOptions = 'LABELS' | 'CHECKLIST' | 'TIMER' |  'none';

const CardDetailsActionPanel: React.FC<ICardDetailsActionPanelProps> = props => {
    const [openPop, setOpenPop] = React.useState(false);
    const [popItem, setPopItem] = React.useState<PopOptions>();

    const closePopup = () => {
        setOpenPop(false);
    }

    const openPopup = () => {
        setOpenPop(true);
    }

    const openLabelOptions = () => {
        openPopup();
        setPopItem('LABELS');
    }
    const selectLabel = (colors: Array<ILabels>) => {
        closePopup();
        props.onClick(popItem as PopOptions, colors as Array<ILabels>);
    }

    const openChecklistPop = () => {
        openPopup();
        setPopItem('CHECKLIST');
    }

    const saveChecklist = (checklist: string) => {
        closePopup();
        props.onClick(popItem as PopOptions, checklist as string);
    }

    return (
        <div className="cardDetailsActionPanel">
            <Text textLabel="ADD TO CARD" color="gray" fontSize="lg" style={{ margin: '0 auto' }} />
            <CustomButton className={`btn-component--gray`} onClick={openLabelOptions}>
                {<LabelIcon />}<span className="cardDetailsActionPanel--button">Label</span>
            </CustomButton>
            <CustomButton className={`btn-component--gray`} onClick={openChecklistPop}>
                {<PlaylistAddCheckIcon />}<span className="cardDetailsActionPanel--button">Check list</span>
            </CustomButton>
            <CustomButton className={`btn-component--gray`}>
                {<TimerIcon />}<span className="cardDetailsActionPanel--button">Timer</span>
            </CustomButton>
            {openPop && popItem === 'LABELS' && <ColorPallet onSelectPallet={selectLabel} />}
            {openPop && popItem === 'CHECKLIST' && <AddChecklist closePop={closePopup} addChecklist={saveChecklist} />}
        </div>
    )
};

export default CardDetailsActionPanel;