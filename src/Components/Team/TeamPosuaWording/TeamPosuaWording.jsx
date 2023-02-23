import './TeamPosuaWord.css';
import Mukha from '../../../Assets/Mukha.png';

const TeamPosuaWording = () => {
    return (
        <div className="containerTeamWordMukha">
            <div className='WordingMukha1'>
                <img src={Mukha} />
            </div>
            <div className='WordingTeamPosua'>
                <h1 className="WordingTeamPosua">Team Posua</h1>
                <p>With the arrival of spring and the departure of winter days, our Mother Nature expresses her joy of welcoming the calming rejuvenation via greenery and brightness all around her. Our Spring Fest, Posua is that venture which nurtures this celebration. This spree witnesses everyone coming together to work as a team, be it the students, the faculty members and the entire fraternity of NIT Silchar into its circle of gaiety and also ensures of breaking all the barriers among the crowd and bringing everyone together.</p>
            </div>
            <div className='WordingMukha2'>
                <img src={Mukha} />
            </div>
        </div>
    )
}

export default TeamPosuaWording