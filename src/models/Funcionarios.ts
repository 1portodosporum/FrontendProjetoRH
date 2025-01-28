interface Funcionario {
    nome: string;
    cargo: string;
    foto: string;
    salario?: number;
    departamentos?: string;
}

export const funcionarios = [
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
    {
        nome: "José",
        cargo: "QA",
        foto: "https://bootdey.com/img/Content/avatar/avatar5.png",
        departamento: "Tecnologia",
    },
];

export default Funcionario;