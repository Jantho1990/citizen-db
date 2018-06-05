import React from 'react'
import ViewForm from './ViewForm'
import { connect } from 'react-redux'

import actions from './../actions/actions'

class DataViewForm extends ViewForm {
    reduxAction () {
        return {
            type: 'SUBMIT_DATA',
            'dataKey': this.refs.dataKey,
            'dataValue': this.refs.dataValue
        }
    }
    render () {
        let {
            id, dataKey, dataValue, editMode
        } = this.props
        return (
            <div className="data-view-form" data-edit-mode={this.editMode} onKeyPress={(e) => this.submitData(e)}>
                <input ref="dataKey" type="text" data-edit-mode={this.editMode}/>
                <input ref="dataValue" type="text" data-edit-mode={this.editMode}/>
            </div>
        )
    }
}

export default connect()(DataViewForm)