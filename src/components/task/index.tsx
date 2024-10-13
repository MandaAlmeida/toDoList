import { Text, TouchableOpacity, View} from 'react-native';
import {styles} from "./styles"
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

type ParticipantProps = {
    name: string
    onRemove: () => void;
    id: string
    handleTaskConclue: () => void
    active: boolean
}

export function Task({name, onRemove, id, handleTaskConclue, active}: ParticipantProps) {

return(
<View style={styles.container}>
<TouchableOpacity style={styles.check} onPress={handleTaskConclue}>
{active ? (
    <View style={styles.containerCheck}>
    <AntDesign style={styles.conclude} name="check" size={12} color="#F2F2F2" />
    <Text id={id} style={styles.nameCheck}>{name}</Text>
  </View>
   
      ) : (
        <View style={styles.containerCheck} >
        <Text style={styles.circle}></Text> 
        <Text style={styles.name}>{name}</Text>
        </View>
      )}

 </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={onRemove}>
    <Feather name="trash-2" size={14} color="#808080" />
      </TouchableOpacity>
</View>
)}
