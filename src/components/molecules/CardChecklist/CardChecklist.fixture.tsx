import * as React from "react";
import CardChecklist, {IChecklist} from "./CardChecklist";

export const checklists: Array<IChecklist> = [
    {
        checklistId: '1',
        checklist: 'checklist 1',
        checklistItems: [
            {
                checklist: 'to DO',
                checklistItemId: 'to_do',
                isComplete: true,
            }
        ]
    },
    {
        checklistId: '2',
        checklist: 'checklist 2',
        checklistItems: [
            {
                checklist: 'to DO done',
                checklistItemId: 'to_do_done',
                isComplete: false,
            }
        ]
    },
    {
        checklistId: '3',
        checklist: 'checklist 3',
        checklistItems: [
            {
                checklist: 'In progress',
                checklistItemId: 'In_progress',
                isComplete: true,
            }
        ]
    },
]

const CardChecklistCosmos = () => {
    return (
        <CardChecklist addChecklistDetails={(checklist, id) => {}}
                       updateChecklistStatus={(itemId: string, checklistId: string) => {}}
                       deleteChecklist={(checklistId: string) => {}} checklists={checklists} />
    )
}

export default CardChecklistCosmos;