export const submitDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SUBMIT_DATA':
            return {
                dataKey: action.dataKey,
                dataValue: action.dataValue
            }
        default:
            console.log('default', action)
            return state
    }
}