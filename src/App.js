import React, {Component} from 'react'
import './App.css'


  const list = [
    {
      id: 1,
      name: 'John Lennon',
      votes: 0
    },
    {
      id: 2,
      name: 'Paul McCartney',
      votes: 0
    },
    {
      id: 3,
      name: 'George Harrison',
      votes: 0
    },
    {
      id: 4,
      name: 'Ringo Starr',
      votes: 0
    }
  ]


  class App extends Component {

    state = {
      members: []
    }

    componentDidMount(){
      this.setState({ members: list })
    }

    handleClick = memberId => {
      const updatedList = this.state.members.map(member =>{
        if(member.id === memberId) {
          return Object.assign({}, member, {
            votes: member.votes + 1
          })
        } else {
          return member
        }
      })
      this.setState({
        members: updatedList 
      })
    }

    render() {
      return(
        this.state.members.map(member =>
          <Beatle key={member.id} name={member.name} id={member.id} votes={member.votes} onVote={this.handleClick} />
        )
        
      )
    }
  }

  class Beatle extends Component {

    onClickHandle = () => this.props.onVote(this.props.id)
    
    render() {
      return (
        <div className='App'>
          {this.props.name} <button onClick={this.onClickHandle}>+</button>
          {this.props.votes}
        </div>
      )
    }
  }

export default App
