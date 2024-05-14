import type { IQuestionInputProps } from '~/segments/elements/QuestionInput'
import type { TQuestionStruct }     from '~/services/flow'

import QuestionInput from '~/segments/elements/QuestionInput'
import SpacedText    from '~/shared/ui-kit/SpacedText'
import Stack         from '~/shared/ui-kit/Stack'

interface IQuestionRowProps
    extends TQuestionStruct<string | undefined>, IQuestionInputProps
{}

export default
function QuestionRow
({ before, after, ...inputProps }: IQuestionRowProps )
{
    return (
        <Stack verticalMobile spacing={10}>
            <SpacedText>
                { before }
            </SpacedText>

            <QuestionInput
                {...inputProps}
            />

            <SpacedText>
                { after }
            </SpacedText>
        </Stack>
    )
}
