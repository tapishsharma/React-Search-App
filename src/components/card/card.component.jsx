import React from "react";
import './card.styles.css';

export const Card=(props)=>(
 
 <div className="card-container">
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&family=Nunito:ital,wght@0,200;1,200&family=Roboto+Slab:wght@200;300&display=swap" rel="stylesheet"></link>
  <img 
  src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} 
  alt='Oops' />

<h1>{props.monster.name}</h1>
<p>{props.monster.email}</p>
 </div>
);
