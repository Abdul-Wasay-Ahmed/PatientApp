import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Heading,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  Button,
} from './styles';

const AddPatientPage = () => {
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: '',
    patientNumber: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/patients',
        newPatient
      );
      console.log('New patient added:', response.data);
      setNewPatient({
        name: '',
        age: '',
        gender: '',
        patientNumber: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Error creating patient:', error);
    }
  };

  return (
    <Container>
      <Heading>Add New Patient</Heading>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={newPatient.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Age</Label>
          <Input
            type="number"
            name="age"
            value={newPatient.age}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Gender</Label>
          <Select name="gender" value={newPatient.gender} onChange={handleChange}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Patient Number</Label>
          <Input
            type="text"
            name="patientNumber"
            value={newPatient.patientNumber}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            type="text"
            name="phoneNumber"
            value={newPatient.phoneNumber}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type="submit">Add Patient</Button>
      </Form>
    </Container>
  );
};

export default AddPatientPage;
