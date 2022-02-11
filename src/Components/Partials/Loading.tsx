import { Spinner } from "react-bootstrap"

const ComponentLoading = () => {

    return (
        <h1>
          <Spinner animation="border" variant="secondary" />
          Loading...
        </h1>
      )
}

export default ComponentLoading;