import React from 'react'
import {Container,Image} from '@chakra-ui/react'
import test from './../../assets/test.png'
import error from './../../assets/error.png'
export const ErrorPage = () => {
  return (
      

      <Image src={error} pos="absolute" w="100vw" top="0"></Image>

  )
}
