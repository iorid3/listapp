import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styled from '@emotion/styled';

interface CardProps {
  listTitle?: string;
  listWord?: string;
  onclick?: () => void;
}

const Container = styled.div({
  width: '70%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: 5,
  background: 'white',
  border: '1px solid black',
  borderRadius: 10,
  margin: 10,
  '&:hover': {
    boxShadow: '1px 1px 2px 2px grey;',
  },
});

const Title = styled.div({
  width: '90%',
  height: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const Words = styled.div({
  width: '90%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function Card({
  listTitle = 'Title',
  listWord = 'Lorem Ipsum',
  onclick = () => {},
}: CardProps): JSX.Element {
  return (
    <Container onClick={onclick}>
      <Title>Title:{listTitle}</Title>
      <Words>Content:{listWord}</Words>
    </Container>
  );
}