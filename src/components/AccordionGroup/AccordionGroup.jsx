import './AccordionGroup.scss'
import clsx from 'clsx'


export default (props) => {
  const {
    columns = 1,
    children,
    isOrderedList = true,
  } = props

  const itemPerColumn = Math.ceil(children.length / columns)
  const ListTag = isOrderedList ? 'ol' : 'ul'

  return (
    <ListTag
      className={clsx('accordion-group', {
        [`accordion-group--${columns}-columns`]: columns > 1,
        'accordion-group--has-counter': isOrderedList,
      })}
    >
      {children.map((child, index) => (
        <li
          className={clsx('accordion-group__item', {
            'accordion-group__item--last-column-item': columns > 1 && itemPerColumn / (index + 1) === 1,
          })}
          key={index}
        >
          {child}
        </li>
      ))}
    </ListTag>
  )
}