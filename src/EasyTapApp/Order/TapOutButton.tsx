import { Button } from "react-bootstrap";
import { FaHandPointer } from "react-icons/fa"
import "../../resources/Css/OrderLayout.css";

const TapOutButton = () => {
  return (
    <Button className="btn icon-btn azm-social button-tapOut"
      variant="outline-primary"
    >
      <i className="fa"><FaHandPointer></FaHandPointer></i>
      Tap Out
    </Button>
  );
};

export default TapOutButton;
