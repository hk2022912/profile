import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/LOGO.jpg')}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',      
    top: 290,                  
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 200, 
    height: 200,
    borderRadius: 100,
    borderWidth: 3,            
    borderColor: '#EBEBEB', 
    marginTop: -100,
  },

});

export default Avatar;
      




