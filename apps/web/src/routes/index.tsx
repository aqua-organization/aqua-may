import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/')({
	component: Index,
});

function Index() {
	const [count, setCount] = useState(0);

	return (
		<div className="text-center">
			<h1 className="text-4xl font-bold mb-6">Vite + React</h1>
			<div className="card p-8">
				<button
					onClick={() => setCount((count) => count + 1)}
					className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
				>
					count is {count}
				</button>
				<p className="mt-4 text-gray-600">
					Edit <code className="bg-gray-100 px-2 py-1 rounded">src/routes/index.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="mt-4 text-gray-500">
				Click the button above to increment the count
				nam kiki
				bac kiki
				trung kiki
			</p>
		</div>
	);
}

