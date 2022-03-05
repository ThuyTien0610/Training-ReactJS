import React from 'react';
import Item from './item';
import "../css/PageMain.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faBellConcierge, faBurger, faCar } from '@fortawesome/free-solid-svg-icons';
let a = [
    {
        id: 0,
        name: 'Thuc an',
        spend: [],
        icon: <FontAwesomeIcon icon={faBurger} />
    },
    {
        id: 1,
        name: "Mua sam",
        spend: [],
        icon: <FontAwesomeIcon icon={faBasketShopping} />
    },
    {
        id: 2,
        name: "Phuong tien",
        spend: [],
        icon: <FontAwesomeIcon icon={faCar} />
    },
    {
        id: 3,
        name: "Dich vu",
        spend: [],
        icon: <FontAwesomeIcon icon={faBellConcierge} />
    },
    {
        id: 4,
        name: "Khac",
        spend: [],
        icon: <FontAwesomeIcon icon={faBellConcierge} />
    },
    {
        id: 4,
        name: "Khac",
        spend: [],
        icon: <FontAwesomeIcon icon={faBellConcierge} />
    },
    {
        id: 4,
        name: "Khac",
        spend: [],
        icon: <FontAwesomeIcon icon={faBellConcierge} />
    },
    {
        id: 4,
        name: "Khac",
        spend: [],
        icon: <FontAwesomeIcon icon={faBellConcierge} />
    },
    {
        id: 4,
        name: "Khac",
        spend: [],
        icon: <FontAwesomeIcon icon={faBellConcierge} />
    }
]
function PageMain () { 
    return (
        <div className='container' >
            {a.map((ex) => {
                return(
                    <Item name = {ex.name} icon ={ex.icon}/>
                )
            })}
        </div>
    );
}

export default PageMain;