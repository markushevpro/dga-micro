import { TAnswers, TFlowConfig } from '../types'

const desireFlow: TFlowConfig = {
    name:        'desire',
    title:       'Есть то, что чем я хочу заниматься',
    description: 'но я не знаю, с чего начать',
    apperance:   'primary',
    questions:   {
        desire: {
            before:      'Я хочу',
            placeholder: 'что делать?'
        },
        goal: {
            before:      ({ desire }: TAnswers ) => `Чтобы ${desire}, мне нужно`,
            placeholder: 'что?'
        },
        milestone: {
            before:      ({ goal }: TAnswers ) => `Я получу ${goal}, когда у меня будет`,
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

export default desireFlow
