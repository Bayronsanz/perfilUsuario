import { View, Text } from 'react-native'
import React from 'react'
import { usuario } from '../models/usuario'

export default function UsuarioDetalles(prop: usuario) {

  return (
    <View>
      <Text>edad usuario: {prop.edad} </Text>
      <Text>ciudad usuario: {prop.ciudad} </Text>
    </View>
  )
}