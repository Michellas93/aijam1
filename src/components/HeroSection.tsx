import React from "react";

const HeroSection = () => (
	<section className="min-h-[707px] flex flex-col justify-center px-8 py-40 bg-gradient-to-b from-surface to-primary-container/5">
		<div className="max-w-2xl">
			<p className="font-label text-[0.75rem] uppercase tracking-[0.2em] text-on-surface-variant mb-6">
				REACT DEVELOPER
			</p>
			<h1 className="font-headline text-[3.5rem] leading-[1.1] font-extrabold tracking-tighter text-violet-600 dark:text-violet-400 mb-8">
				Vytvářím rychlé a kvalitní React aplikace.
			</h1>
			<p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12 max-w-md">
				Freelance React developer zaměřený na moderní frontend, znovupoužitelné
				komponenty a spolehlivé aplikace s důrazem na výkon.
			</p>
			<button className="bg-primary text-on-primary px-10 py-5 font-bold tracking-tight hover:opacity-90 transition-all active:scale-95">
				ZOBRAZIT POSLEDNÍ PRÁCE
			</button>
		</div>
	</section>
);

export default HeroSection;
