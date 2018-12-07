import React from 'react'
import Daughter from './daughter';
import Son from './son';


class Parent extends React.Component {
    render() { 
        return ( <div>
            Parent
            <hr></hr>
            WE are parents({this.props.children}) family.
            <Daughter name={this.props.namedaughter}> </Daughter>
            <Son name={this.props.nameson}></Son>
            </div> );
    }
}
 
export default Parent;