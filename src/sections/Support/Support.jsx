import './Support.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
  } = props

  return (
    <div
      className={clsx('support', className)}
    >
      Support
    </div>
  )
}