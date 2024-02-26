import Oven from './Oven'
import Sink from './Sink'


function Kitchen() {
  

  return (
    <div className="kitchen-container">
        <div className="oven-sink-container">
                <Oven />
                <Sink />
        </div>
        <h1>Kitchen</h1>
    </div>
  )
}

export default Kitchen
