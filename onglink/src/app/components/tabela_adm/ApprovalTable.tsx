import { ApprovalTableRow } from './ApprovalTableRow';

interface ApprovalTableProps {
  data: Array<{
    id: string;
    requestType: string;
    orgName: string;
    responsibleName: string;
    requestDate: string;
    status: string;
    obs: string;
    approvalResponsible?: string;
  }>;
  onViewImages: (type: 'images1' | 'images2') => void;
  onViewFiles: (type: 'files1' | 'files2') => void;
  onOpenApproval: () => void;
}

export const ApprovalTable = ({ data, onViewImages, onViewFiles, onOpenApproval }: ApprovalTableProps) => {
  return (
    <div className="col-12" id="div_cont_table">
      <div id="div_tabela_aprovacao">
        <h4 id="tr_titulo_h4" className="justify-self-center">Aprovação de contas e Denúncias de publicações</h4>
        <table className="col-12 border-2 border-gray-600 rounded" id="tabela_aprovacao">
          <thead className="col-12 border-2 border-gray-600 rounded">
            <tr className="border-2 border-gray-600 rounded" id="tr_conteudo_tabela_aprovacao">
              <th className="border-2 border-gray-600 rounded m-1 p-1">Nº da Solicitação</th>
              <th className="border-2 border-gray-600 rounded m-1 p-1">Tipo de Solicitação</th>
              <th className="border-2 border-gray-600 rounded m-1 p-1">Nome da ONG/Empresa</th>
              <th className="border-2 border-gray-600 rounded m-1 p-1">Nome do resp. da ONG/Empresa</th>
              <th className="border-2 border-gray-600 rounded m-1 p-1">Data da Solicitação</th>
              <th className="border-2 border-gray-600 rounded m-1 p-1">Status</th>
              <th className="border-2 border-gray-600 rounded m-1 p-1">Obs</th>
              <th className="border-2 border-gray-600 rounded m-1 p-1">Visualizar</th>
              <th className="border-2 border-gray-600 rounded m-1 p-1">Aprovação</th>
              <th className="border-2 border-gray-600 rounded m-1 p-1">Nome resp. Aprovação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <ApprovalTableRow
                key={item.id}
                data={item}
                onViewImages={() => onViewImages(item.id === '0112' ? 'images1' : 'images2')}
                onViewFiles={() => onViewFiles(item.id === '0111' ? 'files1' : 'files2')}
                onOpenApproval={onOpenApproval}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};