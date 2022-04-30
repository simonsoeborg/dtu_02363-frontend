interface IProps {
  image: any;
}

const PlantLayout = (props: IProps) => {
  return <img className="PlantSize" src={props.image} alt="Plant Image" />;
};

export default PlantLayout;
