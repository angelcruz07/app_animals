import React from 'react'
import { ScrollView, View, StyleSheet, Image, Button } from 'react-native'
import { Audio } from 'expo-av'
import { useState, useEffect } from 'react'

const ANIMALS = {
	lion: {
		img: require('../../../assets/lion.jpg'),
		sound: '../../../assets/sound/'
	},
	ant: {
		img: require('../../../assets/ANT.png'),
		sound: '../../../assets/sound/'
	},
	bear: {
		img: require('../../../assets/BEAR.png'),
		sound: '../../../assets/sound/'
	},
	cow: {
		img: require('../../../assets/COW.png'),
		sound: '../../../assets/sound/'
	},
	horse: {
		img: require('../../../assets/HOURSE.png'),
		sound: '../../../assets/sound/'
	}
}

export const Animals = () => {
	const [sound, setSound] = useState()

	async function playSong(soundAnimal) {
		console.log('Loading Sound')
		const { sound } = await Audio.Sound.createAsync(require(soundAnimal))

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
		<ScrollView style={styles.container}>
			<View>
				{Object.entries(ANIMALS).map(([key, animal], index) => (
					<View key={key}>
						<Image source={animal.img} style={{ width: 200, height: 200 }} />
						<Button title='Escuchar' onPress={() => playSong(animal.sound)} />
					</View>
				))}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		width: 200
	}
})
