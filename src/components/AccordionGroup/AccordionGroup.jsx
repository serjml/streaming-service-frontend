import './AccordionGroup.scss'
import clsx from 'clsx'


export default (props) => {
  const {
    columns = 1,
    children,
    isOrderedList = true,
  } = props

  const ListTag = isOrderedList ? 'ol' : 'ul'

  return (
    <ListTag
      className={clsx('accordion-group', {
        [`accordion-group-${columns}-columns`]: columns > 1,
        'accordion-group--has-counter': isOrderedList,
      })}
    >
      {children.map((child, index) => (
        <li
          className="accordion-group__item"
          key={index}
        >
          {child}
        </li>
      ))}
    </ListTag>
  )
}