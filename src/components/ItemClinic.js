import { Link } from "react-router-dom";

export default function ItemClinic ({ clinic }){

    return ( 

        <div className="clinic-item">
        <div className="clinic-logo-background" style={{ backgroundImage: `url(${clinic.logo})` }}></div>
        <div className="clinic-info">
          <h3>{clinic.nome}</h3>
          <p>{clinic.descricao}</p>
          <div className="clinic-services">
            <ul>
            {clinic.servicos.map(servico => <li key={servico}>{servico}</li>)}
            </ul>
          </div>
          <div className="clinic-actions">
          <Link
            to={ `/detalhes/${clinic.id}`}
            state= { { clinicDetails: clinic } }
            
          >
            <button>+</button>
          </Link>
            <button onClick={() => window.location.href = `tel:${clinic.telefone}`}><img src="/icons/telefone.png" alt="Telefone" width={16} height={16}/></button>
            <button onClick={() => window.location.href = `https://wa.me/${clinic.whatsapp}`}><img src="/icons/conversation.png" alt="Chat" width={16} height={16}/></button>
          </div>
        </div>
      </div>

     );
}