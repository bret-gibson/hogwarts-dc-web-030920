import React, {Component} from "react"
import Hog from "./Hog"
import { render } from "react-dom"
// import hogs from "../porkers_data"
// import images from `../hog-imgs`

export default class Card extends Component{

    constructor(){
        super()
        this.state = {
            isClicked: false
        }
    }

    renderImage = () => {
        const fileName = this.props.hog.name.toLowerCase().split(" ").join("_")
        return `../hog-imgs/mudblood.jpg`  
    }

    changeClickedState = () => {
        this.setState({ isClicked: !this.state.isClicked})
    }

    render(){
        return ( 
        <div className="card">
           <h1>{this.props.hog.name}</h1>
           <img src= "../hog-imgs/mudblood.jpg"/>
           <button onClick={this.changeClickedState}>{this.state.isClicked ? "Hide Details" : "Show Details"}</button>
           <div>{this.state.isClicked ? <Hog hog={this.props.hog}/> : <p></p>} </div>
        </div>
        )}

}