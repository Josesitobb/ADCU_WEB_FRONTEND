import React from 'react';
import Navbar_Admin from '../../components/Navbar_Admin'; 
import Footer from '../../components/Footer';
import Pdf_Admin from '../../components/Pdf_Admin';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Pdf(props) {
  return (
    <div>

    <div style={{marginTop:"10%",marginLeft:"30%"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.titulo}</Card.Title>
       
        {props.componentes}
      
      </Card.Body>
    </Card>
    </div>
{/* 
   
    <Pdf_Admin Link=  "/assets/Administración_de_cuentas_de_cobro.pdf" />  */}
      {/* <Footer /> */}
    </div>
  )
}
