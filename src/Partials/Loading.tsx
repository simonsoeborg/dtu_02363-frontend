import { Spinner, Row } from "react-bootstrap"

const ComponentLoading = () => {

  return (
    <Row className="justify-content-center" style={{ textAlign: "center", margin: "10rem"}}>
      <h1>
        <Spinner animation="border" variant="secondary" />
        Loading...
      </h1>
    </Row>
  )
}

export default ComponentLoading;