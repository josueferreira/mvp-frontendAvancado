import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ClinicDetails() {
  const { state } = useLocation();
  const [clinic, setClinic] = useState(state?.clinic || null);

  useEffect(() => {
    if (state.clinicDetails) {
      setClinic(state.clinicDetails);
    }
  }, [clinic, state.clinicDetails]);

  if (!clinic) return <div className="container">Carregando...</div>;

  return (
    <div className="container">
      <div className="topo-details">
        <img src={`/${clinic.logo}`} alt="Logo" />
        <h2>{clinic.nome}</h2>
      </div>

      <div className="linha-cabecalho"></div>
      <iframe
        src={clinic.linkMapa}
        width="100%"
        height="350"
        title="map"
        className="map-details"
      ></iframe>
      <div className="section-details">
        <div className="clinic-details">
          <div className="clinic-services">
            <ul>
              {clinic.servicos.map((servico) => (
                <li key={servico}>{servico}</li>
              ))}
            </ul>
          </div>

          {clinic.descricao.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div>
          <div className="clinic-actions">
            <button
              onClick={() => (window.location.href = `tel:${clinic.telefone}`)}
            >
              <img
                src="/icons/telefone.png"
                alt="Telefone"
                width={16}
                height={16}
              />
            </button>
            <button
              onClick={() => (window.location.href = `https://wa.me/${clinic.whatsapp}`)}
            >
              <img
                src="/icons/conversation.png"
                alt="Chat"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
