export const createUniqueId = (digits: number = 4): number => {
	return Math.round(Math.random() * Math.pow(10, digits));
}


