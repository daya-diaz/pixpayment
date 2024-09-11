import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>>;

type LinkButtonProps = {
  IconRight?: IconComponent,
  iconRightName?: string,
  text: string,
  onPress: () => void;
};
export default function LinkNavigation(props: LinkButtonProps) {
  const { IconRight, iconRightName, text, onPress, ...rest } = props;

  return(
    <TouchableOpacity activeOpacity={0.6} style={styles.linkButton} onPress={onPress} {...rest}>
       <View style={styles.container}>
       <Text style={styles.text}>{text}</Text>
        {
            IconRight && iconRightName && (
              <TouchableOpacity>
                <IconRight name={iconRightName as any} size={20} style={styles.icon} />
              </TouchableOpacity>
            )
          }
       </View>
    </TouchableOpacity>
  )
}