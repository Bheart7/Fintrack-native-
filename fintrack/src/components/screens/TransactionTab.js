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
        Icon,
        Item,
        Input,
        Label
       } from 'native-base';
import { ImageBackground} from "react-native";
import bgImage from '../../../assets/background.jpg';
import { PickerIcon } from '../common';

class TransactionTab extends Component {

  constructor(props){
    super(props);
    this.state={
      pickerItems:[
      {
        id:0,
        label: 'Wage',
        value: 'wage',
     },
     {
       id:1,
       label: 'Food And Drinks',
       value: 'foodAndDrink',
     },
     {
       id:2,
       label: 'Transport',
       value: 'transport',
     },
     {
       id:3,
       label: 'Kitchen',
       value: 'kitchen',
     },
     {
       id:4,
       label: 'Rent',
       value: 'rent',
     },
     {
       id:5,
       label: 'Study',
       value: 'study',
     },
     {
       id:6,
       label: 'Miscellaneous',
       value: 'miscellaneous',
     },
      ]
    }
  }
  render() {
    const pickerItems = [


    ];
     return (
      <Container>
        <ImageBackground source={ bgImage } style={{ width: '100%', height: '100%' }}>
          <Content>
            <Card noShadow={true}>
              <List style={{ marginTop: 10, fontSize: 18 }}>
                <ListItem onPress={() => alert("add transactions to the panel")}>
                  <Text style={{ fontSize: 24, color: 'red' }}>{this.props.amount}</Text>
                </ListItem>
                <ListItem>
                  <Body>
                    <Text>Category</Text>
                    <PickerIcon pickerItems={this.state.pickerItems}/>
                  </Body>
                </ListItem>
                <ListItem onPress={() => alert("add transactions to the panel")}>
                  <Body>
                    <Text>Account</Text>
                    <Text note>No account</Text>
                  </Body>
                </ListItem>
                <ListItem style={{ color: '#ccc'}} onPress={() => alert("add transactions to the panel")}>
                  <Body>
                    <Text>Note</Text>
                    <Item>
                      <Input placeholder="Tap to add note" />
                    </Item>
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

export default TransactionTab ;
