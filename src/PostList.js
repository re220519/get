import React, {Component} from 'react';
 import axios from 'axios';

class PostList extends Component{
constructor(props){
    super(props)
    this.state={
        data: []
    }
}
    componentDidMount(){
        axios.get("http://localhost:3001/priority")
        .then(response=>{
          this.setState({data:response.data
        })  
            console.log(response.data)
        })
    }
    render() {
        const { data }= this.state
        return(
            <div>
            <h1> post </h1>
        {
            data.map(post=> <div key={post.id}>{post.title}</div>)
            }
            </div>
        )
    }
        

}
export default PostList;