import { prepends }    from '../const'
import { TFlowConfig } from '../types'

const freeFlow: TFlowConfig = {
    name:        'free',
    title:       'Хочу заполнить всё сам',
    description: '',
    apperance:   'subtle',
    questions:   {
        desire: {
            before:      prepends.desire,
            placeholder: 'что делать?'
        },
        goal: {
            before:      prepends.goal,
            placeholder: 'что?'
        },
        milestone: {
            before:      prepends.milestone,
            placeholder: 'что?'
        },
        step: {
            before:      prepends.step,
            placeholder: 'что сделать?'
        },
        task: {
            before:      prepends.task,
            placeholder: 'что сделать?'
        },
        action: {
            before:      prepends.action,
            placeholder: 'что сделать?'
        }
    }
}

export default freeFlow
