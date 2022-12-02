import Button from 'react-bootstrap/Button';

function HomeApptTable(happ){
    return(
        <tr>
            <td>{happ?.happ?.client?.name}</td>
            <td>{happ?.happ?.date_time}</td>
            <td>{happ?.happ?.client?.home_address}</td>
            <td>
                <Button variant="danger">Delete</Button>{' '}
            </td>
        </tr>
    )
}

export default HomeApptTable