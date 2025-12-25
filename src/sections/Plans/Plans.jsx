import Section from '@/layouts/Section'
import PlanCard from '@/components/PlanCard'
import Grid from '@/components/Grid'

export default () => {
  // const planCardItems =

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="Plans-id"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
    >
      <Grid columns={3}>

      </Grid>
      <PlanCard
        title="1"
        description="1"
        price={{value: '$9999', period: 'month'}}
      />
    </Section>
  )
}