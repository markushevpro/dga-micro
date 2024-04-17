import type { TQuestionName } from './types'

export
const allQuestions: TQuestionName[] = [ 'desire', 'goal', 'milestone', 'step', 'task', 'action' ]

export
const defaultPrepends: Record<TQuestionName, string> = {
    desire:    'Я хочу',
    goal:      'Поэтому мне нужно получить',
    milestone: 'Я стану к этому ближе, когда у меня будет',
    step:      'Для этого мне нужно',
    task:      'Сначала нужно',
    action:    'Для этого я могу прямо сейчас'
}
