import React from "react";

const ContactSection = () => (
	<section className="px-8 py-40">
		<div className="max-w-7xl mx-auto">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-24">
				<div>
					<h2 className="font-headline text-4xl font-extrabold tracking-tighter text-on-surface mb-8">
						Hledáte spolehlivého React developera?
					</h2>
					<p className="text-on-surface-variant mb-12 text-lg">
						Aktuálně přijímám nové frontendové a React projekty.
					</p>
					<div className="space-y-8">
						<div>
							<p className="font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-2">
								EMAIL
							</p>
							<a
								className="font-headline text-xl font-bold border-b border-outline-variant/30 hover:border-primary transition-all pb-1"
								href="mailto:hello@architect.ui"
							>
								hello@architect.ui
							</a>
						</div>
						<div>
							<p className="font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant mb-2">
								LOKALITA
							</p>
							<p className="font-headline text-xl font-bold">
								Stockholm, SWE (na dálku)
							</p>
						</div>
					</div>
				</div>
				<form className="space-y-12">
					<div className="space-y-4">
						<label className="font-label text-[0.75rem] uppercase tracking-widest font-bold text-on-surface-variant">
							Jméno
						</label>
						<input
							className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 focus:border-primary p-0 py-4 transition-all"
							type="text"
						/>
					</div>
					<div className="space-y-4">
						<label className="font-label text-[0.75rem] uppercase tracking-widest font-bold text-on-surface-variant">
							Poptávka projektu
						</label>
						<textarea
							className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant focus:ring-0 focus:border-primary p-0 py-4 transition-all"
							rows={4}
						></textarea>
					</div>
					<button
						className="w-full bg-on-surface text-surface py-6 font-bold tracking-widest uppercase text-sm hover:opacity-90 transition-all"
						type="submit"
					>
						ODESLAT ZPRÁVU
					</button>
				</form>
			</div>
		</div>
	</section>
);

export default ContactSection;
