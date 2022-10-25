import React from 'react';

const NavSearch = () => { 
    return (
        <div class="search-input">
            <div class="search-form">
                <input type="search" id="search" class="search" />
                <label class="search-label" for="search"></label>
                <button type="button" class="btn-search">Search</button>
            </div>
        </div>
        )
};

export default NavSearch