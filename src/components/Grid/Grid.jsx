import './Grid.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    columns = 1,
    children
  } = props

  return (
    <ul
      className={clsx('grid', {
        [`grid--${columns}`]: columns > 1,
      })}
    >
      {children.map((child, index) => (
        <li
          className="grid-item"
          key={index}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}