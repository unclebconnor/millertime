import React, { Component } from 'react';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
          name: "Beavis",
          email: "thegreatcornholio@teepee.bm",
          brandingStatement: "Hey, Butt-head, this website kicks ass.",
          unicornJob: "Whoa, unicorns are cool.  Heh heh."
        },
        brandingStatementToUpdate: '',
        unicornToUpdate: ''
    }
    this.handleStatementsToUpdate = this.handleStatementsToUpdate.bind(this);
    this.updateStatements = this.updateStatements.bind(this);
  }

  handleStatementsToUpdate(e){
    this.setState({
      brandingStatementToUpdate: e.target.value,
      unicornToUpdate: e.target.value
    });
  }

  updateStatements(e){
    e.preventDefault()
    var temp;
    temp = this.state.user;
    temp.brandingStatement = this.state.brandingStatementToUpdate;
    temp.unicornJob = this.state.unicornToUpdate;
    this.setState({
    user: temp
  });
}

  render() {
    return (
        <div>
            <h1>Keep BethBot happy: evolve your brand and vision</h1>
            <p>"When in doubt, run a for loop" - Beth</p>
            <form onSubmit = {this.updateStatements}>
                Current Branding Statement:  {this.state.user.brandingStatement}
                <br />
                <input type="text" 
                placeholder="Evolve Your Brand" 
                onChange={(e)=> this.handleStatementsToUpdate(e)} />
                <br />
                Unicorn Job Specs: {this.state.user.unicornJob}
                <br/>
                <input type="text"
                placeholder="Add to your hopes and dreams"
                onChange={(e)=> this.handleStatementsToUpdate(e)} />
                <br/>
                <input type="submit" value="submit edits" />
            </form>
        </div>
    );
  }
  }

export default UserDetail;
