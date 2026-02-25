import './ShowBanner.scss'
import MovieBannerCard from '@/components/MovieBannerCard'

export default (props) => {
  const titleId = 'show-banner-title'

  return (
    <section
      className="container"
      TitleTag="h1"
      titleId={titleId}
      aria-labelledby={titleId}
      imgSrc="/src/assets/images/movie-banner/3.jpg"
      isSmallPaddingY
    >
      <MovieBannerCard
        title="Stranger Things"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
      />
    </section>
  )
}