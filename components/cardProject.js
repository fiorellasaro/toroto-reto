import React from 'react'
import Image from 'next/image'
import Img01 from '../assets/img_project_1.webp';
import Img02 from '../assets/img_project_2.webp';
import Img03 from '../assets/img_project_3.webp';
import Img04 from '../assets/img_project_4.webp';

function cardProject(props) {

    const imagesProjects = [
        {
          id: 'P001',
          alt: "project 1 image",
          src: Img01
        },
        {
          id: 'P002',
          alt: "project 2 image",
          src: Img02
        },
        {
          id: 'P003',
          alt: "project 3 image",
          src: Img03
        },
        {
          id: 'P004',
          alt: "project 4 image",
          src: Img04
        }
      ]

    return (
        <div className="card-project-container" key={props.index}>
            <Image src={imagesProjects[props.index].src} alt={imagesProjects[props.index].alt} />
            <div className="card-tooltip-container">
                <p className="card-tooltip-location">{props.project.location}</p>
                <h2 className="card-tooltip-name">{props.project.name}</h2>
                <p className="card-tooltip-description">{props.project.description}</p>
            </div>   
        </div>
    )
}

export default cardProject
