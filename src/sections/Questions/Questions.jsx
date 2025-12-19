import './Questions.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'
import Button from '@/components/Button'

export default (props) => {
  const {
    className,
  } = props

  return (
    <Section
      title="Frequently Asked Questions"
      titleId="question-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions={(
        <Button
          label="Ask a Question"
          href="/support"
        />
      )}
    >
      Questions
    </Section>
  )
}