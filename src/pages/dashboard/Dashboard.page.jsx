import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from '../../components/ticket-table/TicketTable.comp';
import Tiket from '../../components/data/dummy-tickets.json'
function Dashboard() {
  return (
    <>
      <Container>
        <Row className='text-center mt-5 mb-2'>
            <Col>
                <Button variant='info' style={{'font-size':'1.2rem',padding:'10px 30px'}}>  Add New Tikets</Button>
            </Col>
        </Row>

        <Row className='text-center  mb-2'>
            <Col>
               <div style={{'font-size':'1.5rem',}}>Total Tikets:50</div>
               <div style={{'font-size':'1.5rem',}}>Pending Tikets:16</div>

            </Col>
        </Row>
        <Row>
        <Col className="mt-2">Recently Added tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable  Tiket={Tiket}/>
         
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Dashboard
