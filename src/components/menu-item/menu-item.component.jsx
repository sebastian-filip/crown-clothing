import React from "react";

import "./menu-item.styles.scss"

// destructuring the title value from props {title} = props.title
const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        <div className='background-image'
             style={
                 {
                     backgroundImage: `url(${imageUrl})`
                 }
             }
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;