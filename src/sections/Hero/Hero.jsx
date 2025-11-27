import './Hero.scss'

export default (props) => {
  const playButtonTitle = 'Play Video'

  return (
    <section
      className="hero"
      aria-labelledby="gero-title"
    >
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button
            class="hero__play-button"
            type="button"
            aria-label={playButtonTitle}
            title={playButtonTitle}
          >
            <img
              class="hero__play-button-image"
              src="/play.svg"
              alt=""
              width="470"
              height="470"
            />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container"></div>
      </div>
    </section>
  )
}