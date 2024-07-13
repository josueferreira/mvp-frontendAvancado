

export default function ItemClinic ({ clinic }){

    return ( 

        <div className="clinic-item">
        <img src={clinic.logo} alt={clinic.nome} className="clinic-logo" />
        <div className="clinic-info">
          <h3>{clinic.nome}</h3>
          <p>{clinic.descricao}</p>
          <div className="clinic-services">
            {clinic.servicos.map(servico => <span key={servico}>{servico}</span>)}
          </div>
          <div className="clinic-actions">
            <button onClick={() => window.location.href = `/detalhes/${clinic.id}`}>+</button>
            <button onClick={() => window.location.href = `tel:${clinic.telefone}`}>Telefone</button>
            <button onClick={() => window.location.href = `https://wa.me/${clinic.whatsapp}`}>Chat</button>
          </div>
        </div>
      </div>

     );
}