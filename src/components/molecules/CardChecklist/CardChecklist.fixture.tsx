import * as React from "react";
import CardChecklist from "./CardChecklist";

export const checklists = [
    {
        checklistId: '1',
        checklist: 'checklist 1',
        checklistItems: ['to DO', 'done', 'WIP']
    },
    {
        checklistId: '2',
        checklist: 'checklist 2',
        checklistItems: ['to DO  222', 'done  222 ', 'WIP  2222 ']
    },
    {
        checklistId: '3',
        checklist: 'checklist 3',
        checklistItems: ['to DO   3333', 'done  33333', 'WIP   33333']
    }
]

const CardChecklistCosmos = () => {
    return (
        <CardChecklist addChecklistDetails={(checklist, id) => {}} checklists={checklists} />
    )
}

export default CardChecklistCosmos;