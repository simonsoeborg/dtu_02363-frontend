import { Container, Table } from "react-bootstrap"
import Loading from '../../Partials/Loading';
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { authentication } from '../../Stores/AuthenticationStore';

const AdminUser = () => {

    const navigate = useNavigate();

    const routeEditChange = (email : string) => {
        navigate(`/User/${email}`, {replace: false})
    };

    if(!authentication.RBACAuthFullList) {
        return (
            <Loading />
        )
    } else {
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {authentication.RBACAuthFullList.map((user, index) => (
                        <tr className="tableListItem" onClick={() => routeEditChange(user.email)} key={index}>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                            <td>{authentication.getRole(user.roleId)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
    }
}

export default observer(AdminUser);