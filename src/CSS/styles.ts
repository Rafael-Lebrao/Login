import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      fontSize:8,
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 32,
      gap: 16
    },

    input: {
      borderWidth: 1,
      borderColor: '#333',
      borderRadius: 8,
      height: 56,
      padding: 16,
      fontSize: 18
    },

    inputArea: {
        height: 56,
        flexDirection:"row",
        borderWidth: 1,
        borderRadius: 8,
        alignItems:"center"
      },
    
      inputSenha: {
        width: '85%',
        height: 50,
        color: '#333',
        padding: 8,
        fontSize: 18
      },
    
      icon: {
        width: '15%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    
      }
    
  
  });