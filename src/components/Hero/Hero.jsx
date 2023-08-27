import { Button, Container, MainHeading } from '../../globalStyles'
import { ButtonWrapper, HeroButton, HeroSection, HeroText, HeroVideo } from './HeroStyles'
import { scrollTo } from '../Navbar/Navbar'

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="/assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>your data is secure with us</MainHeading>
				<HeroText>we provide the best security system for clients all over the world</HeroText>
				<ButtonWrapper>
					<Button onClick={() => scrollTo('about')}>Get Started</Button>
					<HeroButton onClick={() => scrollTo('content')}>Find More</HeroButton>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	)
}

export default Hero
