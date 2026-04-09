

const Footer = () => (
	<footer className="w-full py-20 px-8 bg-[#f5f3f3] dark:bg-[#121212]">
		<div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-7xl mx-auto">
			<div className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.1em] text-[#576062] dark:text-[#dbe4e6]">
				© 2024 REACT DEVELOPER PORTFOLIO. VŠECHNA PRÁVA VYHRAZENA.
			</div>
			<div className="flex gap-8">
				<a
					className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.1em] text-[#5d5f60] dark:text-[#b1b2b2] hover:text-[#303333] dark:hover:text-[#ffffff] transition-colors"
					href="#"
				>
					GITHUB
				</a>
				<a
					className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.1em] text-[#5d5f60] dark:text-[#b1b2b2] hover:text-[#303333] dark:hover:text-[#ffffff] transition-colors"
					href="#"
				>
					LINKEDIN
				</a>
				<a
					className="font-['Inter'] text-[0.75rem] uppercase tracking-[0.1em] text-[#5d5f60] dark:text-[#b1b2b2] hover:text-[#303333] dark:hover:text-[#ffffff] transition-colors"
					href="#"
				>
					TWITTER
				</a>
			</div>
		</div>
	</footer>
);

export default Footer;
