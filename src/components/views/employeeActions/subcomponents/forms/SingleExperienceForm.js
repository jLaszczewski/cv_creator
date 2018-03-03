import React from 'react';
import { Input, ExpandableCard, Button, CardSection } from '../../../../common';


const SingleExperienceForm = ({
  onPressExtension,
  isOpen,
  nameValue,
  nameOnChangeText,
  beginDateValue,
  beginDateOnChangeText,
  finishDateValue,
  finishDateOnChangeText,
  jobTitleValue,
  jobTitleOnChangeText,
  responsibilityValue,
  responsibilityOnChangeText,
  onPressDelete
}) => (
  <ExpandableCard
    onPress={onPressExtension}
    isOpen={isOpen}
    label={nameValue}
  >
    <CardSection style={{ flexDirection: 'column' }}>
      <Input
        label='Company name'
        placeholder='BCF Software Sp. z o.o.'
        value={nameValue}
        onChangeText={nameOnChangeText}
      />
      <Input
        label='Begin date'
        placeholder='JAN 2018'
        value={beginDateValue}
        onChangeText={beginDateOnChangeText}
        autoCapitalize='characters'
      />
      <Input
        label='Finish date'
        placeholder='MAR 2020'
        value={finishDateValue}
        onChangeText={finishDateOnChangeText}
        autoCapitalize='characters'
      />
      <Input
        label='Job title'
        placeholder='Software Developer'
        value={jobTitleValue}
        onChangeText={jobTitleOnChangeText}
      />
      <Input
        label='Responsibility'
        placeholder='learning, development and creating new applications related to company projects.'
        value={responsibilityValue}
        onChangeText={responsibilityOnChangeText}
        autoCapitalize='none'
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

export default SingleExperienceForm;
