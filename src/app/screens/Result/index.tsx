import { Button, Divider } from 'rsuite'

import AnswerList              from '~/segments/appearance/AnswerList'
import { useMainStoreActions } from '~/shared/stores/main'
import Stack                   from '~/shared/ui-kit/Stack'

import styles from './result-screen.module.css'

export default
function ResultScreen
()
{
    const { reset } = useMainStoreActions()

    return (
        <Stack
            vertical
            className={styles.container}
            spacing={10}
        >
            <AnswerList />
            <Divider />
            <Button onClick={reset}>Пройти еще раз</Button>
        </Stack>
    )
}
