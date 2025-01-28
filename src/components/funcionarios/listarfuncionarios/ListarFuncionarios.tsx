import CardFuncionario from "../cardfuncionario/CardFuncionario";

const funcionarios = [
    {
        nome: "João",
        cargo: "Desenvolvedor Fullstack",
        foto: "https://bootdey.com/img/Content/avatar/avatar7.png",
        departamento: "Tecnologia",
    },
    {
        nome: "Maria",
        cargo: "Desenvolvedor Backend",
        foto: "https://bootdey.com/img/Content/avatar/avatar8.png",
        departamento: "Tecnologia",
    },
];

const ListarFuncionarios = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <CardFuncionario funcionarios={funcionarios} />
        </div>
    );
}

export default ListarFuncionarios;
