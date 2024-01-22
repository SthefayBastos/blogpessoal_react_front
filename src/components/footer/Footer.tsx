import { GithubLogo, LinkedinLogo} from '@phosphor-icons/react'

function Footer (){



    return (
        <>
        <div className='flex justify-center bg-indigo-900 text-white'> 
            <div className='container flex flex-col items-center py-4'>
                <p className='text-xl font-bold'> Blog Pessoal Generation | Copyright: Sthefany Sousa - 2024 </p>
                <p className='text-lg'> Acesse minhas redes sociais</p>
                <div className='flex gap-2'>
                <a href="https://www.linkedin.com/in/sthefany-sousa-da-silva-bastos-873264232/" target="_blank">
                    <LinkedinLogo size={48} weight='bold'  href="Uhttps://www.linkedin.com/in/sthefany-sousa-da-silva-bastos-873264232/"/>
                </a>
                <a href="https://github.com/SthefayBastos" target="_blank">
                    <GithubLogo size={48} weight='bold'href= "https://github.com/SthefayBastos"/>
                </a>
                </div>

            </div>
        </div>
        </>
    )
}

export default Footer