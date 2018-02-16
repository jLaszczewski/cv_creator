import React from 'react';
import { Input, ExpandableCard, Button, CardSection, Card } from '../../../../common';
import TechnologiesForm from './TechnologiesForm';
import StatsForm from './StatsForm';

const SingleProjectForm = ({
      onPressExtension,
      index,
      isOpen,
      nameValue,
      nameOnChangeText,
      descriptionValue,
      descriptionOnChangeText,
      technologies,
      isTechnologiesOpen,
      onPressTechnologiesExtension,
      stats,
      isStatsOpen,
      onPressStatsExtension,
      onPressDelete
    }) => (
        <Card
          style={{
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
        <ExpandableCard
          onPress={onPressExtension}
          isOpen={isOpen}
          label={nameValue || `Project ${index + 1}`}
        >
          <CardSection style={{ flexDirection: 'column' }}>
            <Input
              label='Project name'
              placeholder={`Project ${index + 1}`}
              value={nameValue}
              onChangeText={nameOnChangeText}
            />
            <Input
              label='Description'
              placeholder='Application shows how many bitcoins the user have. Application is working on a big data sets from blockchain API system. This application allows users to send and receive payments through API. Jakub wrote very smart, self-learning algorithms to interact with the blockchain API. Jakub did a research to find the best UX/UI practices.'
              value={descriptionValue}
              onChangeText={descriptionOnChangeText}
            />
            <TechnologiesForm
              index={index}
              technologies={technologies}
              isOpen={isTechnologiesOpen}
              onPressExtension={onPressTechnologiesExtension}
            />
            <StatsForm
              index={index}
              stats={stats}
              isOpen={isStatsOpen}
              onPressExtension={onPressStatsExtension}
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
        </Card>
    );

export default SingleProjectForm;
