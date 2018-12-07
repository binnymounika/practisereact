import React from 'react';
class UserDetail extends React.Component {
   
    render() { 
        return ( 
        
            <table border="4">
            <thead>
              <tr>
                
                <th>Name</th>
                <th>Email</th>
                
                </tr>
                </thead>
        <tr>
<td>  {this.props.myname} </td>
<td>{this.props.myemail}</td>

        </tr>
        
        
        </table>
        
        
        
        
           
             );
    }
}
 
export default UserDetail;