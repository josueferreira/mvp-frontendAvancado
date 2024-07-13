import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function ClinicDetails() {
  const { id } = useParams();
  const [clinic, setClinic] = useState(null);

  useEffect(() => {
    axios.get("/data/clinicas.json").then((response) => {
      const clinicDetails = response.data.find(
        (clinica) => clinica.id === parseInt(id)
      );
      setClinic(clinicDetails);
    });
  }, [id]);

  if (!clinic) return <div>Carregando...</div>;

  return (
    <div>
      <h2>{clinic.nome}</h2>
      <iframe
        src={clinic.linkMapa}
        width="600"
        height="450"
        title="map"
      ></iframe>
      <div>
        <p>{clinic.descricao}</p>
        <ul>
          {clinic.servicos.map((servico) => (
            <li key={servico}>{servico}</li>
          ))}
        </ul>
        <button
          onClick={() => (window.location.href = `tel:${clinic.telefone}`)}
        >
          Ligar
        </button>
        <button
          onClick={() =>
            (window.location.href = `https://wa.me/${clinic.whatsapp}`)
          }
        >
          Chat
        </button>
      </div>
    </div>
  );
}
