import React from 'react'
import './emblemaStyle.css'

interface EmblemasProps {
    image: string
    name: string
}

const EmblemaComponent: React.FC<EmblemasProps> = ({ image, name }) => {

    return (
        <div className="emblemasFull ">
            <img className="emblemas" src={image} alt="" />
            <h2 className="emblemaName w-full h-1/5">{name}</h2>
        </div>
    )
}

export default EmblemaComponent