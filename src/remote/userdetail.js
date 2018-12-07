import React from 'react';
class UserDetail extends React.Component {
   
    render() { 
        return ( 
        <div>
            
<li>  {this.props.myname} </li>
<li>{this.props.myemail}</li>

       </div>
        
        
        
        
           
             );
    }
}
 
export default UserDetail;