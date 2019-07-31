import React from 'react'
import Facts from './Facts'
import { IoIosArrowBack } from "react-icons/io";

export default function FactsPage(props) {
    return (
        <div>
            <a href="/discover" className="back-icon-facts"><IoIosArrowBack style={{fontSize: '3em'}} /> <p className="back-facts">BACK</p></a>
            <Facts data={props.data}/>
        </div>
    )
}
