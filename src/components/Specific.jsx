import React, { Component } from 'react';
import Repose from './repose';
 import  './styleT.css';
class Specific extends Component {

    constructor(props){

     super(props);
       this.state = {
        user:[],
        repos:[],
        ReposWithstars:[],
        error:false
       }
   
    const fetchUsers = async (user) => {
        const api_call = await fetch(`https://api.github.com/users/${user}`);
        const data = await api_call.json();
       return {data}
      };

       fetchUsers(props.match.params.login).then((res)=>{
         if(!res.data.message) {
          this.setState({ user: res.data });
         }
         console.log(res)
      })

    //  https://api.github.com/users/mojombo/repos  
    
  

     }    


    Data(){
      if(this.state.user.length == 0){
        return (<i>not found</i>)

      } else {
        
        console.log('found',this.state.user.length);
        return (
          <div>
             <div className='base' >
            <h1>Name : { this.state.user.name } </h1>
            <img src={ this.state.user.avatar_url } />
            <h1>followers : { this.state.user.followers } </h1>
            <h1>location : { this.state.user.location } </h1>
          </div>
          < Repose user={this.props.match.params.login}   />

           </div>
           )
      }

     }

    render() {
        return (
     <React.Fragment>
        
             { this.Data() }

        {/* { this.state.error > 0 ? 
         <i>404 not found</i>        
        :
        <div className='base' >
           <h1>Name : { this.state.user.name } </h1>
           <img src={ this.state.user.avatar_url } />
           <h1>followers : { this.state.user.followers } </h1>
           <h1>location : { this.state.user.location } </h1>
        
         </div>
               
        }
          
   
          < Repose user={this.props.match.params.login}   /> */}


    </React.Fragment>
        );
    }
}

export default Specific;


