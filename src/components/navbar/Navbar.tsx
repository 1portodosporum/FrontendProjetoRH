import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   text-violet-600 bg-violet-200'>

                <div className="container flex justify-between text-lg">
                    TEAM ONE - RH SYSTEM

                    <div className='flex gap-4'>
                        {/*<Link to="/home" className="text-2xl font-bold">*/}
                            Home
                       {/*</Link>*/}
                        {/*<Link to="/sobrenós" className="text-2xl font-bold">*/}
                            Sobre nós
                        {/*</Link>*/}
                        {/*<Link to="/produtos" className="text-2xl font-bold">*/}
                            Produtos
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar