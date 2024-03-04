import type { TFlowInfo }         from '@/services/flow'
import type { PropsWithChildren } from 'react'

export type flowSelectHandler = ( name: string ) => () => void

export interface ISelectFlowScreenProps {
    onSelect: flowSelectHandler
}

export interface IFlowListProps extends PropsWithChildren {
    onSelect: flowSelectHandler
}

export interface IFlowItemProps extends TFlowInfo {
    onSelect: () => void
}
