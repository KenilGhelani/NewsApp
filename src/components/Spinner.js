import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div>
         <div className="d-flex justify-content-center">
        <div className="spinner-border spinner-center" role="status">
          <span className="visually-hidden my-3">Loading...</span>
        </div>
        </div>
      </div>
    )
  }
}

export default Spinner
