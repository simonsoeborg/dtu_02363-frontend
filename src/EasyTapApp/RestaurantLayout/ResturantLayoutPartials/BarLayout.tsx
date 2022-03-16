import "../../../resources/Css/layout.css";

interface IProps {
  title: String;
  image: any;
}

const BarLayout = (props: IProps) => {
  return <img className="BarSize" src={props.image} />;
};

export default BarLayout;
