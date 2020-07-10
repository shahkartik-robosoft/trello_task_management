import * as React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import './CardDescription.scss';
import Text from "../../atoms/Text/Text";
import TextArea from "../../atoms/TextArea/TextArea";
import CustomButton from "../../atoms/CustomButton/CustomButton";

export interface ICardDescriptionProps {
    addDescription: (description: string) => void,
    description?: string,
}
const CardDescription: React.FC<ICardDescriptionProps> = props => {
    const [description, setDescription] = React.useState('');
    return (
        <div className="cardDescription">
            <MenuIcon />
            <div className="cardDescription--description">
                <Text textLabel="Description" weight="bold" fontSize="lg" color="black"/>
                {
                    props.description ? <Text textLabel={props.description} color="gray"/> :
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <TextArea rowSize={6} placeholder="Add a more detailed description ... "
                                       onInput={(e: any)=> setDescription(e.target.value)} className='textArea-resizable'/>
                            <CustomButton style={{ width: '10%', margin: '5px' }} className='btn-component--AddAction' onClick={() => props.addDescription(description)}>Save</CustomButton>
                        </div>
                }
            </div>
        </div>
    )
}

export default CardDescription;
