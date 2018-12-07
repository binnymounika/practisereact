import React from 'react'
import axios from 'axios'
import UserDetail from './userdetail';
class RemoteAPIData extends React.Component {
    constructor(props)
    {
        super(props)
        this.state={
            users:[]
        }
    }
    getRemoteData()
    {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((received) => {
            console.log(received.data)
            this.setState({users:received.data})
            console.log(this.state.users)
        })
       
    }
    componentWillMount()
    {
        this.getRemoteData()
    }
    renderUserDetail()
    {
        return this.state.users.map((user) => 
        {
          return (<UserDetail  key={user.id}
                                myname={user.name}
                                myemail={user.email}             ></UserDetail>)
        })
    }
    render() { 
        return (  
            <div>
                Getiing data..
                <ol>
                {
                    this.renderUserDetail()
                }
                </ol>
            </div>
        );
    }
}
 
export default RemoteAPIData;