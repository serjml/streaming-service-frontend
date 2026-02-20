import './PersonCard.scss'
import {Image} from 'minista'

export default (props) => {
  const {
    imgSrc,
    imgAlt,
  } = props

  return (
    <div
      className="person-card"
    >
      <Image
        className="person-card__image"
        src={imgSrc}
        alt={imgAlt}
        title={imgAlt}
      />
    </div>
  )
}