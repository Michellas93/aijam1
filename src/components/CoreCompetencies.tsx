import React from "react";

const competencies = [
	{
		icon: "layers",
		title: "Vývoj komponent",
		desc: "Systematický vývoj UI s využitím modulárních komponent, které zajišťují škálovatelnost a dlouhodobou udržovatelnost.",
	},
	{
		icon: "bolt",
		title: "Ladění výkonu",
		desc: "Hloubková optimalizace renderovacích cyklů Reactu, velikosti balíčků a Core Web Vitals pro maximální rychlost aplikace.",
	},
	{
		icon: "deployed_code",
		title: "Správa stavu",
		desc: "Implementace robustních datových toků pomocí Reduxu, TanStack Query nebo Context API podle konkrétní složitosti projektu.",
	},
];

const CoreCompetencies = () => (
	<section className="bg-surface-container-low px-8 py-40">
		<div className="max-w-2xl mx-auto">
			<h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface mb-20 uppercase">
				KLÍČOVÉ KOMPETENCE
			</h2>
			<div className="space-y-32">
				{competencies.map((c, i) => (
					<div className="flex flex-col gap-6" key={i}>
						<span className="material-symbols-outlined text-4xl text-primary">
							{c.icon}
						</span>
						<h3 className="font-headline text-xl font-bold tracking-tight uppercase">
							{c.title}
						</h3>
						<p className="text-on-surface-variant leading-relaxed">{c.desc}</p>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default CoreCompetencies;
