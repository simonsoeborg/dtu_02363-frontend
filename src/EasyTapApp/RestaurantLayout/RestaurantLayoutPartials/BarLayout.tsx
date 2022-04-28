import "../../../resources/Css/RestaurantLayout.css";

interface IProps {
  image: any;
}

const BarLayout = (props: IProps) => {
  return <img className="BarSize" src={props.image} />;
};

export default BarLayout;
