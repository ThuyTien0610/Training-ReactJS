import React from 'react';
import "../css/item.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';

function Item (props) {

    return (
        <div className='form'>
            
            <label className='labelItem'>{props.name}</label>
            <div className='iconItem'>
                {props.icon}
            </div>
            <label className='total'>500,000</label>
            <div className='inputItem'>
                <input className='input' type="text"/>
                <button className='btn'>
                    <FontAwesomeIcon icon={faSquareCheck} color="white"/>
                </button>  
            </div>
        
            
        </div>
    );
}

export default Item;