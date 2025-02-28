import { useState } from "react";
import { ArticleDetails } from "./NewsSection";

interface Props {
	article: ArticleDetails;
}
//Rendern der Article
const Article: React.FunctionComponent<Props> = ({ article }) => {
	const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

	return (
		<>
			<div className='mt-5'>
				<div className=' flex flex-col justify-center items-center shadow mb-10 bg-slate-100 rounded-2xl'>
					<h1 className='font-bold text-xl py-3 '>{article.title}</h1>
					<img
						src={article.urlToImage}
						alt={article.title}
						className='rounded-md cover w-1/2 pb-5'
					/>
					<p className='p-4'>{article.description}</p>
					<button
						className='border-1 rounded px-5 py-1 my-5 cursor-pointer hover:bg-slate-400 hover:text-slate-200 hover:border-slate-400'
						onClick={() => setAccordionOpen((previousValue) => !previousValue)}
					>
						{accordionOpen ? <p>less</p> : <p>more</p>}
					</button>
					{accordionOpen === true && (
						<p className='mx-8 py-4 border-t-1 border-slate-500'>
							{article.content}
						</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Article;
