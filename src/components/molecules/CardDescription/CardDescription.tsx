import * as React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import './CardDescription.scss';
import Text from "../../atoms/Text/Text";
import TextArea from "../../atoms/TextArea/TextArea";

export interface ICardDescriptionProps {
    addDescription: (description: string) => void,
    description?: string,
}
const CardDescription: React.FC<ICardDescriptionProps> = props => {
    return (
        <div className="cardDescription">
            <MenuIcon />
            <div className="cardDescription--description">
                <Text textLabel="Description" weight="bold" fontSize="lg" color="black"/>
                {
                    props.description ? <Text textLabel={props.description} color="gray"/> :
                        <TextArea rowSize={6} placeholder="Add a more detailed description ... "
                                  onInput={props.addDescription} className='textArea-resizable'/>
                }
            </div>
        </div>
    )
}

export default CardDescription;
