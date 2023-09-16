import React from "react";


const Navbar = ({filterItem, menuList}) =>{


    return (
        <>
        <nav className="navbar">
            <div className="logo-name">
                <span>FooDy WaY</span>
            </div>
            <div className="btn-group">
                {
                    menuList.map((curElem)=>{
                        return (
                            <button className="btn-item" 
                             onClick={()=> filterItem(curElem)} >
                            {curElem}</button>
                        )
                    })
                }
                
                {/* <button className="btn-item" 
                onClick={()=> filterItem('non-veg')}>NonVeg</button> */}
                {/* <button className="btn-item" 
                onClick={()=> setMenuData(Menu)}>All</button> */}
            </div>
        </nav>
        </>
    )
}

export default Navbar;