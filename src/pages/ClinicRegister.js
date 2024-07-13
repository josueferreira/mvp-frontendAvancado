import { useState, useEffect } from 'react';

export default function ClinicRegister (){
    const [form, setForm] = useState({
        nome: '',
        telefone: '',
        whatsapp: '',
        estado: '',
        municipio: '',
        linkMapa: '',
        servicos: [],
        descricao: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value,
        });
      };
    
      const handleServicoChange = (e) => {
        const { value, checked } = e.target;
        setForm({
          ...form,
          servicos: checked
            ? [...form.servicos, value]
            : form.servicos.filter(servico => servico !== value),
        });
      };
    
    return ( 

        <div>
       <h2>Cadastre sua clínica</h2>
      <form>
        <input name="nome" value={form.nome} onChange={handleChange} placeholder="Nome da Clínica" />
        <input name="telefone" value={form.telefone} onChange={handleChange} placeholder="Telefone" />
        <input name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="WhatsApp" />
        <input name="estado" value={form.estado} onChange={handleChange} placeholder="Estado" />
        <input name="municipio" value={form.municipio} onChange={handleChange} placeholder="Município" />
        <input name="linkMapa" value={form.linkMapa} onChange={handleChange} placeholder="Link do Mapa" />
        <div>
          <label>
            <input type="checkbox" value="Vacinas" onChange={handleServicoChange} /> Vacinas
          </label>
          <label>
            <input type="checkbox" value="Consultas" onChange={handleServicoChange} /> Consultas
          </label>
          {/* Adicione outros serviços conforme necessário */}
        </div>
        <textarea name="descricao" value={form.descricao} onChange={handleChange} placeholder="Sobre a Clínica"></textarea>
        <button type="button">Cadastrar</button>
      </form>  
      
      </div>

     );
}