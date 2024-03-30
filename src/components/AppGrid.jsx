
const AppGrid = () => {
  const apps = [
    {
      name: 'App 1',
      icon: 'app1.png',
      rating: '4.5',
      reviews: '500+',
    },
    {
      name: 'App 2',
      icon: 'app2.png',
      rating: '3.8',
      reviews: '200+',
    },
    // Add more app objects as needed
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {apps.map((app, index) => (
        <div
          className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
          key={index}
        >
          <img
            src={app.icon}
            alt={`Icon for ${app.name}`}
            className="w-16 h-16 mb-2"
          />
          <h1 className="text-lg font-bold mb-1">{app.name}</h1>
          <p className="text-gray-500 mb-1">{`Rating: ${app.rating}`}</p>
          <p className="text-gray-500">{`Reviews: ${app.reviews}`}</p>
        </div>
      ))}
    </div>
  );
};

export default AppGrid;