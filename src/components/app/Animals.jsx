import React from 'react'
import { View, StyleSheet, Image, Button } from 'react-native'
import { Audio } from 'expo-av'

const ANIMALS = {
	lion: {
		img: '../../../assets/lion.jpg',
		sound: ''
	},
	ant: {
		img: '../../../assets/lion.jpg',
		sound: ''
	},
	bear: {
		img: '../../../assets/lion.jpg',
		sound: ''
	},
	cow: {
		img: '../../../assets/lion.jpg',
		sound: ''
	},
	horse: {
		img: '../../../assets/lion.jpg',
		sound: ''
	}
}

export const Animals = () => {
	const [sound, setSound] = useState()
	// async function playSong() {
	// 	console.log('Loading Sound')
	// 	const { sound } = await Audio.Sound.Sound.createAsync(require(''))

	// 	setSound(sound)
	// 	await sound.playAsync()
	// }
	// useEffect(() => {
	// 	return sound
	// 		? () => {
	// 				sound.unloadAsync()
	// 		  }
	// 		: undefined
	// }, [sound])

	return (
		<View style={styles.container}>
			{ANIMALS.map((animal) => (
				<View key={index}>
					<Image source={animal.img} style={{ width: 200, height: 250 }} />
					<Button title='Escuchar' />
				</View>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
