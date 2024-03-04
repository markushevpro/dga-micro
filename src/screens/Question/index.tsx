import { ArowBack }          from '@rsuite/icons'
import { IconButton, Input } from 'rsuite'

import Stack from '@/shared/layouts/Stack'

import styles from './Question.module.css'

import type { IQuestionScreenProps } from './lib/types'
import type { ReactNode }            from 'react'

export default function QuestionScreen
({ first, before, after, placeholder, value, onAnswer, onPrevious, onNext }: IQuestionScreenProps ): ReactNode
{
    return (
        <Stack className={styles.container} spacing={10}>
            {
                first
                    ? (
                        <div className={styles.placeholder}></div>
                    )
                    : (
                        <IconButton appearance='subtle' icon={<ArowBack />} onClick={onPrevious} />
                    )
            }

            <Stack verticalMobile spacing={10}>
                {
                    before && (
                        <>
                            { ' ' }
                            { before }
                            { ' ' }
                        </>
                    )
                }

                <Input
                    autoFocus
                    placeholder={placeholder}
                    style={{ minWidth: 200 }}
                    value={value ?? ''}
                    onChange={onAnswer}
                    onPressEnter={onNext}
                />

                {
                    after && (
                        <>
                            { ' ' }
                            { after }
                            { ' ' }
                        </>
                    )
                }
            </Stack>

            <IconButton
                appearance='subtle'
                disabled={!value}
                icon={<ArowBack />}
                style={{ transform: 'rotate(180deg)' }}
                onClick={onNext}
            />
        </Stack>
    )
}
