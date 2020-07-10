import * as React from "react";
import CloseIcon from "@material-ui/icons/Close";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import './ColorPallet.scss';
import {ILabels} from "../CardLabels/CardLabels";

interface IColorPalletProps {
    onSelectPallet: (colors: Array<ILabels>) => void
}

const colorsPallets: Array<ILabels> = [
    {
        color: 'green',
        label: 'label 1',
        labelId: 'label_1',
    },
    {
        color: 'yellow',
        label: 'label 2',
        labelId: 'label_2',
    },
    {
        color: 'orange',
        label: 'label 3',
        labelId: 'label_3',
    },
    {
        color: 'red',
        label: 'label 4',
        labelId: 'label_4',
    },{
        color: 'purple',
        label: 'label 5',
        labelId: 'label_5',
    },
    {
        color: 'blue',
        label: 'label 6',
        labelId: 'label_6',
    }
];
const ColorPallet: React.FC<IColorPalletProps> = props => {
    const colors: Array<ILabels> = [];
    const addColor = (colorsPallet: ILabels) => {
        colors.push(colorsPallet);
    }
    return (
        <div className="colorPallet">
            <CloseIcon style={{ alignSelf: 'flex-end', cursor: 'pointer' }} onClick={() => props.onSelectPallet(colors)} />
            {colorsPallets.map( colorsPallet => (
                <CustomButton key={colorsPallet.labelId} className={`btn-component--${colorsPallet.color}`} onClick={() => addColor(colorsPallet)}>{colorsPallet.label}</CustomButton>
            ))}
        </div>
    )
};

export default ColorPallet;
