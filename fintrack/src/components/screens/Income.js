import React, { Component } from 'react';
import {
        Container,
        List,
        ListItem,
        TextContainer,
        Header,
        Content,
        Card,
        CardItem,
        Text,
        Body,
        Left,
        Right,
        Button,
        Title,
        Icon } from 'native-base';
import { ImageBackground} from "react-native";
import bgImage from '../../../assets/background.jpg';
class Income extends Component { render() { return (
      <Container>
        <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
        <Header transparent style={{ marginTop: 20 }}>
          <Left>
          <Button transparent onPress={() => alert("Show back panel")}>
            <Icon name='ios-arrow-back' style={{fontSize: 35, color: '#fff'}} />
          </Button>
          </Left>
          <Body style={{ marginLeft: 4 }}>
            <Title style={{ fontSize: 35 }}>Income</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => alert("Show delete panel")}>
              <Icon name='trash' style={{fontSize: 35, color: '#fff'}} />
            </Button>
          </Right>
        </Header>
          <Content>
            <Card noShadow={true}>
              <List style={{ marginTop: 10, fontSize: 18 }}>
                <ListItem>
                  <Text>Category</Text>
                  <Text note>Wage</Text>
                </ListItem>
                <ListItem>
                  <Text>Account</Text>
                  <Text note>No account</Text>
                </ListItem>
                <ListItem>
                  <Text note>Date</Text>
                  <Text> Jun 11 Thu</Text>
                </ListItem>
                <ListItem>
                  <Text>Time</Text>
                  <Text note>18:13</Text>
                </ListItem>
                <ListItem style={{ color: '#ccc'}}>
                  <Text>Note</Text>
                  <Text note>Tap to add note</Text>
                </ListItem>
                <ListItem style={{ color: '#ccc'}}>
                  <Text>Project</Text>
                  <Text note>Tap to add Project</Text>
                </ListItem>
                <ListItem style={{ color: '#ccc'}}>
                  <Text>Merchant</Text>
                  <Text note>Tap to add Merchant</Text>
                </ListItem>
                <ListItem style={{ color: '#ccc'}}>
                  <Text>Label</Text>
                  <Text note>Tap to add label</Text>
                </ListItem>
              </List>
            </Card>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export { Income };
