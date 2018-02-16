import React from 'react';
import { Input, ExpandableCard, SliderInput, Button, CardSection } from '../../../../common';

const SingleSkillForm = ({
  nameValue,
  isOpen,
  onPressExtension,
  nameOnChangeText,
  onSlidingComplete,
  slideValue,
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
        placeholder='iOS'
        value={nameValue}
        onChangeText={nameOnChangeText}
        autoCapitalize='none'
      />
      <SliderInput
        maximumValue={10}
        minimumValue={0}
        step={1}
        onSlidingComplete={onSlidingComplete}
        value={slideValue}
      />
      <Button
        onPress={onPressDelete}
        redButton
        style={{ marginTop: 10, marginBottom: 5 }}
      >
        Delete
      </Button>
    </CardSection>
  </ExpandableCard>
);

export default SingleSkillForm;
