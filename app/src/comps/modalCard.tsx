import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
  width:'80%',
  height:'100%',
  minHeight:'300px',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  background: 'white',
  border:'1px solid black',
  borderRadius: 10,
  '&:hover': {
    boxShadow:' 1px 1px 2px 2px grey;'
  }
});

const Title  = styled.div({
  width:'90%',
  height:'10%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  margin:10
});

const UserId  = styled.div({
  width:'90%',
  height:'10%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
});

const Id  = styled.div({
  width:'90%',
  height:'10%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
});

const Words  = styled.div({
  width:'90%',
  height:'50%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
});

interface CardProps {
  listTitle?: string;
  listWord?: string;
  listUserId?: string;
  listId?: string;
  onclick?: () => void;
}

export default function Card({
  listTitle = 'Title',
  listWord = 'Lorem Ipsum',
  listUserId = '000',
  listId= '000',
  onclick
}: CardProps): JSX.Element {
  return (
    <Container onClick={onclick}>
      <UserId>UserId:{listUserId}</UserId>
      <Id>Id:{listId}</Id>
      <Title>Title:{listTitle}</Title>
      <Words>Content:{listWord}</Words>
    </Container>
  );
}