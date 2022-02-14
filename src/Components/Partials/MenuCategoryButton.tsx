
import { Button } from 'react-bootstrap';

const MenuCategory = (categoryName : String, index : number) => {
    return <Button key={index} variant="secondary">{categoryName}</Button>
}

export default MenuCategory;