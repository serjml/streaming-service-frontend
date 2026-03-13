import './Field.scss'
import clsx from 'clsx'
import getIdFromTitle from '@/utils/getIdFromTitle'

export default (props) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    /**
     * undefined (default) | 'email' | 'textarea'
     **/
    type,
    placeholder,
    isRequired,
    inputMode,
  } = props

  const Component = type === 'textarea' ? 'textarea' : 'input'

  return (
    <div
      className={clsx('field', className)}
    >
      <label
        className="field__label"
        htmlFor={id}
      >
        {label} {isRequired && (
        <span
          className="field__required-star"
          aria-hidden={true}
        >*</span>
      )}
      </label>
      <div className="field__body">
        <Component
          className="field__control"
          id={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          inputMode={inputMode}
        />
      </div>
    </div>
  )
}