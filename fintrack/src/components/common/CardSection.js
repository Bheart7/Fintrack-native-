import React from "react";
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
        Icon
         } from "native-base";
const CardSection = ({ onPress, iconName, header, textNote }) =>{
  return (
    <Card noShadow={true} >
      <CardItem button onPress={onPress}>
        <Left style={{ margin: 10 }}>
          <Icon name={iconName} style={{fontSize: 35, color: '#000', marginRight: 15}} />
          <Body>
            <Text style={{ fontSize:21 }}>{header}</Text>
            <Text note>{textNote}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>

  );
}

export { CardSection };
