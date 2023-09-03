import './style.css'
import { FC } from 'react'

interface IHero {
	title: string
}

const Hero: FC<IHero> = ({ title }) => {
	return (
		<div className='hero'>
			<h1>{title}</h1>
		</div>
	)
}

export default Hero
