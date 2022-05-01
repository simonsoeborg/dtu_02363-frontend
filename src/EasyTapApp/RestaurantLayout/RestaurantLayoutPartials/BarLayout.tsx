interface IProps {
  image: any;
}

const BarLayout = (props: IProps) => {
  return <img className="BarSize" src={props.image} alt="Bar Image"/>;
};

export default BarLayout;
