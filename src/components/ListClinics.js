import { useState, useEffect } from 'react';
import ItemClinic from './ItemClinic';
import axios from 'axios';

export default function ListClinics({ searchParams }) {
  const [clinicas, setClinicas] = useState([]);

  useEffect(() => {
    if (searchParams) {
      axios.get('/clinicas.json')
        .then(response => {
          const clinicasFiltradas = response.data.filter(clinica => {
            const problemaNormalizado = normalizeText(searchParams.problema);
            const descricaoNormalizada = normalizeText(clinica.descricao);
            const servicosNormalizados = clinica.servicos.map(servico => normalizeText(servico));
            const problemasNormalizados = clinica.problema.map(problema => normalizeText(problema));
            const problemaNoServico = servicosNormalizados.some(servico => servico.includes(problemaNormalizado));
            const problemaNaDescricao = descricaoNormalizada.includes(problemaNormalizado);
            const problemaNoProblema = problemasNormalizados.some(problema => problema.includes(problemaNormalizado));

            return (
              (problemaNoServico || problemaNaDescricao || problemaNoProblema) &&
              clinica.estado === searchParams.estado &&
              clinica.municipio === searchParams.municipio
            );
          });
          setClinicas(clinicasFiltradas);
        });
    }
  }, [searchParams]);

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  return (
    <div className='container'>
      <div className='topo-busca'>
        <img src="/iconeLogo.png" alt="Logo" />
        <h2>Clínicas que podem ajudar</h2>
      </div>
      <div className="linha-cabecalho"></div>
     
      {clinicas.length > 0 ? (
        clinicas.map(clinica => (
          <ItemClinic key={clinica.id} clinic={clinica} />
        ))
      ) : (
        <span>Nenhuma Clínica Encontrada</span>
      )}
    </div>
  );
}
