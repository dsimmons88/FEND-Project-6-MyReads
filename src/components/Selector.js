import React from 'react'
import { Link } from 'react-router-dom';


import Book from './Book';




{
    getInitialState:function(){
      return {selectValue:'Radish'};
  },
    handleChange:function(e){
    this.setState({selectValue:e.target.value});
  },





class Selector extends React.Component {
  constructor(props) {
  super(props);
  this.state ={
      getInitialState:function(){
        return {selectValue:'currentlyReading'};
    },
  let handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({postType: event.target.value});
}

render() {
  return (

       <div className="book-shelf-changer">
         <select className="u-full-width" value={this.state.postType}
          onChange={this.handleChange}>
           <option value="move" disabled>Move to...</option>
           <option value="currentlyReading">Currently Reading</option>
           <option value="wantToRead">Want to Read</option>
           <option value="read">Read</option>
           <option value="none">None</option>

       </div>
      </select>

   );
  }
}

export default Selector;

// ReactDOM.render(
//  <Selector />,/
  //document.getElementById('root')
 //);
