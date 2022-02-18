import { Container, Table } from "react-bootstrap"
import { us } from "../../Stores/UserStore";
import Loading from './Loading';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const AdminUser = () => {

    const navigate = useNavigate();

    const routeEditChange = (id : number) => {
        navigate(`/User/${id}`, {replace: false})
    };

    if(!us.Users) {
        return (
            <Loading />
        )
    } else {
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {us.Users.map((user, index) => (
                        <tr className="tableListItem" onClick={() => routeEditChange(user.id)} key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>{user.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
    }
}

export default observer(AdminUser);