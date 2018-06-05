import uuidv1 from 'uuid/v1'

export const dataViewReducer = (state = [], action) => {
    switch (action.type) {
        case 'SUBMIT_DATA':
            return [
                ...state,
                {
                    id: uuidv1(),
                    dataKey: action.dataKey,
                    dataValue: action.dataValue,
                    editMode: false
                }
            ]
        default:
            return state
    }
}