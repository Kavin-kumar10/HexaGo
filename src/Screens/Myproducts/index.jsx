import React from 'react'
import "./Myproducts.scss"
import Header from '../../Components/Header'

const Myproducts = ({setPop}) =>{
    return(
        <div className="Myproducts">
            <Header setPop={setPop}/>
        </div>
    )
}

export default Myproducts