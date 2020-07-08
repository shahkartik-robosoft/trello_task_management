import * as React from "react";
import Text from "../../atoms/Text/Text";
import './AddCard.scss';
import classnames from 'classnames';
import CustomButton from "../../atoms/CustomButton/CustomButton";

interface IAddCard {
    label: string,
    icon?: React.ReactNode,
    onClick?: (e:any) => void,
    classname?: string,
    labelStyle?: {},
    transparent?: boolean,
}
const AddCard: React.SFC<IAddCard> = (props) => (
    <CustomButton onClick={props.onClick} className={classnames(props.transparent && 'btn-component--AddNewItem')}>
        <div className={'addCard'}>
            <div className={`addCard--label`}>
                {props.icon && <span className={'addCard--label--icon'}>{props.icon}</span>}
                <Text style={props.labelStyle} fontSize="lg" color="gray" textLabel={props.label} />
            </div>
        </div>
    </CustomButton>
);

export default AddCard;
