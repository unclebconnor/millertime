import React, { Component } from 'react';
import $ from 'jquery';

class JobDetail extends Component {
  constructor(props) {
    super(props)
    //where are the initial states coming from??

    this.state = {
      value: "",
      name: "Reggie",
      userData: {
        title: "Junior Dev",
        companyName: "Google",
        skills: "HTML, CSS, JS, React, hipster vibes",
        rating: "Unicorn",
        statusString: "applied"
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(newProp) {
    // { These props will be piped in on the rerendering of the parent component
    //   so they will be changing pretty constantly }

      //  this.setState(
      //    { userData: {
      //     title: newProp.title,
      //     companyName: newProp.companyName,
      //     skills: newProp.skills,
      //     rating: newProp.rating,
      //     statusString: newProp.statusString
      //     }
      //   });

      this.setState({
         userData: {
         title: "Junior Dev",
         companyName: "Facebook",
         skills: "React, React, React, REACT, html",
         rating: "9/10",
         statusString: "applied"
         }
      });

    console.log("running props")
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    //this.state.userData
    e.preventDefault();

    $.ajax({
      method: 'post',
      url: "/jobs/jobList",
      data: this.state.userData
      }).done(function(data) {
      // get data returned from the PUT route
      console.log(data);
    window.location = "/";
    });

  }

  changeTitle(e) {
    const userData = this.state.userData;
    userData.title = e.target.value;
    this.setState({ userData });
  }

  changeCompanyName(e) {
    const userData = this.state.userData;
    userData.companyName = e.target.value;
    this.setState({ userData });
  }

  changeSkills(e) {
    const userData = this.state.userData;
    userData.skills = e.target.value;
    this.setState({ userData });
  }

  changeRating(e) {
    const userData = this.state.userData;
    userData.rating = e.target.value;
    this.setState({ userData });
  }

  changeStatusString(e) {
    const userData = this.state.userData;
    userData.statusString = e.target.value;
    this.setState({ userData });
  }

  render() {
    return(
      <div>
        <h1>Job detail page</h1>
        <form onSubmit={this.handleSubmit}>
          Title:
          <input type="text"
          placeholder={this.state.userData.title}
          // value={this.state.userData.title}
          onChange={this.changeTitle.bind(this)}
          />
          <br/>

          Company Name:
          <input type="text"
          placeholder={this.state.userData.companyName}
          // value={this.state.userData.companyName}
          onChange={this.changeCompanyName.bind(this)}
          />
          <br />

          Skills:
          <input type="text"
          size="40"
          placeholder={this.state.userData.skills}
          // value={this.state.userData.skills}
          onChange={this.changeSkills.bind(this)}
          />
          <br />

          Rating:
          <input type="text"
          placeholder={this.state.userData.rating}
          // value={this.state.userData.rating}
          onChange={this.changeRating.bind(this)}
          />
          <br />

          Status string:
          <input type="text"
          placeholder={this.state.userData.statusString}
          // value={this.state.userData.statusString}
          onChange={this.changeStatusString.bind(this)}
          />
          <br />

          {/*}
          Status array dropdownMenu:
          <br />
          contactPerson: <br />
          contactEmail: <br />
          thankYouSent: <br />
          firstFollowUp: <br />
          secondFollowUp: <br />
          thirdFollowUp: <br />
          */}

          Info:
          <input type="text" placeholder="more info here" />
          <br />

          <input type="submit" value="submit edits" />
        </form>
      </div>
    )
  }
}

export default JobDetail;
