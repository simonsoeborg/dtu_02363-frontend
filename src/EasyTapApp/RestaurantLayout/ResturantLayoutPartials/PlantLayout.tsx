import "../../../resources/Css/layout.css";

interface IProps {
  image: any;
}

const PlantLayout = (props: IProps) => {
  return <img className="PlantSize" src={props.image} />;
};

export default PlantLayout;
