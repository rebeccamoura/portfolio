import { Bio } from "./styles";

const AdjustBio: React.FC = () => {
    return (
        
        <Bio>

            <h3>Ajuste o tamanho da biografia</h3>

            <label htmlFor="bioLength">
                

                <span>
                    <input type="radio" name="bioLength" id="1" />
                    <input type="radio" name="bioLength" id="2" />
                    <input type="radio" name="bioLength" id="3" />
                </span>

                <span>
                    Menor
                    <span>Maior</span>
                </span>

            </label>


        </Bio>

    )
};

export default AdjustBio;
