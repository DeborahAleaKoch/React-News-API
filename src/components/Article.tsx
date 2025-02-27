import { ArticleDetails } from "./NewsSection";

interface Props {
	article: ArticleDetails;
}
//Rendern der Article
const Article: React.FunctionComponent<Props> = ({ article }) => {
	return (
		<div>
			<div className='py-2'>
				<h1 className='font-bold text-xl'>{article.title}</h1>
				<img
					src={article.urlToImage}
					alt={article.title}
					className='rounded-2xl cover'
				/>
				<p>{article.description}</p>
			</div>
		</div>
	);
};

export default Article;
