import * as React from 'react';
import {Text, View} from 'react-native';
import AppHeader from 'AppHeader';

export default class fbScreen extends React.Component{
    render(){
        return(
            <View>
               <AppHeader />
               <View style = {{flex: 1, alignItems: 'center', marginTop: 100}}>
                  <Text style = {{textAlign: 'center', fontSize: 40}}>Facebook</Text>
               </View>             
            </View>
        );
    }
}