import Button from 'react-bootstrap/Button';
import moment from 'moment';

function HomeApptTable({happ, deleteHAppt}){

    function handleDeleteAppt(){
        fetch(`/h_appointments/${happ.id}`, {
            method: "DELETE"
        })
        deleteHAppt(happ)

    }

    // console.log(happ)

    return(
        <tr>
            <td>{happ?.client?.name}</td>
            <td>{moment(happ?.date_time).format('MM/DD/YYYY h:mm a')}</td>
            <td>{happ?.client?.home_address}</td>
            <td>
                <Button variant="danger" onClick={handleDeleteAppt}>Delete</Button>{' '}
            </td>
        </tr>
    )
}

export default HomeApptTable