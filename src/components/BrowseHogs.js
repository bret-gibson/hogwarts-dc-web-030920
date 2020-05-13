import React, {Component} from 'react'
import Card from "./Card"

export default class BrowseHogs extends Component {


    render(){
        return ( 
        <div className="ui cards">
            {this.props.hogs.map(hog => {
                return <Card hog={hog} key={hog.id}/>
            })}
        </div>
 
        )}


}