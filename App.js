import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import {  Pressable, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MovieDetails from './src/components/MovieDetails';
import Movies from './src/movies.json'


export default function App() {
  const [selectedMovie,setMovie] = useState('');

  useEffect(() => {
    console.log(selectedMovie)
  }, [selectedMovie])

  const onMovieSelect=(movie)=>{
    setMovie(movie);
  }
  const goBack=()=>{
    setMovie('');
  }
  return (
    <View style={styles.container}>
      {selectedMovie == ''?
      <View>
        {Movies.map((movie)=>(
          <Pressable key={movie.id} onPress={()=>onMovieSelect(movie)}>
          <View >
          <Text>Name: {movie.name}</Text>
        </View>
        </Pressable>
        ))}
      </View>:
      <MovieDetails movie={selectedMovie} goBack={goBack}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  movieList:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
  }
});
