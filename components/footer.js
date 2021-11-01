import React from 'react'
import Image from 'next/image'
import LogoName from '../assets/logo.svg'
import rsIcons from '../shared/_socialMedia'

function footer() {
    return (
        <div className="footer-container">
            <div className="footer-container-rs">
                {
                    rsIcons.map((icon, index) =>{
                        return (
                            <a href={icon.href} key={index}>
                            <Image  src={icon.src}  alt={icon.alt} />
                            </a> 
                        )
                    })
                }

            </div>
            <Image
                src={LogoName} // Route of the image file
                height={56} // Desired size with correct aspect ratio
                width={89} // Desired size with correct aspect ratio
                alt="Toroto logo"
            />
            
        </div>
    )
}

export default footer
