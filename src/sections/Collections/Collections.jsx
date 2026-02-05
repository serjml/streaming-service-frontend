import './Collections.scss'
import clsx from 'clsx'
import Tabs from '@/components/Tabs'

export default (props) => {
  const {
    className,
  } = props

  return (
    <Tabs
      className="collection container"
      title="collections"
      isEnableOnlyOnMobile
    />
  )
}