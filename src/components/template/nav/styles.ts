import styled from 'styled-components'

export const NavIndex = styled.nav`

    margin: 30px auto 0px auto;

    // input to change theme

    i {
        color: ${props => props.theme.colors.primary};
        font-size: 2rem;
    }

    input[name="theme-switcher"] {
        -webkit-appearance: none;
        border-radius: 10px;
        background-color: ${props => props.theme.colors.primary};
        width: 50px;
        cursor: pointer;
        margin: 0px 3px;
    }

    input[name="theme-switcher"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: ${props => props.theme.colors.secundary};
    }

    // nav list

    ul {
        display: flex;
        justify-content: space-between;
    }

    ul li {
        list-style: none;
        display: inline-block;
    }

    ul li a {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        font-size: 1.8rem;
        transition: font-weight .5s;
    }

    ul li a:hover {
        font-weight: bold;
    }

    ul div li {
        margin-left: 40px;
    }

    ul div li:first-child {
        margin-left: 0;
    }

`

export const ButtonLink = styled.a`
    padding: 10px;
    border: 2px solid ${props => props.theme.colors.text};
    border-radius: 10px;

    :hover {
        background-color: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.background};
        font-weight: normal !important;
        transition: background-color .5s, color .5s;
    }
`