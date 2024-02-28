import { createFlowsFromConfig } from '../helpers'
import { TFlowConfig, TFlows }   from '../types'

import actionFlow   from './action'
import desireFlow   from './desire'
import freeFlow     from './free'
import goalFlow     from './goal'
import goalTaskFlow from './goal-task'

export const flowsConfig: TFlowConfig[] = [ desireFlow, actionFlow, goalFlow, goalTaskFlow, freeFlow ]

export const flows: TFlows = createFlowsFromConfig( flowsConfig )
