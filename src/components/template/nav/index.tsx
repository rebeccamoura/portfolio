import { ButtonLink, NavIndex } from './styles'

interface Props {
    toggleTheme(): void;
}

const Nav: React.FC<Props> = ({ toggleTheme }) => {
    return (
        <NavIndex>

            <ul>

                <li>

                    <label htmlFor='theme-switcher'>
                        <i className='fas fa-sun' />
                    </label>
                    <input type='range' name='theme-switcher' min='0' max='1' onChange={toggleTheme} />
                    <label htmlFor='theme-switcher'>
                        <i className='fas fa-moon' />
                    </label>

                </li>

                <div>
                    <li>
                        <a href="#home">Página inicial</a>
                    </li>
                    <li>
                        <a href="#skills">Habilidades</a>
                    </li>
                    <li>
                        <a href="#projects">Projetos</a>
                    </li>
                </div>

                <li>
                    <ButtonLink href="#">Vamos conversar</ButtonLink>
                </li>

            </ul>

        </NavIndex>
    )
}

export default Nav;
