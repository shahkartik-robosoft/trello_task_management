import * as React from 'react';
import Text from "../../atoms/Text/Text";
import CustomButton from "../../atoms/CustomButton/CustomButton";

export interface ILabels {
    labelId: string,
    label: string,
    color: string,
}

export interface ICardLabelsProps {
    labels: Array<ILabels>
}

const CardLabels: React.FC<ICardLabelsProps> = props => {
    return (
        <div className="cardLabels">
            <Text textLabel="LABELS" color="gray" />
            <div className="cardLabels--labels">
                {
                    props.labels.map( label => <CustomButton key={label.labelId} className={`btn-component--${label.color}`}>{label.label}</CustomButton>)
                }
                <CustomButton className='btn-component--gray'>+</CustomButton>
            </div>
        </div>

    )
}

export default CardLabels;