import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles';

interface AccordionItemProps {
  title: string;
  content: string;
  isActive: boolean;
  onPress: () => void;
}

export default function AccordionItem({ title, content, isActive, onPress }: AccordionItemProps) {
  const [isPressed, setIsPressed] = useState(false);
  return(
  <View style={styles.item}>
    <TouchableOpacity onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={onPress}
        style={[
          styles.header,
          isPressed ? styles.pressed : {}
        ]}
        activeOpacity={1}
    >
      <Text style={styles.title}>{title}</Text>
      <FontAwesome6
        name={isActive ? "chevron-up" : "chevron-down"}
        size={20}
        color="#151515"
      />
    </TouchableOpacity>
    {isActive && <Text style={styles.content}>{content}</Text>}
  </View>
)};