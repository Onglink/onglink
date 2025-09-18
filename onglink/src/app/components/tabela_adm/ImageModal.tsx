import { Modal, Button } from 'react-bootstrap';

interface ImageModalProps {
  show: boolean;
  onHide: () => void;
  title: string;
  imageUrls: string[];
  initialText: string;
  onZoomImage: (imgSrc: string) => void;
}

export const ImageModal = ({ 
  show, 
  onHide, 
  title, 
  imageUrls, 
  initialText,
  onZoomImage 
}: ImageModalProps) => {
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          {imageUrls.map((url, index) => (
            <div className="col-6 col-md-4 mb-3" key={index}>
              <img 
                src={url} 
                className="img-fluid rounded zoomable" 
                alt={`Imagem ${index + 1}`}
                onClick={() => onZoomImage(url)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          ))}
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