import React, { Component } from 'react'
import Header from '../components/Header';
import { TitleBanner, DescriptionBanner, Banner, InfoBanner, InfoBannerContainer } from '../resources/styles/home';
import { ButtonPrimaryBig, ButtonSecondaryOutline } from '../resources/styles/buttons';
import { margin } from '../resources/styles/utils';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Banner>
          <Header />
          <InfoBannerContainer>
            <InfoBanner>
              <TitleBanner>Manage, get in touch and get more clients.</TitleBanner>
              <DescriptionBanner>Konecty is a CRM Tool focused on offering users facility, flexibility and speed, allowing customization and development of new applications.</DescriptionBanner>
              <ButtonPrimaryBig>Watch Demo ></ButtonPrimaryBig>
              <ButtonSecondaryOutline style={margin.left}>Contact Us</ButtonSecondaryOutline>
            </InfoBanner>
          </InfoBannerContainer>
        </Banner>

        Main
      </div>
    )
  }
}
