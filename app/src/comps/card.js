import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  width:'70%',
  height:'100%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
  paddingRight: 5,
  background: 'white',
  border:'1px solid black',
  borderRadius: 10,
  margin:10,
  '&:hover': {
    boxShadow:' 1px 1px 2px 2px grey;'
  }
})

const Title  = styled.div({
  width:'90%',
  height:'80%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',

})

const Words  = styled.div({
  width:'90%',
  height:'100%',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center',
})



// const Enable = styled.p({
//   fontSize: '14px',
//   margin: 0,
//   paddingRight: 5
// }, (props) => ({
//   color: props.color
// }))

export default function Card({
  listTitle = 'Title',
  listWord = 'Lorem Ipsum',
  listId= '',
  listUserId = '',
  onclick =()=>{}
}) {
    return (
        <Container onClick={onclick}>
          <Title>Title:{listTitle}</Title>
          <Words>Content:{listWord}</Words>
        </Container>
    )
  }







