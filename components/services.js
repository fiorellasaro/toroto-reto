import React from 'react'
import ServiceIcon from '../assets/service_icon.svg'
import Image from 'next/image'

function services(props) {
    return (
        <div className="service-container">
            <Image src={ServiceIcon} alt="service icon"></Image>
            <p>{props.service}</p>
        </div>
    )
}

export default services
