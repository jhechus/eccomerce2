import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
        <div className="top">
            <div className="item">
                <h1> Categories </h1>
                <span> Mujer </span>
                <span> Hombre </span>
                <span> Zapatos </span> 
                <span> Accesorios </span>
                <span> Nuevos Articulos </span>
            </div>
            <div className="item">
                <h1> Links </h1>
                <span> FAQ </span>
                <span> Pages </span>
                <span> Store </span>
            </div>
            <div className="item">
                <h1> Sobre nosotros</h1>
                <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur itaque et quo nulla ea officiis sed eaque id, adipisci voluptas fugit laudantium iste ab facere enim assumenda. Obcaecati, dolorum odit?</span>
            </div>
            <div className="item">
                <h1> Contacto </h1>
                <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, accusamus? Quo, officiis optio velit expedita consequuntur deleniti harum perferendis earum recusandae asperiores assumenda, quia sequi aliquam exercitationem vitae temporibus provident. </span>
            </div>
        </div>
        <div className="bottom">
            <div className="left">
                <span className="logo"> SESCOM </span>
                <span className="copyright"> © Copyright 2023. </span>
            </div>
        </div>
    </div>
  )
}

export default Footer