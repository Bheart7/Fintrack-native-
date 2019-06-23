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
        DatePicker } from "native-base";
class Budget extends Component { render() { return (
      <Container>
        <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
        <Header transparent style={{ marginTop: 20 }}>
          <Body style={{ marginLeft: 9 }}>
            <Title style={{ fontSize: 35 }}>Budget</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>How much have you saved?</Text>
            </CardItem>
            <CardItem bordered button onPress={() => alert("Show wage panel")}>
              <Body>
                <Text>Today</Text>
              </Body>
              <Right>
              <Text>$0.00</Text>
              </Right>
            </CardItem>
            <CardItem bordered button onPress={() => alert("Show wage panel")}>
              <Body>
                <Text>This month</Text>
              </Body>
              <Right>
              <Text>$0.00</Text>
              </Right>
            </CardItem>
            <CardItem bordered button onPress={() => alert("Show wage panel")}>
              <Body>
                <Text>This year</Text>
              </Body>
              <Right>
              <Text>$0.00</Text>
              </Right>
            </CardItem>
            <CardItem footer bordered>
              <DatePicker />
            </CardItem>
          </Card>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export { Budget };
