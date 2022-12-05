import Button from 'react-bootstrap/Button';

function SchoolApptTable(app, deleteAppt){

    function handleDeleteAppt(){
        fetch(`/appointments/${app.app.id}`, {
            method: "DELETE"
        })
        deleteAppt(app)
    }

    // console.log(app)

    return(
        <tr>
            <td>{app?.app?.client?.name}</td>
            <td>{app?.app?.date_time}</td>
            <td>{app?.app?.client?.school_address}</td>
            <td>
                <Button variant="danger" onClick={handleDeleteAppt}>Delete</Button>{' '}
            
            </td>
        </tr>
    )
}

export default SchoolApptTable