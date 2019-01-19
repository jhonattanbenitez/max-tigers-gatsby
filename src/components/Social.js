import React from 'react';
const Social = (props) =>{
     
    return ( <div className="footer-social-links">
                <ul className="social-links-list">
                    < li > <a href={props.socialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook" >
                        <i className="fab fa-facebook-f fa-2x" > </i>
                    </a >
                    </li>
                    
                       
                    
                   
                </ul>
            </div>)

           

}
export default Social;