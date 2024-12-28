import React from 'react'
import { cardinfo } from '../data/aimldl_cardinfo'
import { Link } from 'react-router-dom'


const AIMLDL = () => {
    console.log(cardinfo[0]);

    return (
        <main>
        
            {cardinfo.map((card) => {
                return (
                    <Link target='_blank' to={card.url}>
                        <div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </Link>
                )
            })}
        </main>
    )
}

export default AIMLDL