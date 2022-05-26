import Link from "next/link"
import Image from 'next/image'
import {Text} from "@chakra-ui/react"
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 40px;
    line-height: 20px;
    padding: 10px;
    transition: transform .4s;
    &:hover {
        transform: scale(1.1)
    }
`

const Logo = (props) => {
    const {imgSize, textSize} = props
    return(
        <Link href='/'>
            <a>
                <LogoBox>
                    <Image src='/logo.png' width={imgSize} height={imgSize} alt="logo"/>
                    <Text fontSize={textSize} color='#191919' fontWeight='600' ml={3} align='center'>LikePizza</Text>
                </LogoBox>
            </a>
        </Link>
    )
}

Logo.defaultProps = {imgSize: '25', textSize: 'md'}

export default Logo