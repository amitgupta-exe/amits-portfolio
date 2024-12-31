import React from 'react'
import { cardinfo } from '../data/eda_cardinfo'
import { Link } from 'react-router-dom'

const EDA = () => {
    return (
        <main>
            <div className="notebooks-container">

                <div className="notebooks">
                    {cardinfo.map((card) => {
                        return (
                            <Link className="custom-link" target='_blank' to={card.url}>
                                <div className="notebook-card">
                                    <div>
                                        <h3>{card.title}</h3>
                                        <p>{card.description}</p>
                                    </div>
                                    <div className='notebook-technologies'>
                         
                                            {card.technologies.map((i) => {
                                                return (
                                                    <p>
                                                        {i}
                                                    </p>
                                                )
                                            })}

                                    </div>

                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default EDA