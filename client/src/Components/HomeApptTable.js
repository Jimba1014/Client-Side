import Button from 'react-bootstrap/Button';

function HomeApptTable({happ, deleteHAppt}){

    function handleDeleteAppt(){
        fetch(`/h_appointments/${happ.id}`, {
            method: "DELETE"
        })
        deleteHAppt(happ)

    }

    return(
        <tr>
            <td>{happ?.client?.name}</td>
            <td>{happ?.date_time}</td>
            <td>{happ?.client?.home_address}</td>
            <td>
                <Button variant="danger" onClick={handleDeleteAppt}>Delete</Button>{' '}
            </td>
        </tr>
    )
}

export default HomeApptTable