import styled from 'styled-components'

export const HeaderContainer = styled.div`

    width: 1200px;
    margin: auto;

    h1 {
        font-weight: normal;
        font-size: 10rem;
        margin: 38px 0px 0px 160px;

        span {
            font-weight: bold;
        }

        ::after {
            content: '';
            display: block;
            height: 50px;
            width: 1100px;
            position: absolute;
            top: 170px;
            left: 0;
            z-index: -999;
            background-color: ${props => props.theme.colors.primary};
        }

    }

`

export const AboutMe = styled.div`

    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    div {


        h2 {
            font-size: 4rem;
        }

        /*div {

            margin-top: 10px;
            display: flex;
            justify-content: center;
            flex-direction: column;

        }*/

    }

    img {
        filter: drop-shadow(20px 0px ${props => props.theme.colors.primary});
        position: relative;
        top: -145px;
    }

`
