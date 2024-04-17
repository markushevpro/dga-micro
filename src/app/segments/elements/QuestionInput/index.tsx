import { Input } from 'rsuite'

export
interface IQuestionInputProps {
    placeholder: string | undefined
    value:       string | undefined
    onChange:    (( value: string ) => void ) | undefined
    onEnter:     (() => void ) | undefined
}

export default
function QuestionInput
({ placeholder, value, onChange, onEnter }: IQuestionInputProps )
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
