import { createSubmit } from 'transactions-cms-state'

import { isEmptyFormFunctionsByEntityName } from '../utils/submit'

const submit = createSubmit(isEmptyFormFunctionsByEntityName)

export default submit
