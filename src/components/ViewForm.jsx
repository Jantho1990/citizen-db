import React from 'react'

class ViewForm extends React.Component {
    reduxAction () {
        // This function should be replaced by any classes
        // extending the ViewForm.
        return {}
    }
    submitData () {
        let {dispatch} = this.props
        dispatch(this.reduxAction())
    }
}

export default ViewForm