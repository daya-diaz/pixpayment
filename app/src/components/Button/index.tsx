import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>>;

type ButtonProps = TouchableOpacityProps & {
  IconRight?: IconComponent,
  iconRightName?: string,
  onIconRightPress?: () => void,
  text: string,
};

export default function Button(props: ButtonProps) {
  const { IconRight, iconRightName, text, onIconRightPress, ...rest } = props;
  return(
    <TouchableOpacity style={styles.linkButton}>
       <View style={styles.container}>
       <Text style={styles.text}>{text}</Text>
        {
            IconRight && iconRightName && (
              <TouchableOpacity onPress={onIconRightPress}>
                <IconRight name={iconRightName as any} size={20} style={styles.icon} />
              </TouchableOpacity>
            )
          }
       </View>
    </TouchableOpacity>
  )
}