
import Link from 'next/link'


import { Container, Row, Col} from 'react-bootstrap'



const project = () => (
  <>

    <Container className="container-fluid">

      <Row className="pt-5">
        <Col className="my-auto">
            <Link  href="/"><a>Volver a proyectos</a></Link>
        </Col>
      </Row>
    </Container>

  </>
)

export default project