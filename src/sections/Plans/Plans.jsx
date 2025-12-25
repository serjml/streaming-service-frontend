import Section from '@/layouts/Section'
import PlanCard from '@/components/PlanCard'
import Grid from '@/components/Grid'
import planGroups from '@/sections/Plans/planGroups'

export default () => {
  // const planCardItems =

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="Plans-id"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
    >
      <Grid columns={3}>
        {planGroups[0].items.map((planItem, index) => (
          <PlanCard
            {...planItem}
            key={index}
          />
        ))}
      </Grid>
    </Section>
  )
}