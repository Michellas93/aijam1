import React from "react";

const TopAppBar = () => (
	<nav className="fixed top-0 w-full z-50 bg-[#fbf9f8]/80 dark:bg-[#1A1A1A]/80 backdrop-blur-xl transition-transform duration-300">
		<div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
			<div className="flex items-center gap-2">
				<span className="material-symbols-outlined text-[#303333] dark:text-[#fbf9f8]">
					architecture
				</span>
				<span className="text-xl font-bold tracking-tighter text-[#303333] dark:text-[#fbf9f8] font-headline">
					ARCHITECT.UI
				</span>
			</div>
			<button className="text-[#303333] dark:text-[#ffffff] font-bold border-b-2 border-[#576062] px-1 hover:opacity-70 transition-opacity duration-300 font-label tracking-tight scale-95 transition-transform">
				NAJMĚTE SI MĚ
			</button>
		</div>
	</nav>
);

export default TopAppBar;
