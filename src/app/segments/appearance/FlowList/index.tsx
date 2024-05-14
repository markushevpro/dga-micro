import FlowItem                from '~/segments/elements/FlowItem'
import { flowsConfig }         from '~/services/flow/lib/flows'
import { useMainStoreActions } from '~/shared/stores/main'
import Stack                   from '~/shared/ui-kit/Stack'

export default
function FlowList
()
{
    const { setFlow } = useMainStoreActions()

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
