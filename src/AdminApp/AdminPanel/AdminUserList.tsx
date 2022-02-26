import { Container, Table } from "react-bootstrap"
import { urs } from "../../Stores/UserRolesStore";
import Loading from '../../Partials/Loading';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const AdminUser = () => {

    const navigate = useNavigate();

    const routeEditChange = (id : number) => {
        navigate(`/User/${id}`, {replace: false})
    };

    if(!urs.Users) {
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
                    {urs.Users.map((user, index) => (
                        <tr className="tableListItem" onClick={() => routeEditChange(user.id)} key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.roles}</td>
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