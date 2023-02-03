import React from 'react'
import "./styles.css"

function Footer() {
  return (
   <React.Fragment>
        <footer>
            <section className="footer top">
                <a className="location">America</a>
            </section>
            <section className="footer bottom">
                <div className="about">
                    <ul className="about-bar">
                        <li className="itema">jhgarzonm</li>
                        <li className="itema">Web Development</li>
                        
                   </ul>
                </div>
                <div className="preferences">
                    <ul className="preferences-bar">
                        <li className="itema">Cultural Heritage</li>
                        <li className="itema">Web App desarrollada con React</li>
                        
                    </ul>
                </div>
            </section>
        </footer>
  </React.Fragment>
  )
}

export {Footer}