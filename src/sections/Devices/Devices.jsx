import './Devices.scss'
import clsx from 'clsx'
import Section from '@/layouts/Section'

export default (props) => {
  const {
    className,
  } = props

  return (
    <Section
      className={clsx('devices', className)}
      title="We Provide you streaming experiencve across various devices."
      titleId="devices-title"
      description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
    >

    </Section>
  )
}