import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-violet-200 text-violet-600">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Projeto RH - grupo 1 | Copyright: {data}
                        </p>
                    <p className='text-lg font-thin'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='thin' />
                        <InstagramLogo size={48} weight='thin' />
                        <FacebookLogo size={48} weight='thin' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer