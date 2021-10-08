import * as React from 'react'
import './Frame.styles.css'

export const Frame = ({className, ...delegated}) => {
    return <div {...delegated} className={`frame ${className}`} />
}