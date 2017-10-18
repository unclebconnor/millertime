import React, { Component } from 'react';
// import App from './App.js'
import './App.css';

class JobList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      // selectedJob:{}
    }
  }

  handleSelectJobClick(e,index){
    e.preventDefault();
    this.props.updateActiveJob(index);
  }

  handleAddJobClick(e){
    fetch("/jobs/addjob")
    .then((r) => r.json())
    .then((r) => {
      this.props.componentDidMount();
    })
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
      jobs: nextProps.jobs
    })
  }


  render() {
    // console.log("JOBLISTSTATE",this.state)
    return (
      <div>
      <ul className="nav list-group">
        {this.state.jobs.map((job,index) => {
          return(
            <li key={index}>
                <a className="list-group-item" href="" onClick={(e) => this.handleSelectJobClick(e,{index})}>
                <div className={job===this.props.activeJob ? 'bg-primary' : null}>
                <span>Title: </span><span>{job.title}</span>
                </div>
                <div><span>Company: </span><span>{job.companyName}</span></div>
                <div><span>Rating: </span><span>{job.rating}</span></div>
                </a>
            </li>
          )
        })}
      </ul>
      <div className="text-center"><button onClick={(e) => this.handleAddJobClick(e)}>Add Job</button></div>
    </div>
    );
  }
}

export default JobList;