export const isEmptyFormFunctionsByEntityName = Object.assign({
  user: (form, { isEdit, isNew }) => {
    return isEdit && form && Object.keys(form).length === 0
  }
})
