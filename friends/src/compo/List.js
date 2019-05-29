import React from 'react';
import axios from 'axios';
import Indi from './Indi';
import Add from './Add';

class List extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items:[]
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ items: res.data }))

  }

render(){
  return(
      <div>
        {(this.state.items.map(i=>{
        return   <Indi pass={i} key={i.id} /> 
        }))}
        <Add />
      </div>
  )
}



}

export default List ;