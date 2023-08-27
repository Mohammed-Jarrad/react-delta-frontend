import { FaTimes } from 'react-icons/fa'
import { CgMenuRight } from 'react-icons/cg'
import { IconContext } from 'react-icons/'
import { MobileIcon, Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavMenu, NavLogo } from './NavbarStyles'
import { useLocation, useNavigate } from 'react-router-dom'
import { data } from '../../data/NavbarData'
import { useState } from 'react'


// eslint-disable-next-line react-refresh/only-export-components
export const scrollTo = id => {
	const element = document.getElementById(id)
	element.scrollIntoView({
		behavior: 'smooth',
	})
}

const Navbar = () => {
	const [show, setShow] = useState(false)

	const location = useLocation()
	const navigate = useNavigate()

	const handleClick = () => {
		setShow(p => !p)
	}
	const closeMobileMenu = (to, id) => {
		if (id && location.pathname == '/') {
			scrollTo(id)
		}
		navigate(to)
		setShow(false)
	}

	return (
		<IconContext.Provider value={{ color: '#fff' }}>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<NavIcon src="/assets/logo.png" alt="logo" />
						Delta
					</NavLogo>
					<MobileIcon onClick={handleClick}>{show ? <FaTimes /> : <CgMenuRight />}</MobileIcon>
					<NavMenu show={show ? 1 : 0}>
						{data.map((el, index) => (
							<NavItem key={index}>
								<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>{el.text}</NavLinks>
							</NavItem>
						))}
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</IconContext.Provider>
	)
}

export default Navbar
