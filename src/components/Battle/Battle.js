import * as React from 'react'

import {FiUsers, FiTarget, FiGift} from 'react-icons/fi'
import './Battle.styles.css'

const Instructions = () => {
    return (
        <section className="instructions">
            <h2 className="instructions__header">Instructions</h2>
            <ol className="instructions__list">
                <li className="instruction-item">
                    <h3 className="instruction-item__header">Enter two Github users</h3>
                    <FiUsers className="instruction-item__icon" color="rgb(255, 191, 116)" />
                </li>
                <li className="instruction-item">
                    <h3 className="instruction-item__header">Battle</h3>
                    <FiTarget className="instruction-item__icon" color="#727272" />
                </li>
                <li className="instruction-item">
                    <h3 className="instruction-item__header">See the winner</h3>
                    <FiGift className="instruction-item__icon" color="rgb(255, 215, 0)" />
                </li>
            </ol>
        </section>
    )
}

export const Battle = () => {
    return (
        <React.Fragment>
            <Instructions />
        </React.Fragment>
    )
}