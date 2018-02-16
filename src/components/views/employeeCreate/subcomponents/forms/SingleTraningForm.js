import React from 'react';
import { Input, ExpandableCard, Button, CardSection } from '../../../../common';


const SingleTraningForm = ({
  onPressExtension,
  isOpen,
  nameValue,
  nameOnChangeText,
  beginDateValue,
  beginDateOnChangeText,
  finishDateValue,
  finishDateOnChangeText,
  onPressDelete
}) => (
  <ExpandableCard
    onPress={onPressExtension}
    isOpen={isOpen}
    label={nameValue}
  >
    <CardSection style={{ flexDirection: 'column' }}>
      <Input
        label='name'
        placeholder='iOS App Development with Swift'
        value={nameValue}
        onChangeText={nameOnChangeText}
      />
      <Input
        label='Begin date'
        placeholder='FEB 2017'
        value={beginDateValue}
        onChangeText={beginDateOnChangeText}
        autoCapitalize='characters'
      />
      <Input
        label='Finish date'
        placeholder='MAR 2017'
        value={finishDateValue}
        onChangeText={finishDateOnChangeText}
        autoCapitalize='characters'
      />
      <Button
        redButton
        onPress={onPressDelete}
        style={{ marginTop: 10, marginBottom: 5 }}
      >
        Delete
      </Button>
    </CardSection>
  </ExpandableCard>
);

export default SingleTraningForm;
