import type { TFlowConfig } from '..'
import type { TAnswers }    from '@/services/questions'

export
const goalTaskFlow: TFlowConfig = {
    name:        'goal-task',
    title:       'Я просто хочу что-то сделать',
    description: '',
    apperance:   'default',
    prepends:    { goal: 'Поэтому мне нужно' },
    questions:   {
        goal: {
            before:      'Я хочу',
            placeholder: 'что сделать?'
        },
        desire: {
            before:      ({ goal }: TAnswers ) => `Я хочу ${goal}, потому что хочу`,
            placeholder: 'что делать?'
        },
        milestone: {
            before:      ({ goal }: TAnswers ) => `Я смогу ${goal}, когда у меня будет`,
            placeholder: 'что?'
        },
        step: {
            before:      ({ milestone }: TAnswers ) => `Чтобы иметь ${milestone}, мне нужно`,
            placeholder: 'что сделать?'
        },
        task: {
            before:      ({ step }: TAnswers ) => `Чтобы ${step}, сначала мне нужно`,
            placeholder: 'что сделать?'
        },
        action: {
            before:      ({ task }: TAnswers ) => `Чтобы ${task}, прямо сейчас я могу`,
            placeholder: 'что сделать?'
        }
    }
}
