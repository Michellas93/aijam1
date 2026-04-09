import React from "react";

const PhilosophySection = () => (
	<section className="bg-surface-container-low px-8 py-40">
		<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-start">
			<div className="flex-1">
				<h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface mb-12 uppercase">
					FILOZOFIE
				</h2>
				<div className="space-y-8 font-body text-xl leading-relaxed text-on-surface">
					<p>
						Vývoj webu vnímám jako poctivé řemeslo. Nestačí mi jen, aby věci
						fungovaly — soustředím se na čistý kód, přehlednou strukturu a
						dobrou použitelnost.
					</p>
					<p className="text-on-surface-variant text-lg">
						Můj přístup spojuje kvalitní React development s citem pro detail,
						aby výsledný produkt byl rychlý, srozumitelný a příjemný pro
						uživatele.
					</p>
					<div className="pt-8">
						<button className="group flex items-center gap-4 font-bold border-b-2 border-primary-container pb-2 hover:border-primary transition-all">
							<span className="font-label text-sm uppercase tracking-widest">
								PŘEČTĚTE SI MANIFEST
							</span>
							<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
								arrow_forward
							</span>
						</button>
					</div>
				</div>
			</div>
			<div className="flex-1 w-full">
				<div className="aspect-[3/4] bg-surface-container-highest relative">
					<img
						className="w-full h-full object-cover filter grayscale"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXBFMFRa5E6GksJDqwV8RTeEdbTJ4u-Aep3ec4RMI6f9v1BwQ-uKqfEuHW5z_6cAN2alkhhzFii6kUMEcJB2XwqikwCBOYO575j3HfnBYVZKaLdz07QZXGLsLmEhVFp2IKlbF5NQEsabc1Hr4hyL_5pkd5ILPgviCL4a6CU_D2f_l955eiuoJWg_bRQJ5O5TC6-StApy3xEYZB5v7MO7S512cBL5dTg_TuDcBONNlwwdfz-xl4v4eJWDgRI2DCv7M03edeEKoFeN-S"
						alt="Portrét"
					/>
					<div className="absolute -bottom-8 -left-8 bg-surface p-8 shadow-2xl hidden md:block">
						<p className="font-headline font-bold text-4xl tracking-tighter">
							08+
						</p>
						<p className="font-label text-[0.65rem] tracking-widest uppercase text-on-surface-variant">
							LET PRAXE V KÓDU
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default PhilosophySection;
