import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component() {
  constructor(){
    super();
    this.state ={
      text:'',
      displayText:''
    }
  }
  render(){
    return(
      <View style={styles.container}> 
      <Header
      backgroundColor={'red'}
      centerComponent={{text:'Monkey Chunky', style:{color:'green', fontSize:25}}}/>
      <TextInput
      style={styles.inputBox}
      onChangeText={text=>{
        this.setState({text:text});
      }}
      value={this.state.text}/>
      <TouchableOpacity>
        style ={styles.goButton}
        onpress={()=>{
          this.setState({displayText:this.state.text})
        }}
        <Text style={styles.buttonText}>
          GO!
        </Text>
      </TouchableOpacity>
      <Text style={styles.displayText}>{this.state.display}</Text>

     
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputBox:{
    marginTop:200,
    width:'80%',
    alignSelf:'center',
    height:40,
    textAlign:'center',
    borderWidth:4,
    outline:'none',
  },
  goButton:{
    width:'50%',
    height:55,
    alignSelf:'center',
    margin:10,
    padding:10
  },
  buttonText:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold'
  },
  displayText:{
    textAlign:'center',
    fontSize:30
  }
});
