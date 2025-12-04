import './Categories.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'

export default (props) => {
  const {
    className,
  } = props

  return (
    <Section
      className={clsx('categories', className)}
      title="Explore our wide variety of categories"
      titleId="categories-titlw"
      description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      actions={(
        <div>
          <button type="button">back</button>
          <button type="button">forward</button>
        </div>
      )}
      isActionsHiddenOnMobile
    >
      Categories
    </Section>
  )
}