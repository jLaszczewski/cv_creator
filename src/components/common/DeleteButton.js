import React from 'react';
import {
  Image,
  TouchableWithoutFeedback
} from 'react-native';

const deleteImage = require('./icons/deleteButton/img.png');

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <Image source={deleteImage} />
    </TouchableWithoutFeedback>
  );
};

export { DeleteButton };
