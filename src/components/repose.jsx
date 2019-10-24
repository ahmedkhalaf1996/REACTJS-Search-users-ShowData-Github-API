import React, { Component } from 'react';


class Repose extends Component {
    constructor(props){
         super(props);
         this.state = {
            user:[],
            repos:[],
            ReposWithstars:[],
            error:false
           }

            const FetchRepose = async (user) => {
                const api_call = await fetch(`https://api.github.com/users/${user}/repos`);
                const data = await api_call.json();
               return {data}
              };
               FetchRepose(props.user).then((res)=>{
                if(res.data.length > 0 & !res.data.message) {  

                let items = [];
                for(let i = 0; i < 5; i++) {
                 items.push(res.data[i]);
                 if(i==4){
                     //console.log(items);
                     this.setState({ repos: items });
                    }
                }
              
              
              //  ReposWithstars => stargazers_count
              
               let Starts = [];
                 for(let index = 0; index < res.data.length ; index++) {
                    if(   res.data[index].stargazers_count > 0){
                      Starts.push(res.data[index]);
                     }
                    if(index==4){
                        this.setState({ ReposWithstars: Starts });
                       }
                   } 
                }
                //this.setState({ repos: res.data });
                  console.log(this.state.repos);
                 // console.log(this.res['data']);
              })
              this.Data();
           }
    

    Data(){
       if(this.state.repos.length>0){
    return(
           <div>
                
             <div>
            <h2>here Last 5 repo</h2>
            <div className="lastfiveRepo">
                { this.state.repos.map( res => (                                          
                <div key={res.id} >
                    <a key={res.id} href={res.html_url} > {res.name} </a>               
                </div>
                ) ) }
            </div>                
            </div>

            <div>
                <h2>here Last 5 starred repos</h2>
                <div className="lastfiveStarRepo">
                    { this.state.ReposWithstars.map( srepo => (                                          
                    <div key={srepo.id} >
                        <a key={srepo.id} href={srepo.html_url} > {srepo.name} </a>               
                    </div>
                    ) ) }
                </div>                  
            </div> 
           </div>

        )
       } else {
           return(<h2>not found</h2>)
       }
    
    }

    render() {
        return (
          <React.Fragment>
          { this.Data() }
          </React.Fragment>
        );
    }
}

export default Repose;







