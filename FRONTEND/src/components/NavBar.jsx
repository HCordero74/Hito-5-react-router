import { Navbar, Container, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatNumber } from "../utils/format";

const MiNavbar = () => {
  // Simulación de variables
  const total = 25000;
  const token = false; // Cambia a 'true' para probar el otro estado

  // Función para formatear el dinero
  const formatNumber = (num) => {
    return num.toLocaleString('es-CL');
  };

  return (
    <Navbar bg="dark" variant="dark" className="px-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Pizzería Mamma Mia!</Navbar.Brand>
        
        <Nav className="me-auto">
          <Button as={Link} to="/" variant="outline-light" className="me-2">🏠 Home</Button>

          {/* Condicional ternario para los botones */}
          {token ? (
            <>
              <Button as={Link} to="/profile" variant="outline-light" className="me-2">🔓 Profile</Button>
              <Button variant="outline-light">🔒 Logout</Button>
            </>
          ) : (
            <>
              <Button as={Link} to="/login" variant="outline-light" className="me-2">🔐 Login</Button>
              <Button as={Link} to="/register" variant="outline-light">🔐 Register</Button>
            </>
          )}
        </Nav>

        {/* Botón Total siempre visible */}
        <Button as={Link} to="/cart" variant="outline-info">🛒 Total: ${formatNumber(total)}</Button>
      </Container>
    </Navbar>
  );
};

export default MiNavbar;