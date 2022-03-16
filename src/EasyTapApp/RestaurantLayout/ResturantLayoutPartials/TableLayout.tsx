import "../../../resources/Css/layout.css";

interface IProps {
  title: String;
  image: any;
}

const TableLayout = (props: IProps) => {
  return <img className="TableSize" src={props.image} />;
};

export default TableLayout;
