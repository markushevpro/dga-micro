import { QuestionInput } from '@/segments/units/QuestionInput'
import { SpacedText }    from '@/shared/ui-kit/SpacedText'
import { Stack }         from '@/shared/ui-kit/Stack'

import type { TQuestionStruct } from '@/services/questions'
import type { ComponentProps }  from 'react'

interface PQuestionRow
    extends
    TQuestionStruct<string | undefined>,
    ComponentProps<typeof QuestionInput>
{}

export
function QuestionRow
({ before, after, ...inputProps }: PQuestionRow )
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
