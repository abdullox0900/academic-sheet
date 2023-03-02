import { Container } from "../container/container"
import { HeaderLogo, HeaderWrap } from "./Style"

function Header() {
    return (
        <Container>
            <HeaderWrap>
                <HeaderLogo>Academy sheet</HeaderLogo>
            </HeaderWrap>
        </Container>
    )
}

export default Header