import { Link, LinkProps } from "expo-router";
import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>>;

type LinkButtonProps = {
  href: string,
  IconRight?: IconComponent,
  iconRightName?: string,
  onIconRightPress?: () => void,
  text: string,
};
export default function LinkNavigation(props: LinkButtonProps) {
  const { IconRight, iconRightName, text, onIconRightPress, href, ...rest } = props;

  return(
    <Link style={styles.linkButton} href={href} {...rest}>
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
    </Link>
  )
}