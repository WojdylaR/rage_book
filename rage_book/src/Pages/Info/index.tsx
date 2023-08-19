import { useContext } from "react"
import { InfoStyle } from "../../Styles/InfoStyle"
import { LanguageContext } from "../../App"

function Info(){
   
    const {language} = useContext(LanguageContext)
    console.log(language)
    
    return(
        <span>
            {
                language === 'fr' ?
                    <InfoStyle>
                        <p>
                            <h1>- Booking info tattoo</h1>



                        Pour faciliter la prise de rendez-vous, et vous faire un devis, il est obligatoire de me contacter en utilisant le formulaire suivant : 


                        <ul>
                            <li>Flash ou projet </li>
                            <li>Une description précise de la conception de votre tatouage (photos ou dessins bienvenus pour guider la création)</li>
                            <li>Emplacement sur votre corps.</li>
                            <li>Dimensions approximatives en centimètres</li>
                            <li>Préférence pour des nuances de noir ou des touches de couleurs (si oui, lesquelles)</li>
                            <li>Budget approximatif.</li>
                            <li>Disponibilités.</li>
                            <li>Moyen de paiement uniquement en espèces.</li>
                            <li>Numéro de téléphone.</li>
                        </ul>

                        Le coût total du tatouage émerge de vos désirs, de la taille et de l'endroit choisi. 
                        Veuillez noter que certains emplacements (côtes, abdomen, cou, etc.) requièrent davantage de temps et de complexité.<br/>

                        Je recommande vivement d'utiliser une règle pour déterminer les dimensions exactes.<br/><br/>

                        Pour valider un rendez-vous, il est obligatoire d’avoir versé un acompte de 30 % <br/><br/>
                        de préférence en cash à déposer au shop. En raison de nombreuses annulations tardives, et par <br/><br/>
                        respect pour les autres clients, l'acompte ne sera pas remboursé en cas d'absence ou d'annulation.<br/><br/>

                        Le solde restant sera à régler le jour du tatouage. Pour les tatouages dépassant 800 euros, la 
                        possibilité de fractionner le paiement en fonction du nombre de sessions est envisageable.<br/><br/>

                        Les accompagnateurs sont les bienvenus sur demande.<br/><br/>

                        Pour toute question supplémentaire ou pour prendre rendez-vous, n’hésitez pas à me contacter.
                        Votre confort et l’excellence de votre tatouage sont mes engagements primordiaux</p>

                        <p>
                            <h1>- Soins après tatouage : Cultiver l’art de la cicatrisation </h1>

                        Patientez au moins 2 à 3 jours après la séance de tatouage avant de retirer la secon de peau.<br /><br/>

                        Nettoyez votre tatouage avec délicatesse à l'eau tiède et au savon doux au pH neutre en utilisant vos mains propres. Tamponnez 
                        doucement avec une serviette propre en coton pour sécher.<br /><br/>

                        Appliquez avec douceur un baume cicatrisant en fine couche (je recommande vivement la crème AQUAPHOR 
                        d'Eucerin) en massant jusqu'à absorption.  Ce geste mécanique permet au baume de pénétrer en profondeur, 
                        favorisant la cicatrisation optimale de votre tatouage. Préférez l'air libre pour votre tatouage, en 
                        dormant dans des draps propres en coton. <br /><br/>

                        Touchez toujours votre tatouage avec des mains propres.<br /><br/>

                        Laissez les peaux mortes se détacher naturellement sans les arracher.<br /><br/>

                        Évitez le soleil, les bains en piscine, sauna et hammam, ainsi que les activités physiques intenses qui 
                        pourraient solliciter excessivement la peau (sueur, impacts, etc.).<br /><br/>

                        Optez pour des draps en coton propres pour dormir et privilégiez des vêtements 
                        amples et en coton. Évitez tout contact avec des matières synthétiques ou la laine.<br /><br/>

                        On évite le contact avec nos amis les animaux.</p>
                    </InfoStyle>
                :
                    <InfoStyle>
                        Info En
                    </InfoStyle>
            }
        </span>
    )
}

export default Info