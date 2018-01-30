import React from 'react';
import { ScrollView, StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

import { DrawerItems, SafeAreaView } from 'react-navigation';

import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#999999',
    opacity: 0.33,
  },
  header: { height: 160 },
  headerName: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 1,
  },
  headerEmail: { color: 'white', fontSize: 12 },
  headerPicture: {
    width: 70,
    height: 70,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: 'white',
  },
});

function CustomDrawerContentComponent(props) {
  return (
    <ScrollView>
      <ImageBackground
        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
        // resizeMode="cover"
        style={styles.header}
      >
        {/* <View style={styles.imageOverlay} /> */}
        <LinearGradient
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.25)']}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            paddingBottom: 8,
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image
              source={require('../../../assets/images/placeholder.png')}
              style={styles.headerPicture}
            />
          </View>
          <View style={{ height: 56, justifyContent: 'flex-end' }}>
            <Text style={styles.headerName}>Guilherme Cavichioli</Text>
            <Text style={styles.headerEmail}>cavichioli.guilherme@gmail.com</Text>
          </View>
        </View>
      </ImageBackground>

      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
}

export default CustomDrawerContentComponent;
