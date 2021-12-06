export const isEmpty = (object: object) =>
  Object.values(object).every(
    (x) => x === null || x === '' || typeof x === 'object'
  )
