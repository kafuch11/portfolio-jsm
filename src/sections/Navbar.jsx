import {useState} from "react";
import { navLinks } from '../constants/index'

const NavItem = ()=>{
    return(
        <ul className={'nav-ul'}>
            {navLinks.map(({id,href,name})=> (
                    <li className="nav-li" key={id}>
                        <a href={href} className="nav-li_a">{name}</a></li>
                )
            )}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <header className={'fixed  top-0 left-0 right-0 z-50  bg-black/90 text-white '}>
            <div className={'max-w-7xl m-x-auto'}>

                <div className={'flex justify-between items-center py-5 mx-auto c-space '}>
                    <a href={'/'}
                       className={'text-neutral-400 font-bold text-xl hover:text-white transition-colors'}>Kafeel</a>
                    <button onClick={toggleMenu}
                            className={'text-neutral-400 hover:text-white focus:outline-none sm:hidden flex'}
                            aria-label={'Toggle Menu'}>

                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt={'toggle'}
                             className={'w-6 h-6'}/>
                    </button>
                    <nav className={'sm:flex hidden'}>
                        <NavItem/>
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen?'max-h-screen':'max-h-0'}`}>
                <nav className="p-5">
                    <NavItem />
                </nav>
            </div>
        </header>
    )
}
export default Navbar
