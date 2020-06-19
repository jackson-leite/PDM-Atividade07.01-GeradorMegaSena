import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

const [numerosAleatorios, setNumerosAleatorios] = useState(Array(6).fill(0));
let vetor = [];

function gerarValor(){    
    let n;
    for(let i=0; i<numerosAleatorios.length; i++){
      n = Math.floor(Math.random() * (60 - 1)) + 1;
      if(!encontrarRepetido(n)){
        vetor.push(n);
      }
      else{
        i = i-1;
      }
      
    }
    setNumerosAleatorios(vetor);
    return;
}

function encontrarRepetido(n){
    return vetor.find(element => element === n);
}

  return (
    <View style={styles.container}>
      
      <View style={styles.megasena_container}>
        <Text style={styles.titulo}>Mega-Sena</Text>
        
        <Text style={styles.subtitulo}>Números Sorteados</Text>
        
        <View style={styles.numeros_container}>
          {numerosAleatorios.map(item => <Text style={styles.numero}>{item}</Text>)}
        </View>
        
          <Button 
            color="darkgreen"
            title='Sortear'
            onPress={()=>{gerarValor()}}
            />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADFF2F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    position:'relative',
    top: -40,
    fontSize: 30,
    fontStyle: 'italic'

  }, 
  subtitulo: {
    fontSize: 15,
    textAlign:'center'
  },
  megasena_container: {
    backgroundColor: '#fff',
    paddingVertical: 50,
    paddingHorizontal: 100,
    borderRadius: 20,
    
  },

  numeros_container: {
    
    display:'flex',
    flexDirection:'row',
    backgroundColor: 'lightgreen',
    justifyContent:'space-between',
    marginBottom: 20
    
  },

  numero:{
    color:'darkgreen',
    fontStyle:'normal'

  }

});
