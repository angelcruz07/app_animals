import { StyleSheet, Text, View } from 'react-native'
import { Animals } from './src/components/app/Animals'
import { NativeRouter, Navigate, Route, Routes } from 'react-router-native'
import { AppBar } from './src/components/ui/AppBar'

export default function App() {
	return (
		<View style={styles.container}>
			<NativeRouter>
				<Routes>
					<Route path='/' element={<Animals />} />
					<Route
						path='/letras'
						element={<Text>Vete a la verga lizandro</Text>}
					/>
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
				<AppBar />
			</NativeRouter>
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
