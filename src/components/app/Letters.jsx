import { View, Text, StyleSheet, FlatList } from 'react-native'
import Alphabet from '../../data/letters'

export const Letters = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={Alphabet}
				keyExtractor={(item) => item.letter}
				renderItem={({ item: letter }) => (
					<View style={styles.cardLetter}>
						<Text style={styles.letter}>{letter.letter}</Text>
					</View>
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
		backgroundColor: '#107E7D',
		width: 200,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
		borderRadius: 10
	},
	letter: {
		fontWeight: 'bold',
		color: '#fff',
		fontSize: 80
	}
})
