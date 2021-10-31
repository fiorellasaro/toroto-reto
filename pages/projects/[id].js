import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

const project = (props) => {
  const { projectProp } = props;
  console.log(projectProp)

  return (
    <>
      <Container className="container-fluid">
        <Row className="pt-5">
          <Col className="my-auto">
            <Link href="/">
              <a>Volver a proyectos</a>
            </Link>
          </Col>
        </Row>
        <p>{projectProp.name}</p>
      <p>{projectProp.id}</p>
      </Container>
    </>
  );
};

export default project;

export async function getServerSideProps({ params }) {
  const { id } = params;
  const data = await fetch(`https://fieldops-api.toroto.mx/api/projects/${id}`);
  const project = await data.json();
  const { data: projectData } = project;
  const projectProp = projectData[0]


  return {
    props: {
      projectProp,
    },
  };
}
