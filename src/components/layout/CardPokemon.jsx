import React from 'react'
import { Container } from '@chakra-ui/react'
import {UseFetch} from '../../hooks/UseFetch'

export const CardPokemon = ({url}) => {
    const state = UseFetch(url)
    const {loading,data} = state
  
    return (
        <Container>
          {loading}?
          <h1>Cargando</h1>
          :
          <div className="cards" style={{width:'14rem'}}>
              <div className="card-header">
                  <h5 className="card-title"></h5>
              </div>
              <div className="card-body">
                  <img src="" alt="pokemon" />
              </div>
              <div className="card-footer">
                  <p className="card-text-capitalize"></p>
              </div>
              
          </div>
        </Container>
    )
}
