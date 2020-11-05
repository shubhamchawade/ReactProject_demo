
import React, {Component} from 'react';
//import logo from './logo.svg';
import styled from './App.module.css';
import Person from './Person/Person';


class App extends Component{

state = {
  persons : [
    {id:"tht1", name : 'shubham', job: 'front end dev'},
    {id:"tht2", name : 'nilay', job: 'back end dev'},
    {id:"tht3", name : 'Aniket', job: 'App Architect'},
    {id:"tht4", name : 'anil', job: 'Manager'}
  ],
  showPerson: true
}

clickMeHandler = () => {

  const doesShow = this.state.showPerson;
  this.setState({
    showPerson : !doesShow
  });

}


deleteHandler = (personIndex) => {

  const person = [...this.state.persons];
  person.splice(personIndex, 1);
  this.setState({
    persons : person
  });

}


changeHandler = (event, id) => {

const personIndex = this.state.persons.findIndex(p => {
  return id === p.id;
});

const person = {
  ...this.state.persons[personIndex]
};

person.name = event.target.value;



const persons = [...this.state.persons];
persons[personIndex] = person;

this.setState({
  persons : persons
});

}




  render(){
    
    const btnColor = [];
    let pColor = [];
    let person = null;
    if(this.state.showPerson) {
       person = (
        <div>
          {this.state.persons.map((p, index) => {
            return <Person name={p.name} job={p.job} 
            clicked={() => this.deleteHandler(index)} key={p.id}
            changed={(event) => this.changeHandler(event, p.id)}
            />
          })}
      </div>
   )

      btnColor.push(styled.red);

    }

    if(this.state.persons.length <= 2) {
      pColor.push(styled.Red);
    }

    if(this.state.persons.length <= 1){
      pColor.push(styled.bold);
    }
    
    return (
      <div className={styled.App}>
        {person}
        <p className={pColor.join(' ')}>See I have dynamic changes</p>
        <button onClick={this.clickMeHandler} className={btnColor.join(' ')}>Click Me</button>
      </div>
    );
  }
  
}

export default App;
