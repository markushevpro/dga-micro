import EditFlow             from '~/flows/Edit'
import QuestionsFlow        from '~/flows/Questions'
import ResultScreen         from '~/screens/Result'
import SelectFlowScreen     from '~/screens/Select'
import { useMainStoreData } from '~/shared/stores/main'

// TODO Unused?

export default
function SelectFlow
()
{
    const { edit, result, select } = useMainStoreData()

    if ( edit ) {
        return (
            <EditFlow />
        )
    }

    if ( result ) {
        return (
            <ResultScreen />
        )
    }

    if ( select ) {
        return (
            <SelectFlowScreen />
        )
    }

    return (
        <QuestionsFlow />
    )
}
