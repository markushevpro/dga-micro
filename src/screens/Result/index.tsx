import { Button, Divider } from 'rsuite'

import Stack from '@/shared/layouts/Stack'

import styles         from './ResultScreen.module.css'
import DependencyList from './lib/DependencyList'

import type { IResultScreenProps } from './lib/types'
import type { ReactNode }          from 'react'

export default function ResultScreen
({ answers, prepends, onEdit, onReset }: IResultScreenProps ): ReactNode
{
    return (
        <Stack
            vertical
            className={styles.container}
            spacing={10}
        >
            <DependencyList answers={answers} prepends={prepends} onEdit={onEdit} />
            <Divider />
            <Button onClick={onReset}>Пройти еще раз</Button>
        </Stack>
    )
}
