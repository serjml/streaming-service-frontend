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
    /**
     * ''(default) | 'abs-bottom'
     */
    position = '',
    isHiddenMobile
  } = props

  return (
    <div
      className={clsx('slider-navigation', className, {
        [`slider-navigation--${mode}`]: mode,
        [`slider-navigation--${position}`]: position,
        'hidden-mobile': isHiddenMobile
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode="black-10"
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-previous-button': '',
        }}
      />
      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode="black-10"
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-next-button': '',
        }}
      />
    </div>
  )
}