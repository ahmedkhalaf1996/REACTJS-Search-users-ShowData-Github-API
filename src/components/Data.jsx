import React, { Component } from 'react';
import  './style.css';
class Data extends Component {
  
    constructor(props){
            super(props);
           this.state = {
            user:[]
           }
        const fetchUsers = async (user) => {
            const api_call = await fetch(`https://api.github.com/search/users?q=${user}`);
            const data = await api_call.json();
           return {data}
          };
           
           fetchUsers(props.match.params.id).then((res)=>{
              this.setState({ user: res.data.items });
           })
    }
       
    GoFetchOneUser(data){
        console.log('worked',data);
        this.props.history.push({
            pathname:`/Specific/${data}`,
           });
     
    }

    
    render() {
        return (
     <React.Fragment>
            <div className="userSec">
             { this.state.user.map( user => (
             <a key={user.id} className="an"
                       onClick={()=>{
                        this.GoFetchOneUser(user.login);
                       }} 
                       >
                                          
                 <div key={user.id} className='next'>
                    <h5  > {user.login}</h5>
                    <img src={user.avatar_url}   />
                 </div>
              </a>
               ) ) }
            </div>
            <div className="clear"></div>
            <div className="end"><i >End Of Reselt</i></div>
    </React.Fragment>
        );
    }

}

export default Data;


