import { Container, Nav } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";
import CategoryModel from "../../Models/CategoryModel";

interface IProps {
  categories: CategoryModel[];
  setSelectedCategory: Dispatch<SetStateAction<String>>;
}

const DisplayCategories = (props: IProps) => {
  const handleOnClickEvent = (selectedCategory: string) => {
    props.setSelectedCategory(selectedCategory);
  };

  return (
    <Container>
      <Nav fill variant="tabs" defaultActiveKey="">
        {props.categories.map((category, index) => (
          <Nav.Item
            key={index}
            onClick={() => handleOnClickEvent(category.name)}
          >
            <Nav.Link eventKey={category.name}>{category.name}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
};

export default DisplayCategories;
