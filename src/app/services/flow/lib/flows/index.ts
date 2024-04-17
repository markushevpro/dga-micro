import type { TFlowConfig, TFlows } from '~/services/flow/lib/types'

import { createFlowsFromConfig } from '~/services/flow/lib/helpers'

import actionFlow   from './action'
import desireFlow   from './desire'
import freeFlow     from './free'
import goalFlow     from './goal'
import goalTaskFlow from './goal-task'
import planFlow     from './plan'

export
const flowsConfig: TFlowConfig[] = [ desireFlow, actionFlow, goalFlow, goalTaskFlow, planFlow, freeFlow ]

export
const flows: TFlows = createFlowsFromConfig( flowsConfig )
