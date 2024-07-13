import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ListClinics from '../components/ListClinics';

export default function Home(){
    const [problema, setProblema] = useState('');
    const [estado, setEstado] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [searchParams, setSearchParams] = useState(null);
    const navigate = useNavigate();
  
    const handleSearch = () => {
        setSearchParams({ problema, estado, municipio });
      };

    return ( 
<>
        <div>
      <h1>Qual ajuda seu Pet precisa?</h1>
      <input type="text" value={problema} onChange={(e) => setProblema(e.target.value)} placeholder="Descreva o problema" />
      <select value={estado} onChange={(e) => setEstado(e.target.value)}>
        <option value="">Estado</option>
        <option value="RJ">Rio de Janeiro</option>
      </select>
      <select value={municipio} onChange={(e) => setMunicipio(e.target.value)}>
        <option value="">Município</option>
        <option value="Copacabana">Copacabana</option>
      </select>
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
    <div>
        <h1>Resultados</h1>
        {searchParams && <ListClinics searchParams={searchParams} />}
    </div>
    </>

     );
}