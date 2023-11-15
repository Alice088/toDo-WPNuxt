import { useFetch } from "nuxt/app";

const useFetchRandomQuote = () => {
	return useFetch("https://api.quotable.io/quotes/random?maxLength=200&minLength=100");
}; 

export { useFetchRandomQuote }; 