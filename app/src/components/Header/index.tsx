import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
// import { styles } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>>;

type HeaderProps = {
  IconLeft?: IconComponent,
  iconLeftName?: string,
  onIconLeftPress?: () => void,
  text: string,
};
export function Header(props: HeaderProps) {
  const {IconLeft, iconLeftName, text, onIconLeftPress} = props;

  return(
    <View style={styles.container}>
      {
        IconLeft && iconLeftName && (
          <TouchableOpacity style={styles.icon} onPress={onIconLeftPress}>
            <FontAwesome6 name={iconLeftName} size={20} />
          </TouchableOpacity>
        )
      }
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    height: 88,
    backgroundColor: 'transparent',
  },
  text: {
    color: '#505050',
    fontWeight: '500',
    fontSize: 18,
    paddingLeft: 18,
    textAlign: 'center',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingRight: 12
  }
})