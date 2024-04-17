import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native'
import Alphabet from '../../data/letters'
import { Audio } from 'expo-av'
import { useEffect, useState } from "react";

export const Letters = () => {
	const [sound, setSound] = useState()
	const playSong = async (soundAnimal) => {
		const { sound } = await Audio.Sound.createAsync(soundAnimal)

		setSound(sound)
		await sound.playAsync()
	}
	useEffect(() => {
		return sound
			? () => {
				sound.unloadAsync()
			}
			: undefined
	}, [sound])


	return (
		<View style={styles.container}>
			<FlatList
				data={Alphabet}
				keyExtractor={(item) => item.letter}
				renderItem={({ item: letter }) => (
					<TouchableOpacity
						style={styles.cardLetter}
						onPress={() => playSong(letter.sound)}
					>
						<Text style={styles.letter}>{letter.letter}</Text>
						<Image source={letter.animalImage} style={{ width: 120, height: 120 }} />
						<Text style={styles.textAnimal}>{letter.animals}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 100
	},
	cardLetter: {
		backgroundColor: '#fff',
		width: 250,
		height: 300,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		borderRadius: 10
	},
	letter: {
		fontWeight: 'bold',
		color: '#000',
		fontSize: 80
	},
	textAnimal: {
		fontSize: 20

	}
})
