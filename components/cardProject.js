import React from 'react'
import Image from 'next/image'
import imagesProjects from '../shared/_imageProjects';
import {Button} from 'react-bootstrap'
import Link from 'next/link'
import Services from '../components/services'


function cardProject(props) {


    return (
        <div className="card-project-container shadow mb-4" key={props.index}>
            <Image src={imagesProjects[props.index].src} alt={imagesProjects[props.index].alt} />
            <div className="card-project-info">
                <p className="card-project-location">{props.project.location}</p>
                <h2 className="card-project-name">{props.project.name}</h2>
                <p className="card-project-description">{props.project.description}</p>
                <div className="card-project-services">
                    {
                        props.project.services.map(service =>{
                            return (
                                <Services service={service} key={service}/>
                            )
                        })
                    }
                </div>

                <Link href={`/projects/${props.project.id}`}>
                    <Button type="button" className="btn btn-outline-dark btn btn-info">VER PROYECTO COMPLETO</Button> 
                </Link>
            </div>  


        </div>
    )
}

export default cardProject
