import { funcionarios } from "../../../models/Funcionarios";
import CardFuncionario from "../cardfuncionario/CardFuncionario";

const ListarFuncionarios = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <CardFuncionario funcionarios={funcionarios} />
        </div>
    );
}

export default ListarFuncionarios;
