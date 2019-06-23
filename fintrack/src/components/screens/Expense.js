import React, { Component } from 'react';
import { ImageBackground} from "react-native";
import bgImage from '../../../assets/background.jpg';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
class Expense extends Component { render() { return (
      <Container>
        <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
        <Header transparent style={{ marginTop: 20 }}>
          <Body style={{ marginLeft: 9 }}>
            <Title style={{ fontSize: 35 }}>Daily book</Title>
          </Body>
          <Left>
          <Button transparent onPress={() => alert("Show back panel")}>
            <Icon name='ios-arrow-back' style={{fontSize: 35, color: '#fff'}} />
          </Button>
          </Left>
          <Right>
            <Button transparent onPress={() => alert("Show list panel")}>
              <Icon name='ios-list' style={{fontSize: 35, color: '#fff'}} />
            </Button>
            <Button transparent onPress={() => alert("Show more panel")}>
              <Icon name='more' style={{fontSize: 35, color: '#fff'}} />
            </Button>
          </Right>
        </Header>
          <Content>
            <List>
              <ListItem itemDivider>
                <Text>2 transactions in total</Text>
              </ListItem>
              <ListItem>
                <Text>Total Income</Text>
              </ListItem>
              <ListItem itemDivider>
                <Text>Jun 13</Text>
              </ListItem>
              <ListItem>
                <Text>Wage</Text>
                <Text note>Income</Text>
              </ListItem>
            </List>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export { Expense };
