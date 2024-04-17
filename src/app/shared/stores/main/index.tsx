import type { IMainStoreData, IMainStoreActions } from './types'

import { generateStore } from '~/shared/stores/generator'

import { mainStoreInitial } from './initial'
import { useMainStore }     from './store'

const [ useMainStoreData, useMainStoreActions ] = generateStore<IMainStoreData, IMainStoreActions>( mainStoreInitial, useMainStore )

export {
    useMainStoreData,
    useMainStoreActions
}
