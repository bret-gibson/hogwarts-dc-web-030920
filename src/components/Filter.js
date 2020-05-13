import React, {Component} from "react"

export default class Filter extends Component {
    render(){
        return(
            <div>
                <select name="type" id="type" onChange={this.props.onChangeSort} value={this.props.filters.sort} >
                    <option value="none">None</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
                <input id="greased" type="checkbox" onClick={this.props.onGreaseClick}/>
                <label for="greased"> Only Greased</label>
            </div>
        )
    }
}