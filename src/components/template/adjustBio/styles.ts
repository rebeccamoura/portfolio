import styled from 'styled-components'

export const Bio = styled.div`

    width: 850px;


    h3, label {
        font-weight: normal;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${props => props.theme.colors.textBio};
        text-align: center;
    }

    label {

        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        margin: auto;

        span:last-child {
            display: flex;
            justify-content: space-between;
            width: 255px;
            margin: auto;
            overflow-x: hidden;

            span {
                margin-left: 157px;
            }

        }


        input {
            margin: 20px 0px 10px 50px;
            cursor: pointer;
            appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid ${props => props.theme.colors.primary};
            position: relative;
        }

            input::before {
                content: '';
                position: absolute;
                height: 7.5px;
                width: 7.5px;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: ${props => props.theme.colors.primary};
                border-radius: 50%;
                opacity: 0;
                transition: opacity .5s;
            }

            input:checked::before {
                opacity: 1;
            }

            input:last-child {
                margin-right: 50px;
            }

        }
    
    p {
        font-size: 1.8rem;
        margin-top: 30px;
        text-align: justify;
    }

`



/*

    h3, label {
        font-weight: normal;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${props => props.theme.colors.textBio};
        text-align: center;
    }

    label {

        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
        margin: auto;

        span:last-child {
            display: flex;
            justify-content: space-between;
        }


        input {
            margin: 20px 0px 10px 50px;
            cursor: pointer;
            appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid ${props => props.theme.colors.primary};
            position: relative;
        }

        input::before {
            content: '';
            position: absolute;
            height: 7.5px;
            width: 7.5px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: ${props => props.theme.colors.primary};
            border-radius: 50%;
            opacity: 0;
            transition: opacity .5s;
        }

        input:checked::before {
            opacity: 1;
        }

        input:last-child {
            margin-right: 50px;
        }

    }

*/
