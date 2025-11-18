import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    loading = 'lazy'
  } = props
  const title = 'Home'

  return (
    <a
      className={clsx(className, "logo")}
      href="/public"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/logo.svg"
        alt=""
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}