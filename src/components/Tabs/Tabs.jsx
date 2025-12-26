import './Tabs.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
  } = props
  
  return (
    <div
      className={clsx('tabs', className)}
    >
      Tabs
    </div>
  )
}