function Home() {
    return (
        <>
            <div className="bg-gray-300/80 flex justify-center ">
                <div className='container grid grid-cols-2 '>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold text-violet-600'>
                            Team One! <br/>
                           
                        </h2>
                        <p className='text-xl text-gray-600'>
                            Clique aqui para cadastrar um funcionário
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded-xl text-gray-600  
                                            border-gray-600 border-solid border-2 py-2 px-4 '
                                >
                                Cadastrar funcionário 
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