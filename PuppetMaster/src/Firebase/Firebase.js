// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBitOAXwcs0THQX5iiLT0ukQbJfHRJQyUU',
	authDomain: 'puppetmaster-d1313.firebaseapp.com',
	projectId: 'puppetmaster-d1313',
	storageBucket: 'puppetmaster-d1313.appspot.com',
	messagingSenderId: '181477893622',
	appId: '1:181477893622:web:b2524d6fa66729f78b13d7',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
	const citiesCol = collection(db, 'cities');
	const citySnapshot = await getDocs(citiesCol);
	const cityList = citySnapshot.docs.map((doc) => doc.data());
	return cityList;
}
