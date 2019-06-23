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
        Icon } from "native-base";
class Stats extends Component {
  render() { return (

      <Container style={{ backgroundColor: '#CCC' }}>
        <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
        <Header transparent style={{ marginTop: 20 }}>
          <Body style={{ marginLeft: 9}}>
            <Title style={{ fontSize: 35 }}>Stats</Title>
          </Body>
        </Header>
        <Content>
          <Card noShadow={true} >
            <CardItem button onPress={() => alert("Show Daily trends panel")}>
              <Left style={{ margin: 10 }}>
                <Icon name='trending-up' style={{fontSize: 35, color: '#000', marginRight: 15}} />
                <Body>
                  <Text style={{ fontSize:21 }}>Daily Trends</Text>
                  <Text note>View daily stats for a month </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card noShadow={true} >
            <CardItem button onPress={() => alert("Show Week expense panel")}>
              <Left style={{ margin: 10 }}>
                <Icon name='ios-analytics' style={{fontSize: 38, color: '#000', marginRight: 15}} />
                <Body>
                  <Text style={{ fontSize:21 }}>One-week expense</Text>
                  <Text note>View weekly spend report </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card noShadow={true} >
            <CardItem button onPress={() => alert("Show monthly category stats panel")}>
              <Left style={{ margin: 10 }}>
                <Icon name='ios-analytics' style={{fontSize: 38, color: '#000', marginRight: 15}} />
                <Body>
                  <Text style={{ fontSize:21 }}>Monthly Category Stats</Text>
                  <Text note>View category stats within one month</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card noShadow={true} >
            <CardItem button onPress={() => alert("Show Annual Category Stats panel")}>
              <Left style={{ margin: 10 }}>
                <Icon name='ios-analytics' style={{fontSize: 38, color: '#000', marginRight: 15}} />
                <Body>
                  <Text style={{ fontSize:21 }}>Annual Category Stats</Text>
                  <Text note>View category stats within one year </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card noShadow={true} >
            <CardItem button onPress={() => alert("Show annual income and expense panel")}>
              <Left style={{ margin: 10 }}>
                <Icon name='stats' style={{fontSize: 35, color: '#000', marginRight: 15}} />
                <Body>
                  <Text style={{ fontSize:21 }}>Annual Income/Expense stats</Text>
                  <Text note>View monthly income & stats for one year </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card noShadow={true} >
            <CardItem button onPress={() => alert("Show monthly income and stats for a category panel")}>
              <Left style={{ margin: 10 }}>
                <Icon name='stats' style={{fontSize: 35, color: '#000', marginRight: 15}} />
                <Body>
                  <Text style={{ fontSize:21 }}>Categorical Stats</Text>
                  <Text note>View monthly income & stats for category </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card noShadow={true} >
            <CardItem button onPress={() => alert("Show Projects Stats panel")}>
              <Left style={{ margin: 10 }}>
                <Icon name='aperture' style={{fontSize: 35, color: '#000', marginRight: 15}} />
                <Body>
                  <Text style={{ fontSize:21 }}>Projects stats</Text>
                  <Text note>View category stats within a project </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export { Stats };
