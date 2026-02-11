import './RatingView.scss'


export default (
  {
    label,
    value = 5,
  }
) => {

  const arialabel = `Rating ${value} stars`

  return (
    <div
      className="rating-view"
      aria-label={arialabel}
      title={arialabel}
      style={{
        '--ratingViewValue': value,
      }}
    >
      <div className="rating-view__stars">
        <img
          className="rating-view__stars-unfilled"
          src="/rating/stars_unfilled.svg"
          width={98}
          height={18}
          alt=""
        />
        <img
          className="rating-view__stars-filled"
          src="/rating/stars_filled.svg"
          width={98}
          height={18}
          alt=""
        />
      </div>
      {label && (
        <div className="rating-view__label">{label}</div>
      )}
    </div>
  )
}