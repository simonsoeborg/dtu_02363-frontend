import { Container, Table } from "react-bootstrap"
import { us } from "../../Stores/UserStore";
import Loading from '../Partials/Loading';
import { observer } from "mobx-react-lite";

const AdminUser = () => {
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
                        <tr key={index}>
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