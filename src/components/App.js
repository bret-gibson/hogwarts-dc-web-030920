import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import BrowseHogs from "./BrowseHogs";
import Filter from "./Filter";

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs,
      filters: {
        greased: false,
        sort: "none"
      }
    }
  }


  onGreaseClick = () => {
    if(!this.state.filters.greased){
      this.setState(prevState => {
        console.log(prevState)
        const greasedHogs = prevState.hogs.filter(hog => {hog.greased})      
        console.log(greasedHogs)
      
        // this.setState({hogs: greasedHogs, filters: {greased: !this.state.filters.greased, sort: this.state.filters.sort}})
        return {
          hogs: greasedHogs,
          filters: {
            greased: !prevState.filters.greased,
            sort: prevState.filters.sort
          }
        }
        // {hogs: greasedHogs, filters: {greased: !this.state.filters.greased, sort: this.state.filters.sort}}
      });
      
    } else {
      // let newHogs = this.onNewSort()
      this.setState({hogs: hogs, filters: {greased: !this.state.filters.greased, sort: this.state.filters.sort}})
    }
  }
  
//   handleChange(id) {
//     this.setState(prevState => {
//         const updatedTodos = prevState.todos.map(todo => {
//             if (todo.id === id) {
//                 todo.completed = !todo.completed
//             }
//             return todo
//         })
//         return {
//             todos: updatedTodos
//         }
//     })
// }

  // onNewSort = () => {
  //   if (this.target.filter.sort == 'name') {
  //     let sortedByName = this.state.hogs.sort((a, b) => {
  //       return (a.name > b.name)
  //     })
  //   } else {
  //     let sortedByWeight = this.state.hogs.sort((a, b) => {
  //       return (a.weight > b.weight)
  //     })
  //   } 
  //   console.log(this.state)
  // }

  onChangeSort = (event) => {
    if (event.target.value == 'name') {
      let sortedByName = this.state.hogs.sort((a, b) => {
        return (a.name > b.name)
      })
      this.setState({hogs: sortedByName, filters: {greased: this.state.filters.greased, sort: event.target.value}})
    } else if (event.target.value == 'weight') {
      let sortedByWeight = this.state.hogs.sort((a, b) => {
        return (a.weight > b.weight)
      })
      this.setState({hogs: sortedByWeight, filters: {greased: this.state.filters.greased, sort: event.target.value}})
    } else {
      this.setState({hogs: hogs, filters: {greased: this.state.filters.greased, sort: event.target.value}})
    }
    console.log(this.state)
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <Filter onGreaseClick={this.onGreaseClick} onChangeSort={this.onChangeSort} filters={this.state.filters}/>
        <BrowseHogs hogs={this.state.hogs}/>
      </div>
    );
  }
}

export default App;
