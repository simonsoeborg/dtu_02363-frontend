import { Container, Table } from "react-bootstrap"
import Loading from '../../Partials/Loading';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { cs } from '../../Stores/CategoryStore';

const AdminItemList = () => {
    const navigate = useNavigate();

    const routeEditChange = (id : number) => {
        navigate(`/Category/${id}`, {replace: false})
    };

    if(!cs.Categories) {
        return <Loading />
    } else {
        return (
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        { cs.Categories.map((category, index) => (
                            <tr className="tableListItem" onClick={() => routeEditChange(category.id)} key={index}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default observer(AdminItemList);