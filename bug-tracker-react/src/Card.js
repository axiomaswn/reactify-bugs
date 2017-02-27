import React from 'react'

class Card extends React.Component {
  render (){
    return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
          BugId: 12
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <p>Data</p>
            <span className="tag is-info">High</span>
            <p>Assigned To: Anon</p>
          </div>
          <small className="tag is-primary">Medium</small>
        </div>
        <footer className="card-footer">
          <a className="is-warning card-footer-item">Close</a>
          <a className="card-footer-item" >Delete</a>
        </footer>
      </div>
    </div>
    )
  }
}

export default Card
