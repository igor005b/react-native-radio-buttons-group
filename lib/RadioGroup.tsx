import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { RadioButton, RadioButtonProps, RadioGroupProps } from './index';

export default function RadioGroup({ layout = 'column', onPress, radioButtons, color, selectedColor, labelStyle, reset }: RadioGroupProps) {

  const [radioButtonsArray, setRadioButtonsArray] = useState<RadioButtonProps[]>(radioButtons);

  function handlePress(id: string) {
    for (const button of radioButtonsArray) {
      if (button.selected && button.id === id) return;
      button.selected = button.id === id;
    }
    setRadioButtonsArray([...radioButtonsArray]);
    if (onPress) {
      onPress(radioButtonsArray);
    }
  }

  function resetRadioGroup() {
    setRadioButtonsArray(data => data.map(item => {
      if(item.hasOwnProperty('selected')) {
          return { ...item, selected: false };
      } else {
          return item;
      }
    }));
  }

  useEffect(() => {
    resetRadioGroup();
  }, [reset]);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: layout }}>
        {radioButtonsArray.map((button) => (
          <RadioButton
            {...button}
            labelStyle={labelStyle}
            selectedColor={selectedColor}
            color={color || button.color}
            key={button.id}
            onPress={handlePress}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});
