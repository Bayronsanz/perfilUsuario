import { View, Text } from 'react-native'
import React from 'react'
import { usuario } from '../models/usuario'
import UserHeader from './userHeader'
import UsuarioDetalles from './usuarioDetalles'

interface Props{
    usuario: usuario
}

export default function UsuarioPerfil({usuario}: Props) {
    return (
        <View>
            <Text>Perfil de los usuarios</Text>
            <UserHeader nombre={usuario.nombre} ocupacion={usuario.ocupacion} edad={usuario.edad} ciudad={usuario.ciudad}></UserHeader>
            <UsuarioDetalles nombre='' ciudad={''} ocupacion={''}></UsuarioDetalles>
        </View>
    )
}