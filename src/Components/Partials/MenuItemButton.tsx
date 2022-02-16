import { Button } from 'react-bootstrap';

const MenuItemButton = (itemName : String, index : number) => {
    return <Button key={index} variant="secondary">{itemName}</Button>
}

export default MenuItemButton;