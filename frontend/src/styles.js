import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;


export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  
  .delete-button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
`;


export const SearchInput = styled.input`
  padding: 5px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Navbar = styled.nav`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  margin-bottom: 20px;
`;

export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    `
    font-weight: bold;
  `}
`;



export const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;




export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 5px;
  width: 100%;
`;

export const Select = styled.select`
  padding: 5px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;


export const TableContainer = styled.div`
  margin-top: 20px;
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  font-weight: bold;
`;


export const DeleteButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
`;


