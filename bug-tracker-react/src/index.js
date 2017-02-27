import React from 'react'
import {render} from 'react-dom'

import Card from './Card'
import Isi from './Isi'
import Footer from './Footer'

class  App extends React.Component {
    render () {

      return (

        <div className="container">
        <h1 className="title is-1">Bug Tracker <small>by HACKTIV8</small></h1>
          <div>
            <Isi/>
          </div>
          <hr/>
          <div className="column is-medium">
            <Card/>
          </div>

          <div className="footer">
            <Footer/>
          </div>
        </div>


      )
    }
  }


render(<App />, document.getElementById('main'))
