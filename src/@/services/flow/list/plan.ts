import type { TFlowConfig } from '..'

export
const planFlow: TFlowConfig = {
    name:        'plan',
    title:       'Список действий',
    description: 'и больше ничего',
    apperance:   'default',
    prepends:    {
        desire:    '1.',
        goal:      '2.',
        milestone: '3.',
        step:      '4.',
        task:      '5.',
        action:    '6.'
    },
    questions: {
        desire: {
            before:      '1.',
            placeholder: ''
        },
        goal: {
            before:      '2.',
            placeholder: ''
        },
        milestone: {
            before:      '3.',
            placeholder: ''
        },
        step: {
            before:      '4.',
            placeholder: ''
        },
        task: {
            before:      '5.',
            placeholder: ''
        },
        action: {
            before:      '6.',
            placeholder: ''
        }
    }
}
