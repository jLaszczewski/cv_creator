import React from 'react';
import { Input, ExpandableCard, Button, CardSection } from '../../../../common';


const SingleSchoolForm = ({
  onPressExtension,
  isOpen,
  degreeValue,
  degreeOnChangeText,
  beginDateValue,
  beginDateOnChangeText,
  finishDateValue,
  finishDateOnChangeText,
  schoolValue,
  schoolOnChangeText,
  onPressDelete
}) => (
  <ExpandableCard
    onPress={onPressExtension}
    isOpen={isOpen}
    label={degreeValue}
  >
    <CardSection style={{ flexDirection: 'column' }}>
      <Input
        label='Degree'
        placeholder='BSc in Automatic Control and Robotics'
        value={degreeValue}
        onChangeText={degreeOnChangeText}
      />
      <Input
        label='Begin date'
        placeholder='2012'
        value={beginDateValue}
        onChangeText={beginDateOnChangeText}
        autoCapitalize='characters'
      />
      <Input
        label='Finish date'
        placeholder='2016'
        value={finishDateValue}
        onChangeText={finishDateOnChangeText}
        autoCapitalize='characters'
      />
      <Input
        label='School name'
        placeholder='Opole University of Technology'
        value={schoolValue}
        onChangeText={schoolOnChangeText}
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

export default SingleSchoolForm;
