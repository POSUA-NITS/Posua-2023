import styles from './TeamPosuaWord.module.scss';
import Mukha from '../../../Assets/Mukha.png';
import flower from '../../../Assets/flower.png';


const TeamPosuaWording = () => {
    return (
        <>
        <div className={styles.texturebg}>

        <div className={styles.containerTeamWordMukha}>
           
            <div className={styles.WordingMukha1}>
                <img src={Mukha} />
            </div>
            <div className={styles.WordingTeamPosua}>
                <h1 className={styles.Heading}>TEAM POSUA</h1>
                <p>With the arrival of spring and the departure of winter days, our Mother Nature expresses her joy of welcoming the calming rejuvenation via greenery and brightness all around her. Our Spring Fest, Posua is that venture which nurtures this celebration. This spree witnesses everyone coming together to work as a team, be it the students, the faculty members and the entire fraternity of NIT Silchar into its circle of gaiety and also ensures of breaking all the barriers among the crowd and bringing everyone together.</p>
            </div>
            <div className={styles.WordingMukha2}>
                <img src={Mukha} />
            </div>

        </div>

        <div className={styles.containerflower}>
        <div className={styles.flower2}>
                <img src={flower} />
            </div>
            <div className={styles.flower}>
                <img src={flower}/>
            </div>
            
        </div>

        </div>


        
        
        
        </>
        
    )
}

export default TeamPosuaWording