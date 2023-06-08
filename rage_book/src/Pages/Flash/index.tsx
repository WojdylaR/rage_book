import { FlashStyle } from "../../Styles/FlashStyle"



function Flash(){
    return(
        <FlashStyle>
            <h1 className="tittle">Flash dispo :</h1>
            <div className="grid">
                {[... new Array(10)].map((_, i) => (
                <img src={require('./../../Assets/Fusioné.png')} className="img"/>
            ))}
            </div>
        </FlashStyle>
    )
}

export default Flash