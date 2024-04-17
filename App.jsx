import { StyleSheet, View } from 'react-native'
import { Animals } from './src/components/app/Animals'
import { NativeRouter, Navigate, Route, Routes } from 'react-router-native'
import { AppBar } from './src/components/ui/AppBar'
import { Letters } from './src/components/app/Letters'

export default function App() {
	return (
		<View style={styles.container}>
			<NativeRouter>
				<Routes>
					<Route path='/' element={<Animals />} />
					<Route path='/letras' element={<Letters />} />
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
		backgroundColor: '#F0F6F6',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
