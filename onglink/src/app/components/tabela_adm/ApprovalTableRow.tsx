import { Button } from 'react-bootstrap';
import { ICadastro } from "@/src/app/ADM_aprovacao/ICadastro";

interface ApprovalTableRowProps {
  data: {
    id: string;
    requestType: string;
    orgName: string;
    responsibleName: string;
    requestDate: string;
    status: string;
    obs: string;
    approvalResponsible?: string;
  };
  onViewImages: () => void;
  onViewFiles: () => void;
  onOpenApproval: () => void;
}

export const ApprovalTableRow = ({
  data,
  onViewImages,
  onViewFiles,
  onOpenApproval
}: ApprovalTableRowProps) => {
  return (
    <tr className="border-2 border-gray-600 rounded m-1">
      <td className="border-2 border-gray-600 rounded m-1 p-1">{data.id}</td>
      <td className="border-2 border-gray-600 rounded m-1 p-1">{data.requestType}</td>
      <td className="border-2 border-gray-600 rounded m-1 p-1">{data.orgName}</td>
      <td className="border-2 border-gray-600 rounded m-1 p-1">{data.responsibleName}</td>
      <td className="border-2 border-gray-600 rounded m-1 p-1">{data.requestDate}</td>
      <td className="border-2 border-gray-600 rounded m-1 p-1">{data.status}</td>
      <td className="border-2 border-gray-600 rounded m-1 p-1">{data.obs}</td>
      <td className="border-2 border-gray-600 rounded m-1 p-1">
        <Button 
          variant="primary" 
          onClick={data.requestType === 'Criar Conta' ? onViewFiles : onViewImages}
        >
          Visualizar
        </Button>
      </td>
      <td className="border-2 border-gray-600 rounded m-1 p-1">
        <Button variant="secondary" onClick={onOpenApproval}>
          Aprovação
        </Button>
      </td>
      <td className="border-2 border-gray-600 rounded m-1 p-1">{data.approvalResponsible || ''}</td>
    </tr>
  );
};