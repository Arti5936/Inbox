   


   import React from 'react';
 
   const Card=(props)=>{
         return( <>
           
            <div className="card">
               <div className="cards">
                  
                   <img src={props.imgsrc} alt = "mypic" className="card_img" height="200px" width="380px"></img>
                   <div className="card_info">
                   <span className="card_category">
                       {props.title}
                   </span><br/>
                   <h3 className="card_title">{props.sname}</h3>
                    <a  href={props.link}>
                       <button>clickme</button>
                    </a>

                   
               </div>
               </div>
             
                </div>

        </>
)   
   }
     
   export default Card;