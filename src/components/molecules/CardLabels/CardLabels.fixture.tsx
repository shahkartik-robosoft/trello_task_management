import * as React from "react";
import CardLabels, {ILabels} from "./CardLabels";

export const labels: Array<ILabels> = [
    {
        labelId: '1',
        label: 'label 1',
        color: 'green'
    },
    {
        labelId: '2',
        label: 'label 2',
        color: 'red'
    },
    {
        labelId: '3',
        label: 'label 3',
        color: 'yellow'
    }
]

const CardLabelsCosmos = () => {
    return (
        <CardLabels labels={labels} />
    )
};

export default CardLabelsCosmos;
