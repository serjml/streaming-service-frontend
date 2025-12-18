import './DeviceCard.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    title,
    description,
    imgSrc,
  } = props

  return (
    <div
      className={clsx('device-card', className)}
    >
      <header className="device-card__header">
        <div className="device-card__image-wrapper">
          <img
            className="devices-card__image"
            src={imgSrc}
            width={40}
            height={40}
            alt=""
            loading="lazy"
          />
        </div>
        <h3 className="device-card__title h4">{title}</h3>
      </header>
      <div className="device-card__description">
        <p>{description}</p>
      </div>
    </div>
  )
}