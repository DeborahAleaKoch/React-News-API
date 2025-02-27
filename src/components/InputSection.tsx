import { useEffect, useState } from "react";
import NewsSection, { apiKey, ArticleResponse } from "./NewsSection";

const InputSection = () => {
	const [newsDetails, setNewsDetails] = useState<ArticleResponse>();
	const [searchValue, setSearchValue] = useState<string>("");
	const [language, setLanguage] = useState<string>("sv");
	//Die API wird bei der Eingabe ins input feld und/oder bei der Sprachauswahl(änderung auch von dieser) gefetched
	useEffect(() => {
		fetch(
			`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=${apiKey}&language=${language}`
		)
			.then((response) => response.json())
			.then((response) => setNewsDetails(response))
			.catch((error) =>
				console.error("Huppali, hier ist was schief gelaufen!", error)
			);
	}, [searchValue, language]);

	return (
		<>
			<div className='flex gap-12 border-b-1 border-slate-700 pb-10 '>
				<input
					type='text'
					value={searchValue}
					placeholder='Type to search ...'
					className='border-1 border-slate-600 px-5 py-1 rounded-2xl bg-slate-50 text-slate-500'
					//Beim eintippen ins Eingabefeld wird schon gefetcht. und Article gerendert
					onChange={(event) => setSearchValue(event.target.value)}
				/>
				<select
					name='selectedLanguage'
					value={language}
					onChange={(event) => setLanguage(event.target.value)}
					id=''
					className='border-1 border-slate-600 px-7 py-1 rounded-2xl bg-slate-50 text-slate-500'
				>
					<option value='de'>Deutsch</option>
					<option value='en'>Englisch</option>
					<option value='es'>Spanisch</option>
					<option value='nl'>Niederländisch</option>
					<option value='it'>Italienisch</option>
					<option value='fr'>Französisch</option>
					<option value='no'>Norwegisch</option>
					<option value='sv'>Schwedisch</option>
					<option value='ar'>Arabisch</option>
				</select>
			</div>
			<NewsSection articles={newsDetails?.articles} />
		</>
	);
};

export default InputSection;
