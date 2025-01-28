import { Link } from 'react-router';

function Product() {
  return (
    <>
      <div>
        <h1>Um titulo sobre produto</h1>
        <p>Um texto sobre os produtos</p>
      </div>

      <div>
        <div>
          <h4 className="text-xl font-semibold">Cadastro de Funcionarios</h4>
          <h5 className="text-gray-600">descrição</h5>
          <div className="flex gap-4 mt-4">
            <Link to="/form">
              <button>Ver</button>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold">Listar Funcionarios</h4>
          <h5 className="text-gray-600">descrição</h5>
          <div className="flex gap-4 mt-4">
            <Link to="/list">
              <button>Ver</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
