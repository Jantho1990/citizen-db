import React from 'react'
import ViewForm from './ViewForm'
import { connect } from 'react-redux'

import actions from './../actions/actions'

class DataViewForm extends ViewForm {
    handleSubmit (e) {
        this.submitData(e, () => {
            this.refs.dataKey.value = ''
            this.refs.dataValue.value = ''
            this.refs.dataKey.focus()
        })
    }
    reduxAction () {
        return {
            type: 'SUBMIT_DATA',
            'dataKey': this.refs.dataKey.value,
            'dataValue': this.refs.dataValue.value
        }
    }
    render () {
        let {
            id, dataKey, dataValue, editMode
        } = this.props
        return (
            <div className="data-view-form" data-edit-mode={this.editMode} onKeyPress={(e) => this.handleSubmit(e)}>
                <input ref="dataKey" type="text" defaultValue={dataKey} data-edit-mode={this.editMode}/>
                <input ref="dataValue" type="text" defaultValue={dataValue} data-edit-mode={this.editMode}/>
            </div>
        )
    }
}

export default connect()(DataViewForm)