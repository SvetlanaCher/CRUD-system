import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

export const UserList = () => {
    const {users, removeUser} = useContext(GlobalContext);
    return (
        <ListGroup className='mt-4'>
        {users.length > 0 ? (
            <>
                {users.map(user => (
                    <ListGroupItem className="d-flex  justify-content-between" key={user.id}>
                        <strong>{user.name}</strong>
                        <div className='ml-auto'>
                            <Link className="btn btn-warning mr-1" to={`/edit/${user.id}`}>Изменить</Link>
                            <Button onClick={() => removeUser(user.id)} color="danger">Удалить</Button>
                        </div>                
                    </ListGroupItem>
                ))} 
            </>
        ) : (
            <h4 className="text-center">Список пуст</h4>
        )}
        </ListGroup>  
    )
}
