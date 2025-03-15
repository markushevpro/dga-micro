import { Input } from 'rsuite'

interface PQuestionInput
{
    placeholder: string | undefined
    value: string | undefined
    onChange: (( value: string ) => void ) | undefined
    onEnter: (() => void ) | undefined
}

export
function QuestionInput
({ placeholder, value, onChange, onEnter }: PQuestionInput )
{
    return (
        <Input
            autoFocus
            placeholder={placeholder}
            style={{ minWidth: 200 }}
            value={value ?? ''}
            onChange={onChange}
            onPressEnter={onEnter}
        />
    )
}
