import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Routes from './src/navigation/Routes'
import { ArtistContext, ArtistProvider } from './src/context/ArtistsContext'
import { AlbumProvider } from './src/context/AlbumContext'
import { ProfileProvider } from './src/context/ProfileContext'


const App = () => {
  return (
    <ProfileProvider>
      <ArtistProvider>
        <AlbumProvider>
          <Routes />
        </AlbumProvider>
      </ArtistProvider>
    </ProfileProvider>

  )
}

export default App