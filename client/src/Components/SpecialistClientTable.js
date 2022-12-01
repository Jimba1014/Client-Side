
function SpecialistClientTable(client){
    return(
        <tr>
            <td>{client.client.name}</td>
            <td>{client.client.rbt.first_name} {client.client.rbt.last_name}</td>
            <td>{client.client.doctor.name}</td>
        </tr>
    )
}

export default SpecialistClientTable