import React, { Component } from 'react';

export default class Category extends Component{

 constructor(){
	super();

	this.state= {
	 categories : [],
	}
   
 }

  ComponentDidMount(){
  //	var initialCat = [];

  	fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
  console.log('111');
   /* fetch('https://jsonplaceholder.typicode.com/posts/1')
           .then(response => {
           	return response.json();
           }).then(data =>{
	                   initialCat =   data.results.map((category) => {
	                      	return Category
	                  	});
             console.log(initialCat);                     

                   });
*/
   }

render(){
	var catclass = {
            color:'red'

	}

       return(
           <ul>
            <li style= {catclass}>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
            <li>Cat 4</li>
            <li>Cat 5</li>
             <li>Cat 1</li>
            <li>Cat 2</li>
            <li>Cat 3</li>
            <li>Cat 4</li>
            <li>Cat 5</li>
          </ul>

       )
 }


}