import React from 'react'
import ViewForm from './ViewForm'

class DataViewForm extends ViewForm {
    reduxAction () {
        return {
            type: 'SUBMIT_DATA',
            'dataKey': this.dataKey,
            'dataValue': this.dataValue
        }
    }
    render () {
        let {
            id, dataKey, dataValue, editMode
        } = this.props
        return (
            <div className="data-view-form" data-edit-mode={this.editMode}>
                <input ref="dataKey" type="text" data-edit-mode={this.editMode}/>
                <input ref="dataValue" type="text" data-edit-mode={this.editMode}/>
            </div>
        )
    }
}

export default DataViewForm