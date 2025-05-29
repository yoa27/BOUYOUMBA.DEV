export default function TechBlogPage() {
  return (
    <main className="min-h-screen bg-apple-gray py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Tech & Innovation : Blog</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Exemple d'article */}
        <article className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-2">Mon premier projet React</h2>
          <p className="text-gray-700 mb-2">Créer mon premier projet React a été une expérience aussi enrichissante que stimulante. Dès le départ, j’ai été séduit·e par la promesse de React : construire des interfaces utilisateur dynamiques et modulaires avec facilité. Mais comme tout premier projet, le chemin n’a pas été sans obstacles.

Les premiers pas
J’ai commencé par installer l’environnement avec create-react-app, ce qui m’a permis de lancer rapidement mon projet. Ensuite, j’ai exploré les composants, les props et le state — les fondations de React. Comprendre le fonctionnement du Virtual DOM et de la réactivité de l’interface a été une vraie révélation.

Les défis rencontrés
Le plus grand défi ? La gestion des états et la communication entre composants. J’ai parfois eu du mal à organiser mon code de manière claire, surtout quand l’application a commencé à grandir. Mais en prenant le temps de lire la documentation et de suivre quelques tutoriels, j’ai peu à peu pris confiance.

Ce que j’ai appris
Ce projet m’a permis de comprendre l’importance d’une bonne architecture d’application, et m’a familiarisé·e avec des concepts clés du développement front-end moderne. J’ai aussi découvert la puissance des outils comme React DevTools, qui m'ont beaucoup aidé à déboguer.</p>
          <span className="text-xs text-gray-400">Publié le 20 mai 2025</span>
        </article>
        {/* Ajoutez d'autres articles ici */}
      </div>
    </main>
  );
} 