import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import ClientsForm from './clientsform'; 
import { CIcon } from '@coreui/icons-react'; 
import { cilPen, cilTrash } from '@coreui/icons'; // Importa iconos específicos

const Clients = () => {
  const [showForm, setShowForm] = useState(false);
  const [editClient, setEditClient] = useState(null);

  // Datos de clientes de ejemplo 
  const clients = [
    {
      id: 1,
      firstName: 'Juan',
      middleName: 'Carlos',
      lastName: 'Pérez',
      email: 'juan@example.com',
      dateOfBirth: '1990-01-01',
      phoneNumber: '123-456-7890',
      numberPersons: 3,
      nationality: 'Mexican'
    },
    {
      id: 2,
      firstName: 'María',
      middleName: 'Luisa',
      lastName: 'García',
      email: 'maria@example.com',
      dateOfBirth: '1985-05-15',
      phoneNumber: '098-765-4321',
      numberPersons: 2,
      nationality: 'Spanish'
    },
    {
      id: 3,
      firstName: 'Carlos',
      middleName: 'Alberto',
      lastName: 'López',
      email: 'carlos@example.com',
      dateOfBirth: '1992-12-12',
      phoneNumber: '555-123-4567',
      numberPersons: 4,
      nationality: 'Colombian'
    },
  ];

  // Abrir el formulario para agregar un cliente
  const handleOpenForm = () => {
    setEditClient(null); // No hay cliente editado, es un nuevo cliente
    setShowForm(true);    // Mostrar el formulario
  };

  // Cerrar el formulario
  const handleCloseForm = () => {
    setShowForm(false);    // Ocultar el formulario
  };

  return (
    <div>
      <h2>Client Management</h2>
      <Button variant="dark" onClick={handleOpenForm}>Add Customer</Button>
      
      {/* Contenedor responsive para la tabla */}
      <div className="table-responsive mt-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Date of Birth</th>
              <th>Phone Number</th>
              <th>Number of Persons</th>
              <th>Nationality</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.firstName}</td>
                <td>{client.middleName}</td>
                <td>{client.lastName}</td>
                <td>{client.email}</td>
                <td>{client.dateOfBirth}</td>
                <td>{client.phoneNumber}</td>
                <td>{client.numberPersons}</td>
                <td>{client.nationality}</td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button 
                      variant="link" 
                      onClick={() => {
                        setEditClient(client); // Establecer el cliente para editar
                        setShowForm(true);       // Abrir el formulario
                      }} 
                      title="Edit"
                    >
                      <CIcon icon={cilPen} style={{ fontSize: '1.5rem', color: 'orange' }} />
                    </Button>
                    <Button 
                      variant="link" 
                      onClick={() => alert(`Delete ${client.firstName} ${client.lastName}`)} 
                      title="Delete"
                    >
                      <CIcon icon={cilTrash} style={{ fontSize: '1.5rem', color: 'red' }} />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Formulario de Cliente */}
      <ClientsForm 
        show={showForm}
        handleClose={handleCloseForm}
        client={editClient}
      />
    </div>
  );
};

export default Clients;
