import { useCustomMutation } from '../useCustomMutation'
import { useCustomQuery } from '../useCustomQuery'

const useQueryExample = () => {
  const query = useCustomQuery<{ valid: 'yes' | 'no' }>('/content')
}

const useMutationExample = () => {
  const mutation = useCustomMutation<{ valid: 'yes' | 'no' }, { phone: string }>('/content')

  // if needed here, use queryClient.invalidateQueries to refetch data linked to this mutation
}
