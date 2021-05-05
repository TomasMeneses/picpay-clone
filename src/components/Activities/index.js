import React from 'react';

import { Feather } from '@expo/vector-icons';

import { 
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  Details,
  Value,
  CardFooter,
  Divider,
  Date,
 } from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@tomas.meneses</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>
            Tomas Meneses
          </UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>
              R$ 50,00
            </Value>
            <Divider/>
            <Feather name="lock" color="#fff"/>
            <Date>há 1 ano</Date>
          </Details>
        </CardFooter>
      </Card>
    </Container>
  )
}
