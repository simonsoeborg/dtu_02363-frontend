import { Container, Table } from "react-bootstrap"
import Loading from '../../Partials/Loading';
import { observer } from "mobx-react-lite";
import { cs } from '../../Stores/CategoryStore';

const AdminCategoryList = () => {
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
                            <tr className="tableListItem" key={index}>
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

export default observer(AdminCategoryList);