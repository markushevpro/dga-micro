import { PropsWithChildren } from 'react'

import { TFlowInfo } from '@/services/flow'

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
