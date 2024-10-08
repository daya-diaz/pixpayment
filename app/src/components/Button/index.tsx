import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>>;

type ButtonProps = TouchableOpacityProps & {
  IconRight?: IconComponent,
  iconRightName?: string,
  onIconRightPress?: () => void,
  text: string,
  variant?: "primary" | "secondary" | "outline",
  isLoading?: boolean,
};

export default function Button(props: ButtonProps) {
  const { IconRight, iconRightName, isLoading, text, onIconRightPress, disabled, variant = "primary", ...rest } = props;

  // Seleciona o estilo com base na variante e no estado desativado
  const buttonStyle = [
    styles.linkButton,
    variant === "primary" && styles.primary,
    variant === "secondary" && styles.secondary,
    variant === "outline" && styles.outline,
    disabled && (variant !== "secondary" && styles.disabled),
  ];

  // Define a cor do texto com base na variante e no estado desativado
  const textStyle = [
    styles.text,
    variant === "primary" && { color: '#fff' },
    variant === "secondary" && { color: '#505050' },
    variant === "outline" && { color: '#E0087A' },
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity style={buttonStyle} disabled={disabled} {...rest}>
      <View style={styles.container}>
        {
          isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={textStyle}>{text}</Text>
          )
        }
        {IconRight && iconRightName && (
          <TouchableOpacity onPress={onIconRightPress} disabled={disabled}>
            <IconRight name={iconRightName as any} size={20} style={[styles.icon, disabled && styles.disabledIcon]} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}
