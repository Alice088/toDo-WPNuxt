type quote = {
	content: string,
	author: string
};

const useFetchRandomQuote = async () => {
	const { data, error } = await useFetch("https://api.quotable.io/quotes/random?maxLength=200&minLength=100");
	const [quote] = data.value as quote[];


	if(error.value) {
		return {
			content: `If we have a positive mental attitude,
							 then even when surrounded by hostility,
  						 we shall not lack inner peace.`,
			author: "— Dalai Lama"
		} as quote;
	}

	quote.author = "— " + quote.author;

	return quote;
}; 

export { useFetchRandomQuote }; 