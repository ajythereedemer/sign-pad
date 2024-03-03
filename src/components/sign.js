import React, { useRef, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = () => {
  const signatureRef = useRef();
  const [penColor, setPenColor] = useState('black');
  const [penThickness, setPenThickness] = useState(2);

  const clearSignature = () => {
    signatureRef.current.clear();
  };

  const downloadSignature = () => {
    const dataURL = signatureRef.current.toDataURL();
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'signature.png';
    link.click();
  };

  const handleColorChange = (color) => {
    setPenColor(color);
  };

  const handleThicknessChange = (thickness) => {
    setPenThickness(Number(thickness));
  };

  return (
    <div className="container mt-5">
      <Row>
        <Col lg={8} md={12} xs={12} className="mb-3">
          <SignatureCanvas
            ref={signatureRef}
            penColor={penColor}
            canvasProps={{ height: 400, className: 'border signature-canvas' }}
            velocityFilterWeight={0.2}
            minWidth={penThickness}
          />
        </Col>
        <Col lg={4} md={12} xs={12} className="d-flex flex-column align-items-center">
          <Form.Group className="mb-3">
            <Form.Label>Pen Color:</Form.Label>
            <Form.Control as="select" value={penColor} onChange={(e) => handleColorChange(e.target.value)}>
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pen Thickness:</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="10"
              value={penThickness}
              onChange={(e) => handleThicknessChange(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" className="mb-2" onClick={clearSignature}>
            Clear
          </Button>
          <Button variant="success" onClick={downloadSignature}>
            Download
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SignaturePad;
