import Img01 from '../assets/img_project_1.webp';
import Img02 from '../assets/img_project_2.webp';
import Img03 from '../assets/img_project_3.webp';
import Img04 from '../assets/img_project_4.webp';


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

  export default imagesProjects;

  export 
  
  
  const getIndex = function (id){
    return (imagesProjects.map(e => e.id).indexOf(id))
  }

