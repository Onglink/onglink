import { Modal, Button } from 'react-bootstrap';

interface ApprovalModalProps {
  show: boolean;
  onHide: () => void;
  onApprove: () => void;
  onReject: () => void;
}

export const ApprovalModal = ({ 
  show, 
  onHide, 
  onApprove, 
  onReject 
}: ApprovalModalProps) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Aprovação</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <p></p>
            <p></p>
            <Button variant="success" id="btn_modal_aprovar" onClick={onApprove}>
              Aprovado
            </Button>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <p></p>
            <p></p>
            <Button variant="danger" id="btn_modal_reprovar" onClick={onReject}>
              Negado
            </Button>
          </div>
          <div className="col-8 col-md-12 mb-3">
            <label htmlFor="obs_modal_aprovacao">Observações</label>
            <p></p>
            <textarea 
              className="form-control"
              name="obs_modal_aprovacao" 
              id="obs_modal_aprovacao"
              rows={4}
            ></textarea>
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