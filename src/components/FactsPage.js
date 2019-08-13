import React from 'react'
import Facts from './Facts'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom'

export default function FactsPage(props) {
    return (
        <div>
            <Link to={{pathname: '/discover'}} className="back-icon-facts"><IoIosArrowBack style={{fontSize: '3em'}} /> <p className="back-facts">BACK</p></Link>
            <Facts data={props.data}/>
        </div>
    )
}
