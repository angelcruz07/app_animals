import React from 'react'
import {FlatList, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Audio } from 'expo-av'
import ANIMALS from '../../data/animals'
import { useState, useEffect } from 'react'

export const Animals = () => {
	const [sound, setSound] = useState()
	const animalsArray = Object.keys(ANIMALS).map((key) => ({
		key,
		...ANIMALS[key]
	}))

	async function playSong(soundAnimal) {
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
		<FlatList
			data={animalsArray}
			style={{ marginTop: 100, marginBottom: 20 }}
			keyExtractor={(item) => item.key}
			renderItem={({ item: animal }) => (
				<TouchableOpacity
					style={styles.containerAnimal}
					onPress={() => playSong(animal.sound)}
				>
					<Image source={animal.img} style={{ width: 120, height: 120 }} />
					<Text style={styles.textAnimal}>{animal.name}</Text>
				</TouchableOpacity>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	containerAnimal: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'center',
		width: 250,
		height: 300,
		marginTop: 15,
		padding: 30,
		borderRadius: 10
	},
	textAnimal: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 10
	}
})
