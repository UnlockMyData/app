'use client'

import React from "react";

type SearchBarProps = {
  nameSite: string,
  setNameSite: React.Dispatch<React.SetStateAction<string>>,
  findSite: () => void
}
export default function SearchBar({ nameSite, setNameSite, findSite }: SearchBarProps) {

    const handleSite = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNameSite(e.target.value)
    }
    // console.log("nameSite : ", nameSite);
    
  return (
    <div className="relative flex items-center mt-4">
      <input
        type="text"
        className="bg-gray-300 w-full rounded-3xl px-4 py-2"
        placeholder="Rechercher un site"
        value={nameSite}
        onChange={handleSite}
      />
      <img
        src="/magnifying-glass-solid.svg"
        alt="loupe de recherche"
        className="size-5 absolute right-3"
        onClick={findSite}
      />
    </div>
  );
}