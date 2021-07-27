export const validateStrings = (value) => {
  return value.replace(/[^a-zA-Z ]/gi, '')
}
export const validateCardNumber = (value, type) => {
  return value.replace(/[^0-9]/gi, '')
}
export const validateData = (value) => {
  const size = value.length,
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1
  let data = value.split('/')
  if (size <= 7) {
    if (data[0] <= 12) {
      if (!(data[0] < month && data[1] < year)) {
        return value.replace(/[a-z]/gi, '')
      }
    } else return ''
  } else return ''
}
export const validateCode = (value) => {
  const size = value.length
  if (size <= 3) return value.replace(/[^0-9]/gi, '')
  else return ''
}
