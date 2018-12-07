import React from 'react'
import Daughter from './daughter';
import Son from './son';


class Parent extends React.Component {
    render() { 
        return ( <div>
            Parent
            <hr></hr>
            <Daughter></Daughter>
            <Son></Son>
            </div> );
    }
}
 
export default Parent;