import React from 'react';
import { render } from 'react-dom';
import {View,Button,TextInput} from 'react-native';


class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      name:'',
      email:'',
      password:'',
    }
  }
    submit()
    {
      console.warn(this.state)
    }
  render(){
      return(<View style={{margin:20,marginTop:100}}>
             <TextInput
               placeholder="enter Name"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:2,borderColor: 'skyblue',margin:20}}
             />
              <TextInput
               placeholder="enter email"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:2,borderColor: 'skyblue',margin:20}}
             />
            
             <TextInput
               placeholder="enter Product Name"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:2,borderColor: 'skyblue',margin:20}}
             />
             <TextInput
               placeholder="Problem:"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:2,borderColor: 'skyblue',margin:20}}
             />
             <TextInput
               placeholder="enter Address"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:2,borderColor: 'skyblue',margin:20}}
             />
             <TextInput
               placeholder="Phone number"
               onChangeText={(text)=>{this.setState({name:text})}}
               style={{borderWidth:2,borderColor: 'skyblue',margin:20}}
             />
             <TextInput
               placeholder="Enter Pin"
               onChangeText={(number)=>{this.setState({name:number})}}
               style={{borderWidth:2,borderColor: 'skyblue',margin:20}}
             />
           
             <Button title="submit" onPress={()=>{this.submit()}} />
      </View>)
    }
}


export default App