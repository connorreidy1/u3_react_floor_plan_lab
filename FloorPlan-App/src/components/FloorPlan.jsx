import Kitchen from './Kitchen'
import LivingRoom from './LivingRoom'
import Bedroom1 from './Bedroom1'
import Bedroom2 from './Bedroom2'
import Bedroom3 from './Bedroom3'
import Bath1 from './Bath1'
import Bath2 from './Bath2'


function FloorPlan() {
 
    let member1 = "Yanit" 
    let member2 = "Cody"
    let member3 = "Amid"
    let bath1 = "Half"
    let bath2 = "Full"

    return (
    <div className="floorplan-container">
        <div className="top-container">
            <div className="bed1-bath1-container">
                <Bedroom1 member1={member1}/>
                <Bath1 bath1={bath1}/>
            </div>
            <LivingRoom />
            <Kitchen />
        </div>
        <div className="bottom-container">
            <Bedroom2 member2={member2}/>
            <Bath2 bath2={bath2}/>
            <Bedroom3 member3={member3}/>
        </div>
    </div>
    )
}

export default FloorPlan

