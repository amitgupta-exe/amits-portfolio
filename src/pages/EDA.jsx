import React from 'react'
import { cardinfo } from '../data/eda_cardinfo'
import { Link } from 'react-router-dom'

const EDA = () => {
    return (
        <div>
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
        </div>
    )
}

export default EDA