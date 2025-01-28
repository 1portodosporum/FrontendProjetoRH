import "./FormFuncionario.css";

const FormFuncionario = () => {
    return (
        <section className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8 text-white">Formulario de Funcionário</h1>
            <form className="w-1/2 flex flex-col gap-4">
                <div className='input'>
                    <input type="text"  required/>
                    <label><i className='bx bxs-user'></i> Nome:</label>
                </div>
                <div className='input'>
                    <input type="text"  required/>
                    <label><i className='bx bxs-briefcase-alt-2'></i> Cargo:</label>
                </div>
                <div className='input'>
                    <input type="text"  required/>
                    <label><i className='bx bxs-badge-dollar' ></i> Salario:</label>
                </div>
                <div className='flex flex-col gap-4 '>
                <label className = 'text-white font-semibold'><i className='bx bxs-calendar' ></i> data adimissão:</label>
                    <input type="date"  required/>
                </div>
                <div className="flex flex-col gap-4 ">
                    <label className = 'text-white font-semibold'><i className='bx bx-buildings '></i> Departamento:</label>
                    <select name="departamento" id="departamento">
                        <option value="1">Departamento 1</option>
                        <option value="2">Departamento 2</option>
                        <option value="3">Departamento 3</option>
                    </select>
                </div>
                <button className="rounded text-slate-100 bg-violet-400  hover:bg-violet-800 w-1/2 py-2 mx-auto flex justify-center"type="submit">
                    Cadastrar
                </button>
            </form>
        </section>
    );

}

export default FormFuncionario;