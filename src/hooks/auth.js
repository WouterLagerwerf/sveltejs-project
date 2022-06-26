import { writable } from 'svelte/store';

const user = 'wouter@walnutloyalty.com'
const pass = '1234'

export const member = writable(null);

let sessions = []

export const getUserDetails = async ( username, password ) => {
	if ( username === user && password === pass )
		return 1
}