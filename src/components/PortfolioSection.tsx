import React from "react";

const projects = [
	{
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2AYCghgDTy19IuCG8WDOY4xtN5HL1i0xC9ayXVhmkRnPstAvd4Tfurj7Txgu6YDBYI5uW4rQ1HdB_hAkq_Y4_SmsN5xu3yUcJVZ4f40ZZ2Gy9tgyBOKqcKVBQlgLg6g70dYjKz-JxaiX9AkvkG59psrkn5dGfEB2qgCxwERsuFH2eNES0PgZedax1_6L7gG32ei9iqkIm8fTdQ3EKg0Oqe-0MW_C8JGtUT422a0VMSnpuHoucZvwKnT3pBJGgSe-20od9VgYG1bLa",
		label: "FINTECH / 2024",
		title: "MONOLITH BANKING",
	},
	{
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBikVhch8ISvxXvxMF6zxWw9It5PpzNJY2YxJVEBwlhfkOXgGvQw1yl5wKR5fY0V1lFtejOE8-S1lOKeVbimVTWcbUZD_ZoZxm2rr6dNVGHqNf-1qiVyLsPFmm7RFNGzr1d9Zbhod2uCytJDpHB9_AcnOTZwP6c42H38AretQrCzd2Eqg9lZiiIKj8z3cpGLQHUsr7k3UYgQYY9JUd9pD_k0olK9-OwRyCk967ucg8S3QThT1cvELsnHqZLrWKH2_pQ1_tBQxFO_uED",
		label: "SAAS / 2023",
		title: "FLUX DESIGN SYSTEMS",
	},
	{
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAttJLuZW5IxIOkVvbD6Z3DzLe1zJFsXar7ViczvXN7PQ7DwuxEy0C85xKeKh2_v19HI1SqemnyqaC0mqRE2IoMED24DuilGX0to4d2vy9jo6uGCk3LXzUxqyWM1-crCMDjTHeLomwFZ7AI_6JSWkdbC9xnM_jERnhzs5tBYDMvSXegCkzwHnPeIeJs6u5TedviKjY3BnnRrxFK5aqjhhzTQqrp33_TImGCxzLnygkcBognjvblyYmDP5UD3WPJkG8T82feXvm5seGl",
		label: "E-COMMERCE / 2023",
		title: "NORDIC ESSENTIALS",
	},
];

const PortfolioSection = () => (
	<section className="px-8 py-40">
		<div className="max-w-7xl mx-auto">
			<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
				<h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface uppercase">
					VYBRANÉ PROJEKTY / 24
				</h2>
				<p className="font-label text-[0.75rem] text-on-surface-variant tracking-[0.1em]">
					PROZKOUMEJTE POSUNUTÍM
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
