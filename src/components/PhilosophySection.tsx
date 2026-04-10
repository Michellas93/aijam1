

const PhilosophySection = () => (
	<section className="bg-surface-container-low px-8 py-40">
		<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-start">
			<div className="flex-1">
				<h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface mb-12 uppercase">
					NÁŠ PŘÍBĚH
				</h2>
				<div className="space-y-8 font-body text-xl leading-relaxed text-on-surface">
					<p>
						Kavárnu U Zrna jsme otevřeli s jednoduchou myšlenkou: servírovat
						skvělou kávu bez spěchu a vytvořit místo, kam se lidé rádi vrací.
					</p>
					<p className="text-on-surface-variant text-lg">
						Spolupracujeme s malými pražírnami, pečeme každý den čerstvě a věříme,
						že i krátká kávová pauza může být malý rituál, který zlepší den.
					</p>
					<div className="pt-8">
						<button className="group flex items-center gap-4 font-bold border-b-2 border-primary-container pb-2 hover:border-primary transition-all">
							<span className="font-label text-sm uppercase tracking-widest">
								POZNAT NÁŠ PŘÍBĚH
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
						src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80"
						alt="Barista připravuje kávu"
					/>
					<div className="absolute -bottom-8 -left-8 bg-surface p-8 shadow-2xl hidden md:block">
						<p className="font-headline font-bold text-4xl tracking-tighter">
							7 DNÍ
						</p>
						<p className="font-label text-[0.65rem] tracking-widest uppercase text-on-surface-variant">
							V TÝDNU OTEVŘENO
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default PhilosophySection;
