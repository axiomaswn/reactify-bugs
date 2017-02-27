import React from 'react'

class Card extends React.Component {
  render (){
    const dataxx = [
      {id: 1, desc:'Virus', severity:'Low', assignedTo:'Anon'},
      {id: 2, desc:'Backdoor', severity:'High', assignedTo:'Tomi'},
      {id: 3, desc:'Malware', severity:'Low', assignedTo:'Yoga'},
      {id: 4, desc:'SPAM', severity:'Medium', assignedTo:'Open'},
    ]
    return (
      <div>
        {
          dataxx.map((datax, index) =>{
            return (
              <div key = {index} className="card">
                <header className="card-header">
                  <p className="card-header-title">
                  BugId: {datax.id}
                  </p>
                </header>
                <div className="card-content">
                  <div className="content">
                    <p>{datax.desc}</p>
                    <span className="tag is-info">{datax.severity}</span>
                    <p>Assigned To: {datax.assignedTo}</p>
                  </div>
                  <small className="tag is-primary">Open</small>
                </div>
                <footer className="card-footer">
                  <a className="is-warning card-footer-item">Close</a>
                  <a className="card-footer-item" >Delete</a>
                </footer>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Card
