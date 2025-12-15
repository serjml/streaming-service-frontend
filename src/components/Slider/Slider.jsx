import 'swiper/css'
import './Slider.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    children,
    className,
  } = props

  return (
    <div
      className={clsx('slider', className)}
    >
      <div className="slider__swiper swiper">
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li className="slider__item swiper-slide" key={index}>
              {slide}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}