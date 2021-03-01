import React from 'react';
import { Button, View,Text } from 'react-native';

export default function MovieDetails({movie, goBack}){
    return(
        <View>
            <Text>Name: {movie.name}</Text>
            <Text>Description{movie.Description}</Text>
            <Text>Cast: {movie.cast.map((cast,index)=>(<View key={index}><Text>{cast},</Text></View>))}</Text>
            <Button title="Go Back" onPress={goBack}>Back</Button>
        </View>
    )
}