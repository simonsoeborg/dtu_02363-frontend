import "../../../resources/Css/layout.css";

interface IProps {
  title: String;
  image: any;
}

const PlantLayout = (props: IProps) => {
  return <img className="PlantSize" src={props.image} />;
};

export default PlantLayout;
