export default function range(from: number, to: number) {
	return Array(to - from).map((_, i) => from + i);
}
