import { useState } from "react";

export default function ClinicRegister() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    whatsapp: "",
    estado: "",
    municipio: "",
    linkMapa: "",
    servicos: [],
    problemas: [],
    descricao: "",
    logo: "",
  });

  const [servico, setServico] = useState("");
  const [problema, setProblema] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleAddServico = () => {
    if (servico) {
      setForm({
        ...form,
        servicos: [...form.servicos, servico],
      });
      setServico("");
    }
  };

  const handleAddProblema = () => {
    if (problema) {
      setForm({
        ...form,
        problemas: [...form.problemas, problema],
      });
      setProblema("");
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setForm({
      ...form,
      logo: file,
    });
  };

  return (
    <div className="container">
      <div className="topo-details">
        <img src="/iconeLogo.png" alt="Logo" />
        <h2>Cadastre sua clínica</h2>
      </div>

      <div className="linha-cabecalho"></div>
      <div className="content-register">
        <form>
          <label>Nome da Clínica</label>
          <input
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Nome da Clínica"
          />
          <label>Telefone</label>
          <input
            name="telefone"
            value={form.telefone}
            onChange={handleChange}
            placeholder="Telefone"
          />
          <label>Whatsapp</label>
          <input
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            placeholder="WhatsApp"
          />
          <label>Logo</label>
          <input
            type="file"
            name="logo"
            onChange={handleLogoChange}
          />
          <div className="formLocal">
            <label>
              Estado
              <input
                name="estado"
                value={form.estado}
                onChange={handleChange}
                placeholder="Estado"
              />
            </label>
            <label>
              Município
              <input
                name="municipio"
                value={form.municipio}
                onChange={handleChange}
                placeholder="Município"
              />
            </label>
          </div>
          <label>Link do Mapa</label>
          <input
            name="linkMapa"
            value={form.linkMapa}
            onChange={handleChange}
            placeholder="Link do Mapa"
          />
          <div className="dynamic-container">
          <div className="dynamic-input">
            <label>Serviços
            <input
              value={servico}
              onChange={(e) => setServico(e.target.value)}
              placeholder="Adicionar Serviço"
            />
            </label>
            <button type="button" onClick={handleAddServico}>+</button>
            </div>
            <ul>
              {form.servicos.map((serv, index) => (
                <li key={index}>{serv}</li>
              ))}
            </ul>
          </div>
          <div className="dynamic-container">
           <div className="dynamic-input">
            <label>Casos
            <input
              value={problema}
              onChange={(e) => setProblema(e.target.value)}
              placeholder="Adicionar Caso"
            />
            </label>
            <button type="button" onClick={handleAddProblema}>+</button>
            </div>
            <ul>
              {form.problemas.map((prob, index) => (
                <li key={index}>{prob}</li>
              ))}
            </ul>
          </div>
          <label>Sobre a clínica</label>
          <textarea
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Sobre a Clínica"
          ></textarea>
          <button type="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
