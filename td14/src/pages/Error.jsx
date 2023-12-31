import Header from "../components/Header/Header";

export default function Error() {

	return (
		<>
		     <Header page="create" />
			<div className="errorPage-container">
				<section className="errorPage">
					<span className="errorPage__title">Oups...</span>
					<span className="errorPage__text">La page que vous demandez n'existe pas.</span>
				</section>
				<footer className="footer">
					<p className="footer-text mx-auto">Copyright 2023 Mourad El mehdaoui </p>
				</footer>
			</div>
		</>
	)
}
