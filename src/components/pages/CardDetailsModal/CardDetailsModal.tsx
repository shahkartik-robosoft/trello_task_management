import * as React from "react";
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import CloseIcon from "@material-ui/icons/Close";
import {ITaskCardProps} from "../../molecules/TaskCard/TaskCard";
import CardLabels, { ILabels } from "../../molecules/CardLabels/CardLabels";
import CardDescription, {ICardDescriptionProps} from "../../molecules/CardDescription/CardDescription";
import CardChecklist, {IChecklist} from "../../molecules/CardChecklist/CardChecklist";
import './CardDetailsModal.scss';
import Text from "../../atoms/Text/Text";

interface ICardDetailsModalProps {
    card: ITaskCardProps;
    cardLabels: Array<ILabels>;
    cardDescription: ICardDescriptionProps;
    cardChecklist: Array<IChecklist>;
}
const CardDetailsModal: React.FC<ICardDetailsModalProps> = props => {
    return (
        <div className="cardDetailsModal">
            <div className="cardDetailsModal--header">
                <RemoveFromQueueIcon/>
                <Text style={{ flex: 2, marginLeft: '20px' }} textLabel={props.card.buttonLabel} color="black" fontSize="xl" />
                <CloseIcon />
            </div>
            <div className="cardDetailsModal--cardDetails">
                <div className="cardDetailsModal--details">
                    <div style={{ margin: '20px', marginLeft: '60px' }}><CardLabels labels={props.cardLabels} /></div>
                    <div style={{ margin: '20px' }}><CardDescription description={props.cardDescription.description} addDescription={props.cardDescription.addDescription} /></div>
                        <div style={{ margin: '20px' }}><CardChecklist checklists={props.cardChecklist} /></div>
                </div>
                <div className="cardDetailsModal--ActionPanel">

                </div>
            </div>
        </div>
    )
}

export default CardDetailsModal;
