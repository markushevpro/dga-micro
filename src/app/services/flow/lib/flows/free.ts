import type { TFlowConfig } from '~/services/flow/lib/types'

import { defaultPrepends } from '@/app/services/flow/lib/const'

const freeFlow: TFlowConfig = {
    name:        'free',
    title:       'Хочу заполнить всё сам',
    description: '',
    apperance:   'subtle',
    questions:   {
        desire: {
            before:      defaultPrepends.desire,
            placeholder: 'что делать?'
        },
        goal: {
            before:      defaultPrepends.goal,
            placeholder: 'что?'
        },
        milestone: {
            before:      defaultPrepends.milestone,
            placeholder: 'что?'
        },
        step: {
            before:      defaultPrepends.step,
            placeholder: 'что сделать?'
        },
        task: {
            before:      defaultPrepends.task,
            placeholder: 'что сделать?'
        },
        action: {
            before:      defaultPrepends.action,
            placeholder: 'что сделать?'
        }
    }
}

export default freeFlow
