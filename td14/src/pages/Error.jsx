

export default function Error() {

	return (
		<>
			<div className="errorPage-container">
				<header>
					<nav className="main-nav">
					ERROR
					</nav>
				</header>

				<section className="errorPage">
					<span className="errorPage__title">Oups...</span>
					<span className="errorPage__text">La page que vous demandez n'existe pas.</span>
				</section>

				<footer className="footer">
					<p className="footer-text">Copyright 2023 Argent Bank</p>
				</footer>
			</div>
		</>
	)
}
