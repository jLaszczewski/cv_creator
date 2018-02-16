import React from 'react';
import { Input, ExpandableCard, Button, CardSection } from '../../../../common';

const SingleParamForm = ({
  onPressExtension,
  isOpen,
  activitiesValue,
  activitiesOnChangeText,
  quantityValue,
  quantityOnChangeText,
  onPressDelete
}) => (
  <ExpandableCard
    onPress={onPressExtension}
    isOpen={isOpen}
    label={activitiesValue}
  >
    <CardSection style={{ flexDirection: 'column' }}>
      <Input
        label='Quantity'
        placeholder='~100K+'
        value={quantityValue}
        onChangeText={quantityOnChangeText}
        autoCapitalize='characters'
      />
      <Input
        label='Activities'
        placeholder='DATABASE REQUEST'
        value={activitiesValue}
        onChangeText={activitiesOnChangeText}
        autoCapitalize='characters'
      />
      <Button
        onPress={onPressDelete}
        redButton
        style={{ marginTop: 10, marginBottom: 5 }}
      >
        Delete Parameter
      </Button>
    </CardSection>
  </ExpandableCard>
);

export default SingleParamForm;
