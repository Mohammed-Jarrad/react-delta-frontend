import { Container, Section } from '../../globalStyles'
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
} from './FeaturesStyles.js'
import { featuresData } from '../../data/FeaturesData'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const Features = () => {
	const initial = { y: 100, opacity: 0 }
	const { ref, inView } = useInView({ threshold: 0.2 })
	const animate = useAnimation()

	useEffect(() => {
		if (inView) animate.start({ y: 0, opacity: 1 })
	}, [animate, inView])

	return (
		<Section smpadding="50px 10px" position="relative" inverse={1} id="about" ref={ref}>
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>What we offer</FeatureTitle>
				</FeatureTextWrapper>

				<FeatureWrapper>
					{featuresData.map((el, index) => (
						<FeatureColumn
							key={index}
							initial={initial}
							animate={animate}
							transition={{
								duration: 0.5 + index * 0.1,
							}}
						>
							<FeatureImageWrapper className={el.imgClass}>{el.icon}</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</Section>
	)
}

export default Features
