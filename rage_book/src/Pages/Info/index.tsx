import { useContext, useEffect } from "react"
import { InfoStyle } from "../../Styles/InfoStyle"
import { LanguageContext } from "../../App"
import { gsap } from "gsap"

function Info(){
   

    
    const {language} = useContext(LanguageContext)
    console.log(language)

    useEffect(() => {
        gsap.to("span", {opacity: 1, delay: 0.15, duration: 0.5})
    })
    
    return(
        <span style={{opacity: 0}}>
            {
                language === 'fr' ?
                    <InfoStyle>
                        <p>
                            <h1>Booking info tattoo</h1>



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
                        Veuillez noter que certains emplacements (côtes, abdomen, cou, etc.) requièrent davantage de temps et de complexité.<br/><br/>

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
                            <h1>Soins après tatouage : Cultiver l’art de la cicatrisation </h1>

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
                        <p>
                        <h1>Booking information</h1>

                        To facilitate booking and in order for me to offer you a quotation, it is necessary to contact me with this form:
                    	<ul>
                        <li>    Flash tattoo or project</li>
                    	<li>	Precise description of the conception of your tattoo (photos and drawings are welcome) </li>
                    	<li>	Position on body</li>
	                    <li>	Size (approximately in centimeters)</li>
	                    <li>	Black or color (specify which colors)</li>
	                    <li>	Budget (only cash is accepted)</li>
	                    <li>	Time and date availabilities</li>
	                    <li>	Phone number</li>
                        </ul>	
                        The cost of your tattoos is based on your desires, the size and the position of it. Some parts of the body (ribs, abdomen, neck…) are more complex and require more time.
                        I highly recommend using a ruler to get a clear idea of the size. <br/><br/>

                        For an appointment to be approved, a 30% cash deposit is necessary. <br/><br/>
                        Due to many late cancellations and in respect to other clients, deposits will not be refunded if you cancel or do not show up. <br/><br/>
                        The rest of the balance is to be paid on the day of the tattoo.<br/><br/>
                        For tattoos exceeding 800€, payment in installments at each session is conceivable.<br/><br/>

                        You may bring companions on demand.<br/><br/>

                        For further information or to book an appointment, don’t hesitate to contact me. Your comfort and the excellency of your tattoo are my priorities. 
                        </p>
                        <p>
                        <h1>Tattoo aftercare: Nurturing the art of healing</h1>

                        Wait at least 2-3 days after the appointment before taking off the second skin.<br/><br/>

                        Gently wash your tattoo with lukewarm water, neutral pH soap and clean hands. Dry by applying little dabs with a clean cotton towel. <br/><br/>

                        Softly apply a healing balm in thin layers. I highly recommend using Eucerin’s AQUAPHOR.
                        Massage until absorption. This gesture will allow the balm to penetrate deeply into the skin enabling a better healing process.
                        Let your tattoo breath and sleep in clean cotton sheets.<br/><br/>

                        Always wash your hands before touching your tattoo.<br/><br/>

                        Avoid sunlight, swimming pools, saunas, hammams, and intense physical activities that could affect the skin (sweat, impacts, etc.).<br/><br/>

                        Prefer clean cotton for both bed sheets and wide clothes. Try avoiding contact with wool and synthetic material. <br/><br/>

                        Even though they may be our friends, avoid contact with animals.<br/><br/>
                        </p>
                    </InfoStyle>
            }
        </span>
    )
}

export default Info