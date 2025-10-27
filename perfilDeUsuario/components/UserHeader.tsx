import { View, Text } from 'react-native'
import React from 'react'
import { usuario } from '../models/usuario'



export default function UserHeader(prop: usuario) {
  return (
    <View>
      <Text>encabezado nombre: {prop.nombre} </Text>
      <Text>encabezado ocupacion: {prop.ocupacion} </Text>
    </View>
  )
}