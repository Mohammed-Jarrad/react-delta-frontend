import Carousel from '../components/Carousel/Carousel'
import Content from '../components/Content/Content'
import Features from '../components/Features/Features'
import Hero from '../components/Hero/Hero'
import { heroOne, heroThree, heroTwo } from '../data/HeroData'

const Home = () => {
	return (
		<>
			<Hero />
			<Features />
			<Content alt={'hero one image'} {...heroOne} />
			<Content alt={'hero two image'} {...heroTwo} />
			<Content alt={'hero three image'} {...heroThree} />
			<Carousel />
		</>
	)
}

export default Home
