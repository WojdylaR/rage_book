import ImgLineStyle from "../../Styles/ImgLineStyle";

export default function ImgLine({n}:any){
    return(
        <ImgLineStyle>
            {n ? <img src={require('./../../Assets/tattoo2.png')} className="img" /> : ""}
            <img src={require('./../../Assets/tattoo.png')} className="img"/>
            <img src={require('./../../Assets/tattoo.png')} className="img"/>
        </ImgLineStyle>
    )
}