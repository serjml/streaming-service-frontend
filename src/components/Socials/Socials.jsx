import './Socials.scss'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {
  const {
    className,
    links
  } = props

  return (
    <div
      className={clsx('soc1als', className)}
    >
      <ul className="soc1al__list">
        {links.map(({ label, iconName}, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="soc1als__link"
              mode="black-10"
              href="/"
              target="_blank"
              label={label}
              isLabelHidden
              iconName={iconName}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}