export const submitData = (dataKey, dataValue) => {
    return {
        type: 'SUBMIT_DATA',
        dataKey,
        dataValue
    }
}