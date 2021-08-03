import React from 'react'
import searchIcon from "../../assets/images/search-icon.png"
import './searchBox.css'
export default function Searchbox() {
    return (
        <div className="searchContainer">
            <div className="wrapper">

                <span className="searchIcon">
                    <img src={searchIcon} alt="search" />


                </span>

                <input className="searchInput" placeholder="Search..." />


            </div>
        </div>


    )
}
