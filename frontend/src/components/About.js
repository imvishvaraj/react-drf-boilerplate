import React from 'react';

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <header className="mb-4 text-center">
        <h1 className="text-3xl font-bold">About</h1>
      </header>
      <div className="mb-4">
        <img src="https://via.placeholder.com/400" alt="Demo" className="rounded shadow-lg" />
      </div>
      <div className="text-center">
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae velit ullamcorper pulvinar.
        </p>
        <p className="mb-2">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <p>
          Curabitur sit amet sem vitae urna faucibus tempus. Nulla facilisi. Proin ac enim vestibulum, ullamcorper justo eu, 
          viverra elit.
        </p>
      </div>
    </div>
  );
}

export default About;
