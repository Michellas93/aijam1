import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => (
	<div className="font-body bg-surface text-on-surface min-h-screen">
		{children}
	</div>
);

export default Layout;
