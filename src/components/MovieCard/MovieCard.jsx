import './MovieCard.scss'
import {Image} from 'minista'
import Badge from '@/components/Badge'

export default (
  {
    title,
    imgSrc,
    duration,
    views,
    href = '/movie',
  }
) => {

  return (
    <a
      className="movie-card"
      href={href}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        className="movie-card__image"
        src={imgSrc}
      />
      <div className="movie-card__body">
        {duration && (
          <Badge>
            {duration}
          </Badge>
        )}
      </div>
    </a>
  )
}