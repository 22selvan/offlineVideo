// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Announcement = () => {
//   return (
//     <View>
//       <Text>Announcement</Text>
//     </View>
//   )
// }

// export default Announcement

// const styles = StyleSheet.create({})

import React, { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FaceDetector } from 'expo-face-detector';

export default function Announcement() {
  const [profileImage, setProfileImage] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [profileFaces, setProfileFaces] = useState([]);
  const [currentFaces, setCurrentFaces] = useState([]);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    })();
  }, []);

  const detectFaces = async (uri, type) => {
    const options = { mode: FaceDetector.Constants.Mode.fast };
    const result = await FaceDetector.detectFacesAsync(uri, options);
    console.log(`Detected faces in ${type} image:`, result.faces);
    if (type === 'profile') {
      setProfileFaces(result.faces);
    } else {
      setCurrentFaces(result.faces);
    }
    if (profileFaces.length > 0 && currentFaces.length > 0) {
      compareFaces();
    }
  };

  const compareFaces = () => {
    // Add your face comparison logic here
    // For demonstration, let's assume a simple comparison where we consider it a match if both images have detected faces
    setMatch(profileFaces.length > 0 && currentFaces.length > 0);
  };

  const selectProfilePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
      detectFaces(result.uri, 'profile');
    }
  };

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setCurrentImage(result.uri);
      detectFaces(result.uri, 'current');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Select Profile Picture" onPress={selectProfilePicture} />
      <Button title="Take Picture" onPress={takePicture} />
      {profileImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: profileImage }} style={styles.image} />
          {profileFaces.map((face, index) => (
            <View
              key={index}
              style={[
                styles.faceBox,
                {
                  left: face.bounds.origin.x,
                  top: face.bounds.origin.y,
                  width: face.bounds.size.width,
                  height: face.bounds.size.height,
                },
              ]}
            />
          ))}
        </View>
      )}
      {currentImage && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: currentImage }} style={styles.image} />
          {currentFaces.map((face, index) => (
            <View
              key={index}
              style={[
                styles.faceBox,
                {
                  left: face.bounds.origin.x,
                  top: face.bounds.origin.y,
                  width: face.bounds.size.width,
                  height: face.bounds.size.height,
                },
              ]}
            />
          ))}
        </View>
      )}
      {match && <Text style={styles.matchText}>Match Found!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    resizeMode: 'contain',
  },
  faceBox: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 5,
  },
  matchText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
});
