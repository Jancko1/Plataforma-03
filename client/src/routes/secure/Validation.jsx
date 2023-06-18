import React from 'react'
import { useSelector } from 'react-redux'
import CreatePost from '../../Components/CreatePost';

const Validation = ({children}) => {
    const user = useSelector((state) => state.user);

    if (user.rol === 'admin') {
        {console.log("es admin")}
        return <div>
            <CreatePost />
        </div>
    }else{
        return (
            <div>
                <h2>Hola a todos</h2>
            </div>
        )
    }
  return children
}

export default Validation
