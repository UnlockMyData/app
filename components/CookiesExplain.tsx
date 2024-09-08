"use client";

import React from "react";
import CookieType from "./CookieType";

const arrayCookiesType = [
  {
    "img": "/cookiesIcons/hourglass.png",
    "title": "Cookies de session",
    "text": "Temporaires, ils disparaissent lorsque vous fermez votre navigateur. Ils sont souvent utilisés pour maintenir votre connexion pendant que vous naviguez sur le site."
  },
  {
    "img": "/cookiesIcons/harddrive.png",
    "title": "Cookies persistants",
    "text": "Ces cookies restent sur votre appareil après la fermeture du navigateur et aident à mémoriser vos préférences pour vos prochaines visites."
  },
  {
    "img": "/cookiesIcons/house.png",
    "title": "Cookies propriétaires",
    "text": "Créés par le site web que vous visitez, ils stockent des informations utiles pour ce site."
  },
  {
    "img": "/cookiesIcons/persons.png",
    "title": "Cookies tiers",
    "text": "Créés par d'autres sites, souvent pour des publicités ou des analyses."
  },
  {
    "img": "/cookiesIcons/padlock.png",
    "title": "Cookies nécessaires",
    "text": "Indispensables au fonctionnement du site, ils vous permettent de naviguer et d'utiliser les fonctionnalités de base."
  },
  {
    "img": "/cookiesIcons/graphique.jpeg",
    "title": "Cookies de performance",
    "text": "Ils collectent des informations sur la manière dont vous utilisez le site pour aider à améliorer ses performances."
  },
  {
    "img": "/cookiesIcons/gearwheel.jpeg",
    "title": "Cookies de fonctionnalité",
    "text": "Ils se souviennent de vos choix (comme la langue ou la région) pour offrir une expérience personnalisée."
  },
  {
    "img": "/cookiesIcons/megaphone.png",
    "title": "Cookies publicitaires",
    "text": "Utilisés pour diffuser des annonces pertinentes en fonction de vos intérêts."
  },
];

export default function CookiesExplain() {
  
  return (
    <div className="mb-8 pt-12">
        <h2 className="text-blue font-semibold text-2xl md:text-3xl mb-8">Comprendre les Cookies : Leur Fonctionnement et les Différents Types</h2>
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-6">
        {arrayCookiesType.map((el, index: number) => (
          <CookieType key={index} obj={el} />
        ))}
      </div>
    </div>
  );
}
