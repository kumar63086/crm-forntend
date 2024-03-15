import React from "react";
import { Table } from "react-bootstrap";

function TicketTable({ Tiket }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Subjects</th>
            <th>Status</th>
            <th>Opened Date</th>
          </tr>
        </thead>
        <tbody>
          {Tiket.length ?(
            Tiket.map((row) => (
              <tr key={row.id}>
                <th>{row.id}</th>
                <th>{row.subject}</th>

                <th>{row.status}</th>
                <th>{row.addedAt}</th>
              </tr>
            ))):(
                <tr>
             
                <th>No Tiket show</th>
              </tr> 
            )}
        </tbody>
      </Table>
    </>
  );
}

export default TicketTable;
