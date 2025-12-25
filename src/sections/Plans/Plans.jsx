import Section from '@/layouts/Section'
import PlanCard from '@/components/PlanCard'

export default () => {
  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="Plans-id"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
    >
      <PlanCard
        title="1"
        description="1"
        price={{value: '$9999', period: 'month'}}
      />
    </Section>
  )
}