import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Projeto RH - grupo 1 | Copyright: {data}
                        </p>
                    <p className='text-lg font-semibold'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogo size={48} weight='regular' />
                        <InstagramLogo size={48} weight='regular' />
                        <FacebookLogo size={48} weight='regular' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer