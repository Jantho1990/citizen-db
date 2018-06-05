import React, { Component } from 'react'
import { connect } from 'react-redux'
import DataViewForm from './DataViewForm'

class UserViewData extends Component {
    render () {
        let { dataViews } = this.props
        let renderDataViews = () => {
            if (dataViews.length === 0) {
                return (
                    <p>Nothing here</p>
                )
            }
            return dataViews.map(dataView => {
                return (
                    <DataViewForm key={dataView.id} {...dataView}></DataViewForm>
                )
            })
        }
        return (
            <div className="user-view-data">
                {renderDataViews()}
                <DataViewForm></DataViewForm>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            dataViews: state.dataViews
        }
    }
)(UserViewData)