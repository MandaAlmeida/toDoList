import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131016",
    },
    containerHeader: {
        width: "100%",
        backgroundColor: "#0D0D0D",
        height: 126,
        padding: 24,
        alignItems: "center",
        position: "relative",
    },
    input: { 
        flex: 1,
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        padding: 16,
        color: "#fdfcfe",
        fontSize: 16,
    },
    inputFocused: {
        borderColor: '#5E60CE', 
        borderWidth: 1,         
      },
    form: {
        position: "absolute",
        top: 96,
        width: "100%",
        flexDirection: "row",
         gap: 4,
    },
    button:{
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: "#1E6F9F",
      alignItems: "center",
      justifyContent: "center",
    },
    containerList:{
        padding: 24,
        marginTop: 31,
    },
    list: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",  
        marginBottom: 20,
    },
    listContent:{
        flexDirection: "row",
        gap: 8,
    },
    textCreate: {
        color: "#4EA8DE",
        fontSize: 14,
        fontWeight: "bold",
    },
    textConclude:{
        color: "#8284FA",
        fontSize: 14,
        fontWeight: "bold",
    },
    textCount:{
        backgroundColor: "#333333",
        width: 25,
        textAlign: 'center',
        color: "#D9D9D9",
        fontSize: 12,
        fontWeight: "bold",
        borderRadius: 100,
    },
    afterElement:{
        width: "100%",
        height: 1,
        backgroundColor: "#333333",
        marginBottom: 48
    },
    containerListEmpty:{
        alignItems: "center",
    },
    textBoldListEmpty:{
        fontSize: 14,
        fontWeight: "bold",
        color: "#808080",
        marginTop: 16
    },
    textListEmpty:{
        fontSize: 14,
        color: "#808080",
        
    },

  })