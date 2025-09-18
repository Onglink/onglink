import { Modal, Button } from 'react-bootstrap';

interface FileModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  fileUrls: [string, string];
  initialText: string;
}

export const FileModal = ({ 
  show, 
  onHide, 
  title, 
  fileUrls, 
  initialText 
}: FileModalProps) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <iframe 
              src={fileUrls[0]} 
              className="pdf-viewer" 
              title="PDF"
              style={{ width: '100%', height: '500px' }}
            ></iframe>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <iframe 
              src={fileUrls[1]} 
              className="pdf-viewer" 
              title="PDF"
              style={{ width: '100%', height: '500px' }}
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-4 mb-3"></div>
          <div className="col-6 col-md-4 mb-3">
            <textarea className="form-control" id="observacoes" name="observacoes" rows={4}>
              {initialText}
            </textarea>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};