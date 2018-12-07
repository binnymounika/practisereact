import React from 'react'
class Alphabet extends React.Component {
    
    render() { 
        let someStyle={
            color:this.props.fcolor,
            backgroundColor:this.props.bcolor
        }
        return ( 
            <div> <span style={someStyle}>{this.props.children}</span> </div>
        )}
}
 
export default Alphabet;