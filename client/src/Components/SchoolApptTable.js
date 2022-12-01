import Button from 'react-bootstrap/Button';

function SchoolApptTable(app){
    console.log(app.app)

    return(
        <tr>
            <td>{app?.app?.client?.name}</td>
            <td>{app?.app?.date_time}</td>
            <td>{app?.app?.client?.school_address}</td>
            <td>
                <Button variant="primary">Edit</Button>{' '}
                <Button variant="danger">Delete</Button>{' '}
            
            </td>
        </tr>
    )
}

export default SchoolApptTable