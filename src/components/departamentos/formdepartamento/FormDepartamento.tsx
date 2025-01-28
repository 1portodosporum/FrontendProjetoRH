import { Link } from '@phosphor-icons/react/dist/ssr';
import './FormDepartamento.css';

const FormDepartamento = () => {
  return (
    <section className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">Formulario de Departamento</h1>
      <form className="w-1/2 flex flex-col gap-4">
        <div className="input">
          <input type="text" required />
          <label>
            <i className="bx bx-buildings"></i> Cadastrar Departamento:
          </label>
        </div>

        <button
          className="rounded text-slate-100 bg-violet-400  hover:bg-violet-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit">
          <Link to="/employeelist">Cadastrar</Link>
        </button>
      </form>
    </section>
  );
};

export default FormDepartamento;
