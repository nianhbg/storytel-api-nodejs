import type { BookDetails } from "../../types/book";
import type { JWT } from "../../types/types";

const URL = "https://api.storytel.net/book-details/consumables/{ID}";

export async function getBookDetails(id: string, jwt: JWT) {
	const formattedURL = URL.replace("{ID}", id.toString());

	console.log(formattedURL)

	const response = await fetch(formattedURL, {
		headers: {
			'authorization': `bearer ${jwt}`,
		}
	});

	if (response.status !== 200) {
		throw new Error(response.statusText);
	}

	const details = await response.json() as BookDetails;

	return details;
}