import { Container, Nav } from "react-bootstrap";
import { Dispatch, SetStateAction } from "react";
import { FaCocktail, FaMugHot, FaCheese, FaHamburger, FaStar, FaConciergeBell, FaWineGlass } from "react-icons/fa"
import CategoryModel from "../../Models/CategoryModel";

interface IProps {
  categories: CategoryModel[],
  setSelectedCategory: Dispatch<SetStateAction<String>>
}

const DisplayCategories = (props: IProps) => {
  const handleOnClickEvent = (selectedCategory: string) => {
    props.setSelectedCategory(selectedCategory);
  };

  function setCategoryIcon(categoryName: string){
    switch(categoryName){
      /*
        Names of categories 0-6
        Starters, Main dishes, Desserts, Specials, Soft drinks & Beers, Cocktails, Warm drinks
        Instead of hard coding the names to the categories, we collect them from the property and set the desired icons.
      */
      case props.categories[0].name.toString():
        //Starters
        return <FaConciergeBell />
      case props.categories[1].name.toString():
        //Main dishes
        return <FaHamburger />
      case props.categories[2].name.toString():
        //Desserts
        return <FaCheese />
      case props.categories[3].name.toString():
        //Specials
        return <FaStar />
      case props.categories[4].name.toString():
        //Soft drinks & Beers
        return <FaWineGlass />
      case props.categories[5].name.toString():
        //Cocktails
        return <FaCocktail />
      case props.categories[6].name.toString():
        //Warm drinks
        return <FaMugHot />
    }
  }

  return (
    <Container>
      <Nav fill variant="tabs" defaultActiveKey="">
        {props.categories.map((category, index) => (
          <Nav.Item
            key={index}
            onClick={() => handleOnClickEvent(category.name)}
          >
            <Nav.Link className="nav-link unselectable" eventKey={category.name}>{category.name} {setCategoryIcon(category.name)} </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Container>
  );
};

export default DisplayCategories;
