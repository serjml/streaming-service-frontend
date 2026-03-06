import './Seasons.scss'
import AccordionGroup from '@/components/AccordionGroup'
import seasonsitems from '@/components/Seasons/seasonsitems'
import Accordion from '@/components/Accordion'
import EpisodeCard from '@/components/EpisodeCard'

export default () => {


  return (
    <AccordionGroup
      className="seasons"
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
            isArrowButton
          >
            <ul className="seasons__list">
              {episodes.map((episode, index) => (
                <li
                  className="seasons__items"
                  key={index}
                >
                  <EpisodeCard
                    number={episode.number}
                    title={episode.title}
                    description={episode.description}
                    duration={episode.duration}
                    video={episode.video}
                  />
                </li>
              ))}
            </ul>
          </Accordion>
        )
      )}
    </AccordionGroup>
  )
}