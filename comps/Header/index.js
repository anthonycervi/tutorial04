import React from 'react';
import './header.css';

const Header = ({fontsize, color, onMouseOver}) => <div className="header_box">
    <h1 className="header">Header</h1>
</div>

function MouseOver(){
    alert("Mouse is over")
}

Header.defaultProps = {
    fontsize:12,
    color:"#000",
    onMouseOver:MouseOver
}

export default Header;