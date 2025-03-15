import type { TFlowConfig } from '..'
import type { TAnswers }    from '@/services/questions'

export
const goalFlow: TFlowConfig = {
    name:        'goal',
    title:       'У меня есть цель',
    description: 'и мне нужен план',
    apperance:   'primary',
    questions:   {
        goal: {
            before:      'Я хочу',
            placeholder: 'что получить?'
        },
        desire: {
            before:      ({ goal }: TAnswers ) => `Я хочу ${goal}, потому что мне нужно`,
            placeholder: 'что делать?'
        },
        milestone: {
            before:      ({ desire, goal }: TAnswers ) => `Мне сложно получить ${goal} и ${desire}, потому что у меня отсутствует`,
            placeholder: 'чего?'
        },
        step: {
            before:      ({ milestone }: TAnswers ) => `Я смогу получить ${milestone}, когда я смогу`,
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
