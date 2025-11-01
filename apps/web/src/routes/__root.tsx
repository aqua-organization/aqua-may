import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
	component: () => (
		<div className="min-h-screen">
			<nav className="border-b p-4">
				<div className="container mx-auto flex gap-4">
					<Link
						to="/"
						className="text-blue-500 hover:text-blue-700"
						activeProps={{
							className: 'font-bold',
						}}
					>
						Home
					</Link>
				</div>
			</nav>
			<main className="container mx-auto p-4">
				<Outlet />
			</main>
		</div>
	),
});

