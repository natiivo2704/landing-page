import React from "react"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa"
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import logo from "../../assets/images/logo_white.svg"
const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon src={logo} alt="logo" />
            Natiivo 2704
          </SocialLogo>
          <WebsiteRights>
            <OutboundLink href="https://www.airbnb.com/rooms/657873824599504532">
              Natiivo 2704
            </OutboundLink>{" "}
            &copy; {new Date().getFullYear()}.
          </WebsiteRights>
          <SocialIcons>
            {/* <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Linkedin"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialIconLink> */}
            <SocialIconLink
              href="mailto:natiivo2704@gmail.com"
              target="_blank"
              aria-label="Email"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
