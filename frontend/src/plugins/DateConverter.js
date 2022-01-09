export default (dateStr) => {
    return dateStr.substring(0, 10).split('-').reverse().join('.')
}