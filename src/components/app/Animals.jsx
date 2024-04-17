import React from 'react'
import { FlatList, View, StyleSheet, Image, Button } from 'react-native'
import { Audio } from 'expo-av'
import { useState, useEffect } from 'react'

const ANIMALS = {
	lion: {
		img: require('../../../assets/lion.jpg'),
		sound: require('../../../assets/sound/lion.mp3')
	},
	ant: {
		img: require('../../../assets/ANT.png'),
		sound: require('../../../assets/sound/ant.mp3')
	},
	bear: {
		img: require('../../../assets/BEAR.png'),
		sound: require('../../../assets/sound/bear.mp3')
	},
	cow: {
		img: require('../../../assets/COW.png'),
		sound: require('../../../assets/sound/cow.mp3')
	},
	horse: {
		img: require('../../../assets/HOURSE.png'),
		sound: require('../../../assets/sound/hourse.mp3')
	}
}

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
			keyExtractor={(item) => item.key}
			renderItem={({ item: animal }) => (
				<View style={styles.container}>
					<Image source={animal.img} style={{ width: 120, height: 120 }} />
					<Button title='Escuchar' onPress={() => playSong(animal.sound)} />
				</View>
			)}
		/>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: 'center',
		justifyContent: 'center',
		width: 200,
		marginTop: 80,
		padding: 30
	}
})
