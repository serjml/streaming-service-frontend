import './Badge.scss'
import clsx from 'clsx'

export default (
  {
    className,
    /**
     * ''(default) | 'accent'
     */
    mode = '',
    isBig = false,
    children
  }
) => {
  return (
    <div
      className={clsx(className, 'badge', {
        [`badge--${mode}`]: mode,
        'badge--big': isBig,
      })}
    >
      {children}
    </div>
  )
}