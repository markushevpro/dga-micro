import { Edit }       from '@rsuite/icons'
import { IconButton } from 'rsuite'

import { useAppStore } from '@/services/app'

import type { TQuestionName } from '@/services/questions'

interface PAnswerActions
{
    step: TQuestionName
}

export
function AnswerActions
({ step }: PAnswerActions )
{
    const { setEditEvent } = useAppStore()

    return (
        <IconButton appearance='subtle' icon={<Edit />} onClick={setEditEvent( step )} />
    )
}
