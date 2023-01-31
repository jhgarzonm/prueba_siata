import React from 'react'
import "./style.css"

function Footer() {
  return (
   <React.Fragment>
        <footer>
            <section className="footer top">
                <a className="location">Colombia</a>
            </section>
            <section className="footer bottom">
                <div className="about">
                    <ul className="about-bar">
                        <li className="itema">Sobre Google</li>
                        <li className="itema">Publicidad</li>
                        <li className="itema">Negocios</li>
                        <li className="itema">Cómo funciona la Búsqueda</li>
                    </ul>
                </div>
                <div className="preferences">
                    <ul className="preferences-bar">
                        <li className="itema">Privacidad</li>
                        <li className="itema">Condiciones</li>
                        <li className="itema">Preferencias</li>
                    </ul>
                </div>
            </section>
        </footer>
  </React.Fragment>
  )
}

export {Footer}