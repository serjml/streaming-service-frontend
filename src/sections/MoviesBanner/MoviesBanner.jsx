import './MoviesBanner.scss'

export default (props) => {
  const titleId = 'movies-banner-title'

  return (
    <section
      className="movies-banner container"
      aria-labelledby={titleId}
    >
      <h1
        className="visually-hidden"
        id={titleId}
      >
        Movies & Shows
      </h1>
    </section>
  )
}