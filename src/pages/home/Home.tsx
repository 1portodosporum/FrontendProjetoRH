import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className=" flex justify-center text-white">
                <div className='container grid grid-cols-2 '>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Team One! <br/>
                           
                        </h2>
                        <p className='text-xl '>
                            Clique aqui para cadastrar um funcionário
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded-xl  
                                            border-white border-solid border-2 py-2 px-4 hover:bg-violet-600'
                                >
                                <Link to="/form">Cadastrar funcionário </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/0cescotho/logo_projeto_pn.png?updatedAt=1738077129742"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home