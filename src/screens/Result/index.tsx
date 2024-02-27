import { Button, Divider } from 'rsuite'

import Stack from '@/shared/layouts/Stack'

import styles                 from './ResultScreen.module.css'
import DependencyList         from './lib/DependencyList'
import { IResultScreenProps } from './lib/types'

export default function ResultScreen ({ answers, prepends, onEdit }: IResultScreenProps ) {
    const reload = () => window.location.href = '/'

    return (
        <Stack
            vertical
            className={styles.container}
            spacing={10}
        >
            <DependencyList answers={answers} prepends={prepends} onEdit={onEdit} />
            <Divider />
            <Button onClick={reload}>Пройти еще раз</Button>
        </Stack>
    )
}