import React, {Component} from "react"
import { render } from "react-dom"

export default class Hog extends Component{

    render(){
        return (
            <div>
                <p>Specialty: {this.props.hog.specialty}</p>
                <p>Greased: {this.props.hog.greased ? "Yes" : "No"}</p>
                <p>Weight: {this.props.hog.weight}</p>
                <p>Medals: {this.props.hog["highest medal achieved"]}</p>
            </div>
        )
    }
}