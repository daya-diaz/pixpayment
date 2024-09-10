import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './styles';

interface AccordionItemProps {
  title: string;
  content: string;
  isActive: boolean;
  onPress: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isActive, onPress }) => (
  <View style={styles.item}>
    <TouchableOpacity onPress={onPress} style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <FontAwesome6
        name={isActive ? "chevron-up" : "chevron-down"}
        size={20}
        color="#151515"
      />
    </TouchableOpacity>
    {isActive && <Text style={styles.content}>{content}</Text>}
  </View>
);

export default AccordionItem;