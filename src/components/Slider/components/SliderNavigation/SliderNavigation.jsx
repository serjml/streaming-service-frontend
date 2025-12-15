import './SliderNavigation.scss'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {
  const {
    className,
    id,
    hasPagination = true,
    /**
     * '' (default) | 'tile'
     */
    mode = '',
  } = props

  return (
    <div
      className={clsx('slider-navigation', className, {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode="black-10"
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
      />
      {hasPagination && (
        <div className="slider-navigation__pagination" />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode="black-10"
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
      />
    </div>
  )
}