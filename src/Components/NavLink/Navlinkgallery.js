import './Navlinkgallery.css';
import Nav from 'react-bootstrap/Nav';

const Navlinkgallery = () => {

  return (
    <>
      <Nav defaultActiveKey="/home" as="ul" className='menu'>
        <Nav.Item as="li">
          <Nav.Link className='Link'eventKey="link-0">All</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className='Link' eventKey="link-1">Brakes</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className='Link' eventKey="link-2">Wheels</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className='Link' eventKey="link-3">Suspension</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link className='Link' eventKey="link-4">Steering</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Navlinkgallery
