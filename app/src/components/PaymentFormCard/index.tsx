import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>>;

type PaymentFormCardProps = TouchableOpacityProps & {
  IconTop?: IconComponent,
  iconTopName?: string,
  onIconTopPress?: () => void,
  text: string,
  onPress?: () => void;
};

export default function PaymentFormCard(props: PaymentFormCardProps) {
  const { IconTop, iconTopName, text, onIconTopPress, onPress, ...rest } = props;
  return(
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        {
          IconTop && iconTopName && (
            <TouchableOpacity onPress={onIconTopPress}>
              <IconTop name={iconTopName as any} size={20} style={styles.icon} />
            </TouchableOpacity>
          )        }
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

