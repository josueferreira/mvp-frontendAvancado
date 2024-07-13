
import { useState, useEffect } from 'react';
import ItemClinic from './ItemClinic';
import axios from 'axios';

export default function ListClinics({ searchParams }){
    const [clinicas, setClinicas] = useState([]);
  
    useEffect(() => {
        if (searchParams) {
          axios.get('/src/clinicas.json')
            .then(response => {
              const clinicasFiltradas = response.data.filter(clinica =>
                clinica.problema.includes(searchParams.problema) &&
                clinica.estado === searchParams.estado &&
                clinica.municipio === searchParams.municipio
              );
              setClinicas(clinicasFiltradas);
            });
        }
      }, [searchParams]);

    return ( 

        <div>
        <h2>Clínicas que podem ajudar</h2>
        {clinicas.map(clinica => (
          <ItemClinic key={clinica.id} clinic={clinica} />
        ))}
      </div>

     );
}