// type httpMethod = "GET" | "PATCH" | "POST" | "PUT" | "DELETE";
//
// export const useFetchUserController = async (point: string, method: httpMethod,  body?: string) => {
// 	 const { data: result, error: error } = await useFetch(point,
// 		 {
// 			 method: method,
// 			 baseURL: process.env.API_BACKEND + "/",
// 			 body: body
// 		 });
//
// 	 return {
// 		 message: result,
// 		 error: error,
// 	 };
// };