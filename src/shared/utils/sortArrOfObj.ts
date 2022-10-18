/**Helper для сортировки массива объектов по свойству, который надо передать через параметр в виде строки */
const sortArrObj = <T>(property: keyof T) => (a: T, b: T) => (a[property] < b[property]) ? -1 : 1
export default sortArrObj