import React from 'react'
import Photo from "./profile/photo"
import Adress from './profile/Adress'
import FullName from './profile/FullName'
export default function  Main(){
    return(
        <div className="Main">
            <Photo />
            <Adress />
            <FullName />
            </div>
    )

}