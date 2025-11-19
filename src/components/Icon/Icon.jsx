import './Icon.scss'
import clsx from 'clsx'
import { Icon as MinistaIcon } from 'minista'

export default (props) => {
  const {
    className,
    name,
    hasFill = false,
  } = props

  return (
    <span
      className={clsx(className, 'icon')}
    >
      <MinistaIcon
        iconId={name}
        fill={hasFill ? 'currentColor' : 'none'}
        stroke={hasFill ? 'none' : 'currentColor'}
      />
    </span>
  )
}