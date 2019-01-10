import React,{Component} from 'react';
import Card from './Card';
import {robots} from './robots';

const CardList=({robots}) =>{
    
        const cardcomponent=robots.map((user,i)=>{
            return(<Card id={user.id} name={user.name} email={user.email} />);
        })
        return(
            <div>
            {cardcomponent}
            </div>
        );
    }
export default CardList;