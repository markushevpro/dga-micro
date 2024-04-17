import type { IQuestionStoreData, IQuestionStoreActions } from './types'

import { generateStore } from '~/shared/stores/generator'

import { questionStoreInitial } from './initial'
import { useQuestionStore }     from './store'

const [ useQuestionStoreData, useQuestionStoreActions ] = generateStore<IQuestionStoreData, IQuestionStoreActions>( questionStoreInitial, useQuestionStore )

export {
    useQuestionStoreData,
    useQuestionStoreActions
}
