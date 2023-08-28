/**
 * Generates a random string of the specified length.
 *
 * @param length - The desired length of the generated string. Defaults to 5.
 * @returns A random string consisting of alphanumeric characters.
 */
export function generateRandomString(length: number = 5): string {
	let result = '';
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;

	for (let counter = 0; counter < length; counter++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}
