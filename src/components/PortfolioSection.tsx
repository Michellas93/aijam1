

const projects = [
	{
		img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80",
		label: "INTERIÉR",
		title: "RANNÍ ATMOSFÉRA",
	},
	{
		img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
		label: "KÁVA",
		title: "SIGNATURE CAPPUCCINO",
	},
	{
		img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80",
		label: "DEZERTY",
		title: "DOMÁCÍ PEČENÍ",
	},
];

const PortfolioSection = () => (
	<section className="px-8 py-40">
		<div className="max-w-7xl mx-auto">
			<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
				<h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface uppercase">
					GALERIE KAVÁRNY
				</h2>
				<p className="font-label text-[0.75rem] text-on-surface-variant tracking-[0.1em]">
					NÁLADA KAŽDÉHO DNE
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-1 gap-y-24">
				{projects.map((p, i) => (
					<div className={`group${i === 1 ? " md:mt-24" : ""}`} key={i}>
						<div className="aspect-[4/5] bg-surface-container-high overflow-hidden">
							<img
								className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
								src={p.img}
								alt={p.title}
							/>
						</div>
						<div className="mt-8">
							<p className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
								{p.label}
							</p>
							<h4 className="font-headline text-lg font-bold">{p.title}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default PortfolioSection;
