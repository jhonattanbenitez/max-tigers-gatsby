import React from 'react'

const Footer = () => {
    return (
        <div className="site-footer">
            <p className="text-center">Síguenos en nuestras redeces sociales</p>
            <div className="footer-social-links">
                <ul className="social-links-list">
                    < li > <a href="https://www.facebook.com/MaxTigersGG/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook" >
                        <i className="fab fa-facebook-f fa-2x" > </i>
                    </a >
                    </li>
                    < li > <a href="https://twitter.com/MaxTigersGG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="twitter" >
                        <i class="fab fa-twitter fa-2x"></i>
                    </a >
                          
                    </li>
                    < li > <a href="https://www.instagram.com/maxtigersgg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram"
                         >
                        <i class="fab fa-instagram fa-2x"></i>
                        
                    </a >
                    </li>
                    < li > <a href="https://www.twitch.tv/maxtigersgg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="twitch"
                         >
                        <i class="fab fa-twitch fa-2x"></i>
                        
                    </a >
                    </li>
                    
                    < li > <a href="https://www.linkedin.com/company/max-tigers-ec/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                         >
                        <i class="fab fa-linkedin fa-2x"></i>
                        
                    </a >
                    </li>
                </ul>
            </div>
            ©
            {
                new Date().getFullYear()
            }, Max {
                ` `
            }
            Tigers
        </div>
    )
}

export default Footer