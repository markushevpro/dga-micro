import { Button, Divider } from 'rsuite'

import { AnswerList }  from '@/segments/composition/AnswerList'
import { useAppStore } from '@/services/app'
import { Stack }       from '@/shared/ui-kit/Stack'

import styles from './result-screen.module.css'

export
function ResultScreen
()
{
    const { reset } = useAppStore()

    return (
        <Stack
            vertical
            className={styles.container}
            spacing={10}
        >
            <AnswerList />
            <Divider />

            <Button onClick={reset}>
                Пройти еще раз
            </Button>
        </Stack>
    )
}
