import React, { Component } from "react";
import { ImageBackground} from "react-native";
import bgImage from '../../assets/background.jpg';
import {
        Container,
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
        Icon,
        Fab } from "native-base";
class Home extends Component { render() { return (
      <Container>
        <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
        <Header transparent style={{ marginTop: 20 }}>
          <Body style={{ marginLeft: 9 }}>
            <Title style={{ fontSize: 35 }}>Daily book</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => alert("Show search panel")}>
              <Icon name='search' style={{fontSize: 35, color: '#fff'}} />
            </Button>
            <Button transparent onPress={() => alert("Show more panel")}>
              <Icon name='more' style={{fontSize: 35, color: '#fff'}} />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Recent Transactions</Text>
            </CardItem>
            <CardItem button onPress={() => alert("Show wage panel")}>
              <Body>
                <Text>Wage</Text>
                <Text note>Income</Text>
              </Body>
              <Right>
              <Text>$28.00</Text>
              <Text note>1 week ago</Text>
              </Right>
            </CardItem>
            <CardItem button onPress={() => alert("Show transactions panel")}>
              <Text>All Transactions</Text>
            </CardItem>
            <CardItem footer bordered>
              <Text>Income and expense</Text>
            </CardItem>
            <CardItem button onPress={() => alert("Show week panel")}>
              <Body>
                <Text>This week</Text>
                <Text note>Jun 9 - Jun 15</Text>
              </Body>
              <Right>
              <Text>$0.00</Text>
              <Text>$0.00</Text>
              </Right>
            </CardItem>
            <CardItem button onPress={() => alert("Show month panel")}>
              <Body>
                <Text>This month</Text>
                <Text note>Jun 9 - Jun 15</Text>
              </Body>
              <Right>
              <Text>$0.00</Text>
              <Text>$0.00</Text>
              </Right>
            </CardItem>
            <CardItem button onPress={() => alert("Show year panel")}>
              <Body>
                <Text>This year</Text>
                <Text note>Jan 1 - Dec 31</Text>
              </Body>
              <Right>
              <Text>$0.00</Text>
              <Text>$0.00</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Fab
          style={{ backgroundColor: 'blue', marginBottom: 20 }}
          position="bottomRight"
          onPress={() => alert("Show input panel")}>
          <Icon ios='ios-add' android="md-add" style={{fontSize: 35, color: '#fff'}} />
        </Fab>
        </ImageBackground>
      </Container>
    );
  }
}

export { Home };
