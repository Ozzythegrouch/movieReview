import React from 'react';

const NavSearch = () => { 
    return (
        <div className="search-input">
            <div className="search-form">
                <input type="search" id="search" className="search" placeholder="search all" />
                <label className="search-label" htmlFor="search"></label>
                <button type="button" className="btn-search">Search</button>
            </div>
        </div>
        )
};

export default NavSearch