import './Tabs.scss'
import clsx from 'clsx'
import getIdFromTitle from '@/utils/getIdFromTitle'

export default (props) => {
  const {
    className,
    title,
    items = [],
    navigationTargetElementId = null,
  } = props

  return (
    <div
      className={clsx('tabs', className)}
      data-js-tabs={JSON.stringify({navigationTargetElementId})}
    >
      {!navigationTargetElementId && (
        <div>TABS NAVIGATION</div>
      )}
      <div className="tabs__body">
        {items.map((item, index) => {
            const {
              title,
              children,
              isActive
            } = item

            const titleFormatted = getIdFromTitle(title)
            const buttonId = `${titleFormatted}-tab`
            const contentId = `${titleFormatted}-tabpanel`

            return (
              <div
                className={clsx('tabs__content', {
                  'is-active': isActive,
                })}
                id={contentId}
                aria-labelledby={buttonId}
                tabIndex={0}
                data-js-tabs-content=""
                key={index}
              >
                {children}
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}