import "../../../resources/Css/ResturantLayout.css";

interface IProps {
  image: any;
}

const BarLayout = (props: IProps) => {
  return <img className="BarSize" src={props.image} />;
};

export default BarLayout;
