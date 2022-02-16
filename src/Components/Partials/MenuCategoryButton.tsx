
import { Button } from 'react-bootstrap';

const MenuCategoryButton = (categoryName : String, index : number) => {
    return <Button key={index} variant="secondary">{categoryName}</Button>
}

export default MenuCategoryButton;