"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";

export const SearchForm = () => {
	const [phrase, setPhrase] = useState<string | null>(null);
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		if (searchParams.get("query")) {
			setPhrase(searchParams.get("query"));
		} else {
			setPhrase(null);
		}
	}, [searchParams]);

	useEffect(() => {
		const debounce = setTimeout(() => {
			if (phrase) {
				router.push(`/search?query=${phrase}`);
			}
		}, 500);
		return () => clearTimeout(debounce);
	}, [phrase, router]);

	const handleSearchForm = (e: FormEvent) => {
		e.preventDefault();
		router.push(`/search?query=${phrase}`);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPhrase(e.target.value);
	};

	return (
		<form onSubmit={(e) => handleSearchForm(e)}>
			<div className="relative flex rounded-lg shadow-sm sm:max-w-md">
				<input
					type="text"
					name="search"
					id="search"
					autoComplete="off"
					value={phrase ?? ""}
					className="block w-60 flex-1 rounded-lg border-0 py-1.5 pl-2 text-gray-900 outline-none placeholder:text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-slate-400 sm:text-sm sm:leading-6"
					placeholder="Search"
					role="searchbox"
					onChange={handleInputChange}
				/>
				<Search className="absolute right-2 top-2 opacity-40" size={20} />
			</div>
		</form>
	);
};
