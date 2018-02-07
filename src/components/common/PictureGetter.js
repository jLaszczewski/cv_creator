import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const emptyImage = require('../../public/icons/addPhoto/img.png');

class PictureGetter extends Component {
  // getSelectedImages(image) {
  //   if (image[0]) {
  //     console.log(image[0].uri);
  //   }
  // }
  //
  getImage() {
    Actions.getImage();
  }

  renderPhoto() {
    const { photoUri } = this.props;
    const { imageStyle, noImageStyle } = styles;

    if (photoUri) {
      return (
        <Image
          style={imageStyle}
          source={{ uri: photoUri }}
        />
      );
    }

    return (

      <Image
        style={[imageStyle, noImageStyle]}
        source={emptyImage}
      />
    );
  }

  render() {
      const { labelStyle, containerStyle, imageContainer } = styles;
      const { label } = this.props;

      return (
        <View style={containerStyle}>
          <Text style={labelStyle}>{label}</Text>
          <TouchableOpacity
            style={imageContainer}
            onPress={() => this.getImage()}
          >
            {this.renderPhoto()}
          </TouchableOpacity>
        </View>
      );
    }
  }

const styles = {
  imageContainer: {
    alignItems: 'center',
    flex: 2,
    marginTop: 10
  },

  noImageStyle: {
    resizeMode: 'center',
  },

  imageStyle: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
    borderRadius: 5
  },

  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export { PictureGetter };
