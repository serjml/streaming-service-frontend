import 'swiper/css'
import './Slider.scss'
import clsx from 'clsx'
import SliderNavigation from './components/SliderNavigation'

export default (props) => {
  const {
    children,
    className,
    navigationTargetElementId = null,
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

      {!navigationTargetElementId && (
        <SliderNavigation className="slider-navigation"/>
      )}
    </div>
  )
}