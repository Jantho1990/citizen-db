import { Component } from 'react'

class ViewForm extends Component {
    reduxAction () {
        // This function should be replaced by any classes
        // extending the ViewForm.
        return {}
    }
    submitData (e) {
        console.log(e.key)
        switch(e.key) {
            case 'Enter':
                console.log('wut', this)
                console.log('boing', this.reduxAction)
                e.preventDefault()
                let {dispatch} = this.props
                dispatch(this.reduxAction())
                break
            default:
                break
        }
    }
}

export default ViewForm