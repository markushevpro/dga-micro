import type { TAnswers, TFlowConfig } from '@/services/flow/lib/types'

const actionFlow: TFlowConfig = {
    name:        'action',
    title:       'У меня есть задача',
    description: 'но мне не хватает мотивации',
    apperance:   'primary',
    prepends:    { milestone: 'Я стану к этому ближе, когда смогу' },
    questions:   {
        milestone: {
            before:      'Мне нужно',
            placeholder: 'что сделать?'
        },
        step: {
            before:      ({ milestone }: TAnswers ) => `Для того, чтобы ${milestone} мне нужно иметь`,
            placeholder: 'что?'
        },
        task: {
            before:      ({ step }: TAnswers ) => `Для того, чтобы получить ${step}, в первую очередь нужно`,
            placeholder: 'что сделать?'
        },
        goal: {
            before:      ({ step, milestone }: TAnswers ) => `Когда получу ${step} и смогу ${milestone}, я получу`,
            placeholder: 'что?'
        },
        desire: {
            before:      ({ goal }: TAnswers ) => `Мне нужно получить ${goal}, потому я хочу`,
            placeholder: 'что делать?'
        },
        action: {
            before:      ({ step }: TAnswers ) => `Прямо сейчас, чтобы получить ${step} я могу`,
            placeholder: 'что сделать?'
        }
    }
}

export default actionFlow
