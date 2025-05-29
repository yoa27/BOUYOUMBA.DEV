const photos = [
  { src: '/photo.jpg', alt: 'Photo 1' },
  { src: '/paysage.jpg', alt: 'Photo 2' },
  { src: '/paysage.jpg', alt: 'Photo 3' },
  {  src: '/paysage.jpg', alt: 'photo 4'}
  // Ajoute d'autres images ici
];

export default function PhotographiePage() {
  return (
    <main className="min-h-screen bg-apple-gray py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Photographie : Galerie</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
} 