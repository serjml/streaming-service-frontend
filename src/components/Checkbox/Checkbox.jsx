import './Checkbox.scss'
import clsx from 'clsx'
import getIdFromTitle from '@/utils/getIdFromTitle'

export default (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    isRequired,
  } = props

  return (
    <label
      className={clsx('checkbox', className)}
      htmlFor={id}
    >
      <input
        className="checkbox__input"
        id={id}
        type="checkbox"
        required={isRequired}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  )
}