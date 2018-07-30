import React, { Component } from 'react';

export default class Prodcts extends Component{

   render(){
         return(

               <div className="ProductsBox">
                             <div className="col-3 menu">
  									<span className="col-12">image</span>
  									<span className="col-12">{this.props.name}</span>
  									<span className="col-12">Price</span>
                             </div>

                             <div className="col-3 menu">
  									<span className="col-12">image</span>
  									<span className="col-12">Name</span>
  									<span className="col-12">Price</span>
                             </div>


                             <div className="col-3 menu">
  									<span className="col-12">image</span>
  									<span className="col-12">Name</span>
  									<span className="col-12">Price</span>
                             </div>

                             <div className="col-3 menu">
  									<span className="col-12">image</span>
  									<span className="col-12">Name</span>
  									<span className="col-12">Price</span>
                             </div>

                           
               </div>
 
         	)

   }

}