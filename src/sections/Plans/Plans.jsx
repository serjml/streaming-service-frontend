import Section from '@/layouts/Section'
import PlanCard from '@/components/PlanCard'
import Grid from '@/components/Grid'
import planGroups from '@/sections/Plans/planGroups'
import TabsNavigation from '@/components/Tabs/components/TabsNavigation'
import Tabs from '@/components/Tabs'

export default () => {
  const tabsTitle = 'plans-tabs'
  const tabsNavigationId = 'plans-tab-navigation'

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="Plans-id"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      actions={(
        <TabsNavigation
          id={tabsNavigationId}
          title={tabsTitle}
          items={planGroups}
        />
      )}
    >
      <Tabs
        title={tabsTitle}
        navigationTargetElementId={tabsNavigationId}
        items={planGroups.map((planGroup) => ({
          title: planGroup.title,
          isActive: planGroup.isActive,
          children: (<Grid columns={3}>
            {planGroup.items.map((planItem, index) => (
              <PlanCard
                {...planItem}
                key={index}
              />
            ))}
          </Grid>)
        }))}
      />
    </Section>
  )
}