import React from "react";

const Card = ({menuData}) =>{

    return (
        <>
        <section className="main-card--cointainer">
         {
            menuData.map((curElem) => {
                return (
                    
                    <div className="card-container" key={curElem.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h2>{curElem.itemName}</h2>
                                    <div className="card-author subtle">{curElem.category}</div>
                                    <span className="card-discription subtle">
                                        {curElem.description}
                                    </span>
                                    <div>{curElem.price}</div>
                                </div>
            
                            </div>
                        
                        </div>
                    
                )
                
            })
         }
         </section>
        </>
    )
}
export default Card;
