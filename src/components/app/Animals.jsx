import React from 'react'
import { ScrollView, View, StyleSheet, Image, Button } from 'react-native'
import { Audio } from 'expo-av'
import { useState, useEffect } from 'react'

const ANIMALS = {
    lion: {
        img: require('../../../assets/lion.jpg'),
        sound: require('../../../assets/sound/lion.mp3') // Asegúrate de que la ruta y el nombre del archivo son correctos
    },
    ant: {
        img: require('../../../assets/ANT.png'),
        sound: require('../../../assets/sound/ant.mp3') // Asegúrate de que la ruta y el nombre del archivo son correctos
    },
    bear: {
        img: require('../../../assets/BEAR.png'),
        sound: require('../../../assets/sound/bear.mp3') // Asegúrate de que la ruta y el nombre del archivo son correctos
    },
    cow: {
        img: require('../../../assets/COW.png'),
        sound: require('../../../assets/sound/cow.mp3') // Asegúrate de que la ruta y el nombre del archivo son correctos
    },
    horse: {
        img: require('../../../assets/HOURSE.png'),
        sound: require('../../../assets/sound/hourse.mp3') // Asegúrate de que la ruta y el nombre del archivo son correctos
    }
}

export const Animals = () => {
    const [sound, setSound] = useState()

    async function playSong(soundAnimal) {
        console.log('Loading Sound')
        const { sound } = await Audio.Sound.createAsync(soundAnimal) // Aquí ya no necesitas usar require

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
		<ScrollView contentContainerStyle={styles.container}>
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