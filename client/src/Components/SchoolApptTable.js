import Button from 'react-bootstrap/Button';
import moment from 'moment';

function SchoolApptTable(app, deleteAppt){

    function handleDeleteAppt(){
        fetch(`/appointments/${app.app.id}`, {
            method: "DELETE"
        })
        deleteAppt(app)
    }


    return(
        <tr>
            <td>{app?.app?.client?.name}</td>
            <td>{moment(app?.app?.date_time).format('MM/DD/YYYY h:mm a')}</td>
            <td>{app?.app?.client?.school_address}</td>
            <td>
                <Button variant="danger" onClick={handleDeleteAppt}>Delete</Button>{' '}
            
            </td>
        </tr>
    )
}

export default SchoolApptTable