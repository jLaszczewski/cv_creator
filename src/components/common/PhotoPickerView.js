import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { employeeUpdate } from '../../actions';
import { BASIC_INFORMATION_FORM } from '../../actions/types';


class PhotoPickerView extends Component {
  state = {
   num: 0,
   selected: []
  }

  getSelectedImages(images) {
    if (images[0]) {
      this.props.employeeUpdate({
        form: BASIC_INFORMATION_FORM,
        prop: 'photoUri',
        value: images[0].uri
      });

      this.setState({
        num: 0,
        selected: []
      });

      Actions.pop();
    }

    // if (images.length === 0) {
    //   Actions.pop();
    // }
  }

  render() {
    return (
      <CameraRollPicker
        assetType='Photos'
        maximum={1}
        callback={this.getSelectedImages.bind(this)}
      />
    );
  }
}

export default connect(null, { employeeUpdate })(PhotoPickerView);
