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
        Thumbnail,
        List,
        ListItem,
        } from "native-base";
class Profile extends Component { render() { return (
      <Container>
      <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
        <Header transparent style={{ marginTop: 20 }}>
          <Body style={{ marginLeft: 9 }}>
            <Title style={{ fontSize: 35 }}>Profile</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => alert("Show more panel")}>
              <Icon name='chatboxes' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card noShadow={true} >
            <CardItem button onPress={() => alert("Show Daily trends panel")}>
              <Left style={{ margin: 10 }}>
                <Thumbnail style={{width: 80, height: 80 }} source={require('../../assets/Small.png')} />
                <Body>
                  <Text style={{ fontSize:21 }}>Sign in</Text>
                  <Text note>Help us create a better platform for you to manage your money.</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card noShadow={true}>
            <List>
               <ListItem iconLeft button onPress={() => alert("Show Daily trends panel")}>
                   <Icon name="list-box" style={{ color: '#000', marginRight: 10 }} />
                   <Text style={{ fontSize: 18 }}>Book Managementk</Text>
               </ListItem>
               <ListItem iconLeft button onPress={() => alert("Show Daily trends panel")}>
                   <Icon name="person-add" style={{ color: '#000', marginRight: 10 }} />
                   <Text style={{ fontSize: 18 }}>Invite member</Text>
               </ListItem>
               <ListItem iconLeft button onPress={() => alert("Show Daily trends panel")}>
                   <Icon name="ios-notifications" style={{ color: '#000', marginRight: 10 }} />
                   <Text style={{ fontSize: 18 }}>Reminder</Text>
               </ListItem>
               <ListItem iconLeft button onPress={() => alert("Show Daily trends panel")}>
                   <Icon name="logo-usd" style={{ color: '#000', marginRight: 10 }} />
                   <Text style={{ fontSize: 18 }}>Exchange Rate</Text>
               </ListItem>
            </List>
          </Card>
          <Card noShadow={true}>
            <List>
               <ListItem iconLeft button onPress={() => alert("Show Daily trends panel")}>
                   <Icon name="ios-heart" style={{ color: '#000', marginRight: 10 }} />
                   <Text style={{ fontSize: 18 }}>Rate Fintrack</Text>
               </ListItem>
               <ListItem iconLeft button onPress={() => alert("Show Daily trends panel")}>
                   <Icon name="ios-paper-plane" style={{ color: '#000', marginRight: 10 }} />
                   <Text style={{ fontSize: 18 }}>Share</Text>
               </ListItem>
               <ListItem iconLeft button onPress={() => alert("Show Daily trends panel")}>
                   <Icon name="help-circle" style={{ color: '#000', marginRight: 10 }} />
                   <Text style={{ fontSize: 18 }}>Questions</Text>
               </ListItem>
               <ListItem iconLeft button onPress={() => alert("Show Daily trends panel")}>
                   <Icon name="ios-happy" style={{ color: '#000', marginRight: 10 }} />
                   <Text style={{ fontSize: 18 }}>Feedback</Text>
               </ListItem>
               <ListItem iconLeft button onPress={() => alert("Show Daily trends panel")}>
                   <Icon name="cog" style={{ color: '#000', marginRight: 10 }} />
                   <Text style={{ fontSize: 18 }}>General Settings</Text>
               </ListItem>
            </List>
          </Card>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export { Profile };
