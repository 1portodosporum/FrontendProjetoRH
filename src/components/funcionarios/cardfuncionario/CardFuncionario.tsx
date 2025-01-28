interface Funcionario {
    nome: string;
    cargo: string;
    foto: string;
    departamentos?: string;
}

interface CardFuncionarioProps {
    funcionarios: Funcionario[];
}

const CardFuncionario: React.FC<CardFuncionarioProps> = ({ funcionarios }) => {
    return (
        <section className="flex flex-wrap justify-center gap-6 p-4">
            {funcionarios.map((funcionario, index) => (
                <div
                    key={index}
                    className="w-64 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center"
                >
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                        <img
                            src={funcionario.foto}
                            alt={`${funcionario.nome} foto`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h4 className="text-xl font-semibold">{funcionario.nome}</h4>
                    <h5 className="text-gray-600">{funcionario.cargo}</h5>
                    <div className="flex gap-4 mt-4">
                       <button><i className='bx bxs-edit' ></i> Editar</button>
                          <button><i className='bx bxs-trash' ></i> Deletar</button>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default CardFuncionario;
