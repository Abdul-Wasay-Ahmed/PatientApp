import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Heading,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  DeleteButton,
  SearchInput,
} from './styles';

const PatientsPage = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patients');
      setPatients(response.data);
    } catch (error) {
      console.error('Error retrieving patients:', error);
    }
  };

  const deletePatient = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/patients/${id}`);
      const updatedPatients = patients.filter((patient) => patient._id !== id);
      setPatients(updatedPatients);
    } catch (error) {
      console.error('Error deleting patient:', error);
    }
  };

  const filterPatients = () => {
    if (patients.length === 0) {
      return [];
    }
  
    return patients.filter((patient) =>
      patient.patientNumber && patient.patientNumber.includes(searchTerm)
    );
  };
  
  return (
    <Container>
      <Heading>View All Patients</Heading>
      <SearchInput
        type="text"
        placeholder="Search by Patient Number"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Age</TableHeader>
              <TableHeader>Gender</TableHeader>
              <TableHeader>Patient Number</TableHeader>
              <TableHeader>Phone Number</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterPatients().map((patient) => (
              <TableRow key={patient._id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.age}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell>{patient.patientNumber}</TableCell>
                <TableCell>{patient.phoneNumber}</TableCell>
                <TableCell>
                  <DeleteButton onClick={() => deletePatient(patient._id)}>
                    Delete
                  </DeleteButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PatientsPage;
