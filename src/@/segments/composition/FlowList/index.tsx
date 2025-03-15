import { FlowItem }    from '@/segments/units/FlowItem'
import { useAppStore } from '@/services/app'
import { flowsConfig } from '@/services/flow'
import { Stack }       from '@/shared/ui-kit/Stack'

export
function FlowList
()
{
    const { setFlow } = useAppStore()

    return (
        <Stack vertical spacing={30}>
            {
                flowsConfig.map( flow => (
                    <FlowItem key={flow.name} {...flow} onClick={setFlow( flow.name )} />
                ))
            }
        </Stack>
    )
}
