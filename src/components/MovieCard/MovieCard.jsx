import './MovieCard.scss'
import {Image} from 'minista'
import Badge from '@/components/Badge'
import RatingView from '@/components/RatingView'

export default (
  {
    title,
    imgSrc,
    duration,
    views,
    release,
    rating,
    season,
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
          <Badge
            iconName="clock"
            iconAriaLabel="Duration"
            hasFillIcon
          >
            {duration}
          </Badge>
        )}

        {season && (
          <Badge
            iconName="catalog"
            hasFillIcon
          >
            {season}
          </Badge>
        )}

        {rating && (
          <Badge
            className="movie-card__rating-badge "
          >
            <RatingView {...rating} />
          </Badge>
        )}

        {views && (
          <Badge
            iconName="eye"
            iconAriaLabel="Views"
            hasFillIcon
          >
          </Badge>
        )}

        {release && (
          <Badge className="movie-card__release-badge">
            Released at <time
            className="movie-card__release-badge-label"
            dateTime={release.dateTime}
          >{release.label}</time>
          </Badge>
        )}
      </div>
    </a>
  )
}