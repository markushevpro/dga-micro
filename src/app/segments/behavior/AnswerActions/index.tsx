import type { TQuestionName } from '~/services/flow'

import { Edit }       from '@rsuite/icons'
import { IconButton } from 'rsuite'

import { useMainStoreActions } from '~/shared/stores/main'

interface IAnswerActionsProps
{
    step: TQuestionName
}

export default
function AnswerActions
({ step }: IAnswerActionsProps )
{
    const { setEditEvent } = useMainStoreActions()

    return (
        <IconButton appearance='subtle' icon={<Edit />} onClick={setEditEvent( step )} />
    )
}
