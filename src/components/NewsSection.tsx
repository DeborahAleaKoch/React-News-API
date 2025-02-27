import Article from "./Article";

export type ArticleResponse = {
	status: string;
	totalResults: number;
	articles: ArticleDetails[];
};

export type ArticleDetails = {
	source: {
		id?: string;
		name: string;
	};
	author?: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
};

export const apiKey = import.meta.env.VITE_NEWS_API_KEY;

interface Props {
	articles: ArticleDetails[] | undefined;
}
//Die einzelenen Article werden gerendert über .map()
const NewsSection: React.FunctionComponent<Props> = ({ articles }) => {
	if (articles === undefined) {
		return;
	}
	//sortiert doppelte Einträger heraus, damit der key über den title verwendet werden kann.
	const uniqArticles = [...new Set(articles)];

	return (
		<section className=' grid grid-cols-2 gap-5'>
			{uniqArticles.map((article) => (
				<Article key={article.title + article.source.id} article={article} />
			))}
		</section>
	);
};

export default NewsSection;
