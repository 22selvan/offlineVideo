import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import AuthuStack from './NavigationScreen'
import MyTabs from './TabNavigation'
import { AuthContext } from '../Context/AuthContext'

const AppNav = () => {
  const { userloggeduid, checkIsLogged } = useContext(AuthContext);

  useEffect(() => {
    checkIsLogged()
  }, [])
  console.log('From AppNav (UID333)', userloggeduid)
  return (
    <>
      {userloggeduid !== "1" ?
        <MyTabs />
        :
        <AuthuStack />
      }
    </>
  )
}

export default AppNav
