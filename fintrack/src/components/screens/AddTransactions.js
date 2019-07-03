import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Button, Body, Title } from 'native-base';
import IncomeTab from './IncomeTab';
import ExpenseTab from './ExpenseTab';
import TransactionTab from './TransactionTab';
class AddTransactions extends Component {
  render() {
    return (
      <Container>
      <Header style={{ marginTop: 20 }}>
        <Left>
        <Button transparent onPress={() => alert("Show back panel")}>
          <Icon name='arrow-back' style={{fontSize: 35, color: '#fff'}} />
        </Button>
        </Left>
        <Body style={{ marginLeft: 9 }}>
          <Title style={{ fontSize: 20 }}>Add Transactions</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => alert("add transactions to the panel")}>
            <Icon name='checkmark' style={{fontSize: 35, color: '#fff'}} />
          </Button>
        </Right>
      </Header>
          <Tabs transparent>
            <Tab heading={ <TabHeading><Icon name="logo-usd" /><Text>Expense</Text></TabHeading>}>
              <TransactionTab amount='-$0.00' />
            </Tab>
            <Tab heading={ <TabHeading><Icon name="card" /><Text>Income</Text></TabHeading>}>
              <TransactionTab amount='$0.00'/>
            </Tab>
          </Tabs>
      </Container>
            );
          }
        }

export { AddTransactions };
