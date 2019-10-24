import React, { Component } from 'react';
import Data from './Data';
// import { withRouter } from "react-router-dom";



class Main extends Component {


 constructor(){
    super();
    this.state = {
        Data: '',
        checked: false
    }  
    this.onChange = this.onChange.bind(this);
    this.Search = this.Search.bind(this);
}

 onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
   }

 Search(e) {
    
  if(this.state.Data == '') return alert('Miss Type Search faild can Not be empty ..');
   
   this.setState({ [e.target.name]: e.target.value });
      

      if(this.state.checked ){
       this.props.history.push({
        pathname:`/Specific/${this.state.Data}`,
       });
      } else {
        this.props.history.push({
          pathname:`/Data/${this.state.Data}`,
         });
      }
 
  

  }


  GoDirectly(e){
          
    // if(this.state.Data == '') return alert('Miss Type Search faild can Not be empty ..');
     
    //  this.setState({ [e.target.name]: e.target.value });
      
    //  const fetchUsers = async (user) => {
    //    const api_call = await fetch(`https://api.github.com/users/${user}`);
    //    const data = await api_call.json();
    //   return {data}
    //  };
      
    //   fetchUsers(this.state.Data).then((res)=>{
    //   this.props.history.push({
    //       pathname:`/Data/${this.state.Data}`,
    //       state:res
    //      });
    //   })
    
  }

  handleChange = (e) => {
    this.setState(() => ({
      checked: !this.state.checked
    }));
   console.log(this.state.checked,'checked');
 }


render() {

   return ( 
 
    <React.Fragment>  

          

    <div className="main" id="main">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="main__text-container">
            <h1 className="main__title">GitFetch - Profile Finder for GitHub</h1>
            <p className="main__subtitle">Check out the repos, followers and more,
              just by entering a username!</p>
          </div>
          <div className="main__input-container">
          <div className="check">
          <input className="" type="checkbox"
                    name='checked'
                    onChange={this.handleChange}
                    value={this.state.checked}
                /> Go Direct to The user Profile
          </div>
            {/* <h2>checked ;   { this.state.checked ? <i>true</i>: <i>false</i> }</h2> */}
            { this.state.checked  ?   
                  <input 
                  type="text" 
                  id="search" 
                  name="Data"
                  className="main__input" 
                  placeholder="Go Directely to user Profile"
                  value={this.state.Data}
                  onChange={this.onChange}
                  />
                     :
                  <input 
                  type="text" 
                  id="search" 
                  name="Data"
                  className="main__input" 
                  placeholder="Enter a username..."
                  value={this.state.Data}
                  onChange={this.onChange}
                  />
                        }
            <span>
       
            </span>               
            <span>
              <a onClick={ this.Search } className="btn btn--shallow searchButton">Search</a>
            </span>
          </div>

        </div>
      </div>
      <div className="main__profile-container">
        <div className="main__profile">
          <div className="row">
            <div className="col-md-6">
              <p className="main__profile-name main__profile-key">
                
              </p>
              <p className="main__profile-username main__profile-key">

              </p>
            </div>
            <div className="col-md-6">
              <p className="main__profile-repos main__profile-key">

              </p>
              <p className="main__profile-url main__profile-key">

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



</React.Fragment>

 ) 
}


}

 export default Main;


//  1- Use React and TypeScript
// 2- Search for a user
// 3- Display the list of the found users [avatar, name]
// 4- Clicking on the user will go to the user details page
// 5- Have another text box where I can enter a specific username to go to their profile directly
// 6- In the user details page display: [avatar, name, last 5 repos, number of followers, location, last 5 starred repos]
// 7- Going back to the search page (or refresh) should maintain the search result
// 8- Make sure that all of the errors are handled properly
// 9- Make sure you have proper data models
// 10- Wrap all of that in a nice design with a nice UX from your choice
// 11- Please don't use any UI library or framework
// Push your work to a git repo and send us the URL when you finish




// url for get users https://api.github.com/search/users?q=ahmed

// the athoer one https://api.github.com/users/ahmed

// https://api.github.com/users/Ahmed/repos