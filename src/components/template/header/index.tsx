import Nav from '../nav'
import { HeaderContainer, AboutMe } from './styles';

import Me from '../../../images/me.png'
import AdjustBio from '../adjustBio';

interface Props {
    switchTheme(): void
}

const Header: React.FC<Props> = ({ switchTheme }) => {
    return (
        <header>
            <HeaderContainer>
                <Nav toggleTheme={switchTheme} />

                <h1>
                    Hello<span> World</span>
                </h1>

                <AboutMe>

                    <div>
                            
                        
                        <AdjustBio />

                    </div>
                    
                    <img src={Me} alt="Minha foto"/>

                </AboutMe>

            </HeaderContainer>
        </header>
    )
}

export default Header;
