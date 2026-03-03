import './Seasons.scss'
import AccordionGroup from '@/components/AccordionGroup'
import seasonsitems from '@/components/Seasons/seasonsitems'
import Accordion from '@/components/Accordion'

export default () => {


  return (
    <AccordionGroup
      mode="dark"
      isOrderedList={false}
    >
      {seasonsitems.map(({title, subtitle, episodes}, index) => (
          <Accordion
            title={title}
            titleLevelClassName="h4"
            subtitle={subtitle}
            id={`season-${index}`}
            name="seasons"
            isOpen={index === 0}
            key={index}
          >

          </Accordion>
        )
      )}
    </AccordionGroup>
  )
}