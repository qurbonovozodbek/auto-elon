import './style.css'

let def = 'https://i.pinimg.com/originals/67/d3/7f/67d37fc6757f9117d74a4dbd8b0e76e0.jpg'

function Card(props) {
    const { image = { def }, title, claass, start_production } = props
    return (
        <div className="box">
            <div className="boxs">

                <img src={image} alt="rasm" />
                <h2>{title}</h2>
                <h4>{claass}</h4>
                <h5>{start_production}</h5>

            </div>
        </div>
    )
}
export default Card;