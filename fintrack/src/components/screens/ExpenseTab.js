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
class ExpenseTab extends Component { render() { return (
      <Container>
        <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
          <Content>
            <Card noShadow={true}>
              <List style={{ marginTop: 10, fontSize: 18 }}>
                <ListItem>
                  <Text style={{ fontSize: 24, color: 'red' }}>-{this.props.amount}</Text>
                </ListItem>
                <ListItem>
                  <Body>
                    <Text>Category</Text>
                    <Text note>Wage</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Body>
                    <Text>Account</Text>
                    <Text note>No account</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ color: '#ccc'}}>
                  <Body>
                    <Text>Note</Text>
                    <Text note>Tap to add note</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ color: '#ccc'}}>
                  <Body>
                    <Text>Label</Text>
                    <Text note>Tap to add label</Text>
                  </Body>
                </ListItem>
              </List>
            </Card>
            <Button block success><Text>SAVE</Text></Button>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default ExpenseTab;
