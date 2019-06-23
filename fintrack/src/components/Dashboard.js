import React, { Component } from 'react';
import { ImageBackground} from "react-native";
import { Container, Header, Content, Footer, FooterTab, Button, Text, Icon } from 'native-base';
import bgImage from '../../assets/background.jpg';
class Dashboard extends Component {
  render() {
    return (
      <Container>
          <Footer>
            <FooterTab>
              <Button>
                <Icon name="ios-home" />
                <Text>Home</Text>
              </Button>
              <Button>
                <Icon name="pie" />
                <Text>Stats</Text>
              </Button>
              <Button active>
                <Icon active name="logo-usd" />
                <Text>Budget</Text>
              </Button>
              <Button>
                <Icon name="ios-person" />
                <Text>Profile</Text>
              </Button>
            </FooterTab>
          </Footer>
      </Container>
    );
  }
}

export { Dashboard };
