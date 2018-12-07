import React from 'react';
import ReactDOM from 'react-dom';
class LifeCycle extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            dummyVariable: 0
        }
    
    this.changeState =this.changeState.bind(this)
    }
    changeState()
    {
        this.setState({
            dummyVariable: this.state.dummyVariable+1
        })
        if(this.state.dummyVariable>10)
        {
                    ReactDOM.unmountComponentAtNode(document.getElementById("life"))
        }
    }
    
   componentWillMount()
   {
       console.log("Component will Mount now");
       console.log(this.state.dummyVariable)
       this.setState({
           dummyVariable: this.state.dummyVariable+1
       })
   }
  componentDidMount()
  {
      console.log("Component mounted");
      console.log(this.state.dummyVariable)
  }


componentWillUpdate()
{
   console.log("component will update for any state change");
}
componentDidUpdate()
{
    console.log("component  updated because of state change");
}
componentWillUnmount()
{
    console.log("component  will be unmounted");

}



    render() { 
        return ( 
            <div>Exploring Component Life Cycle
            <br></br>
            <button onClick={this.changeState}> Change state{ this.state.dummyVariable}</button></div>
         );
    }
}
 
export default LifeCycle;