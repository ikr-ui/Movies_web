import React from "react";

function App() {

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">

      {/* HEADER */}
      <header className="px-6 md:px-12 py-6 flex justify-between items-center border-b border-gray-900">
        <h1 className="text-2xl font-bold font-serif flex items-center gap-2">
          <span className="text-3xl"></span> Movies Bazer<span className="text-purple-500"></span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="text-white font-medium">Home</a>
          <a href="#trending">Explore</a>
          <a href="#trending">Genre</a>
          <a href="#movies">News</a>
          <a href="#movies">Movies</a>
          <a href="#movies">TV Shows</a>
        </nav>

        <button className="md:hidden text-2xl">☰</button>
      </header>


      {/* MAIN CONTAINER */}
      <main className="max-w-[1400px] mx-auto px-6 md:px-12">


        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-10 items-center pt-10 pb-20 min-h-[80vh]">

          {/* LEFT TEXT CONTENT */}
          <div className="z-10">
            <p className="text-xl md:text-2xl font-bold tracking-widest uppercase mb-2">
              FIND MOVIES
            </p>

            <h2 className="text-5xl md:text-6xl font-black uppercase leading-tight">
              <span className="text-blue-600">TV Shows</span> <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                And More
              </span>
            </h2>

            <p className="text-gray-400 text-sm mt-6 max-w-md leading-relaxed">
              Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley 
              of type and scrambled it to make a type specimen book.
            </p>

            <button className="border border-white rounded-lg px-6 py-3 mt-8 text-sm font-medium hover:bg-purple-600 hover:border-purple-600 transition-colors flex items-center gap-2">
              
              Watch Tutorial
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative flex justify-end items-center h-[500px] md:h-[600px] w-full mt-12 md:mt-0">
            
            {/* BACK IMAGE (Guardians of the Galaxy) */}
            <img
              src="https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii0o5a.jpg"
              alt="Guardians of the Galaxy"
              className="absolute top-0 right-0 w-56 md:w-[280px] h-[340px] md:h-[420px] object-cover z-0"
            />

            {/* FRONT IMAGE (Spider-Man) */}
            <img
              src="https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
              alt="Spider-Man"
              className="absolute bottom-10 md:bottom-0 right-12 md:right-[160px] w-64 md:w-[360px] h-[420px] md:h-[540px] object-cover z-10 shadow-2xl"
            />

            {/* PLAY BUTTON */}
            <button className="absolute z-20 bg-white text-black rounded-full w-16 h-16 md:w-20 md:h-20 hover:scale-110 transition flex items-center justify-center shadow-xl right-36 md:right-[280px] bottom-36 md:bottom-48">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-2"></div>
            </button>

          </div>
        </section>



        {/* TRENDING SECTION */}
        <section id="trending" className="mt-16">

          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-bold text-xl">
              <span className="text-yellow-400">♨️</span> Trending
            </h2>

            <div className="h-px bg-gray-800 flex-1"></div>

            <button className="text-xs text-gray-400">
              See More
            </button>
          </div>


          {/* TRENDING MOVIE DATA */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {[
              {
                title: "Guardians of the Galaxy",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii0o5a.jpg"
              },
              {
                title: "Shazam! Fury of the Gods",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"
              },
              {
                title: "Dungeons & Dragons",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg"
              },
              {
                title: "Medellin",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
              },
              {
                title: "John Wick Chapter 4",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
              },
              {
                title: "Spider-Man",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
              },
              {
                title: "Oppenheimer",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
              },
              {
                title: "Barbie",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
              },
              {
                title: "Avatar",
                year: "2022",
                image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
              },
              {
                title: "Kung Fu Panda 4",
                year: "2024",
                image: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg"
              },
              {
                title: "The Batman",
                year: "2022",
                image: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"
              },
              {
                title: "Black Panther",
                year: "2022",
                image: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
              }
            ].map((movie, index) => (

              <div key={index} className="group cursor-pointer">

                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover rounded-sm group-hover:scale-105 transition duration-300"
                /> 
            
                <h3 className="text-sm mt-3 truncate">
                  {movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2">
                  {movie.year} <span className="text-red-500">•</span> 104m
                </p>

              </div>

            ))}

          </div>
        </section>



        {/* YOU MAY LIKE THIS */}
        <section id="movies" className="mt-24">

          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-bold text-xl uppercase">
              You May Like This
            </h2>

            <div className="h-px bg-gray-800 flex-1"></div>

            <button className="text-xs text-gray-400">
              See More
            </button>
          </div>


          {/* RECOMMENDED MOVIES DATA */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {[
              {
                title: "Hypnotic",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/3IhGkkalwXguTlceGSl8XUJZOVI.jpg"
              },
              {
                title: "Mojave Diamonds",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
              },
              {
                title: "Mojave",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
              },
              {
                title: "Crossfire",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
              },
              {
                title: "Fast X",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
              },
              {
                title: "The Pregnancy Promise",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"
              },
              {
                title: "The Days",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg"
              },
              {
                title: "Days of Daisy",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"
              },
              {
                title: "Turn of the Tide",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii0o5a.jpg"
              },
              {
                title: "The Prank Panel",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg"
              },
              {
                title: "The Idol",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
              },
              {
                title: "The Gryphon",
                year: "2023",
                image: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
              }
            ].map((movie, index) => (

              <div key={index} className="group cursor-pointer">

                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover rounded-sm group-hover:scale-105 transition duration-300"
                />

                <h3 className="text-sm mt-3 truncate">
                  {movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2">
                  {movie.year} <span className="text-red-500">•</span> 104m
                </p>

              </div>

            ))}

          </div>
        </section>

      </main>



      {/* FOOTER */}
      <footer className="mt-24 border-t border-gray-800 py-10 text-center">

        <h2 className="text-2xl font-bold font-serif">
          Movies Bazer<span className="text-purple-500">.</span>
        </h2>

        <p className="text-gray-400 text-sm mt-3">
          Your world of movies and entertainment.
        </p>

        <p className="text-gray-600 text-xs mt-6">
          © 2026 Movies Bazer. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;
