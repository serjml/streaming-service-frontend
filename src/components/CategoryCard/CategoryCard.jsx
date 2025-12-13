import './CategoryCard.scss'
import {Image} from 'minista'

export default (props) => {
  const {
    title, images = [],
  } = props

  return (<a
      className="category-card"
      href="/movies"
    >
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image
            className="category-card__image"
            src={imgSrc}
            key={index}
          />
        ))}
      </div>
      <div className="category-card__body"></div>
    </a>)
}