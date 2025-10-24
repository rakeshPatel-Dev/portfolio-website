  // Array of fun projects
  const funProjects = [
    {
      title: "Rock Paper Scissors",
      description: "A fun, interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript featuring smooth animations and instant score updates.",
      image: "/assets/images/rock paper game.webp",
      playLink: "https://rakeshpatel-dev.github.io/Rock-Paper-Scissors/",
      sourceLink: "https://github.com/rakeshPatel-Dev/Rock-Paper-Scissors"
    },
    {
      title: "Guess the Number",
      description: "A simple yet exciting number guessing game where players test their luck and logic to find the hidden number quickly.",
      image: "/assets/images/guess the number.webp",
      playLink: "https://rakeshpatel-dev.github.io/Number-Guessing-Game/",
      sourceLink: "https://github.com/rakeshPatel-Dev/Number-Guessing-Game"
    }
  ];

  // Function to insert projects dynamically
 function renderFunProjects() {
  const container = document.getElementById("fun-project");
  container.innerHTML = ""; // clear old ones

  if (funProjects.length === 0) {
    container.innerHTML = `
      <p class="col-span-full text-center text-gray-500 dark:text-gray-400 italic">
        No Fun Projects Yet Created.
      </p>
    `;
    return;
  }

  funProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = `tilt group relative flex flex-col overflow-hidden rounded-xl border border-gray-200/80 dark:border-gray-800/80 bg-white/50 dark:bg-gray-900/50 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`;
    
    // Add VanillaTilt attributes
    card.setAttribute('data-tilt', '');
    card.setAttribute('data-tilt-max', '15');
    card.setAttribute('data-tilt-speed', '400');
    card.setAttribute('data-tilt-glare', 'true');
    card.setAttribute('data-tilt-max-glare', '0.3');

    card.innerHTML = `
      <div class="aspect-video w-full overflow-hidden">
        <img
          alt="${project.title}" loading="lazy" decoding="async"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          src="${project.image}"
        />
      </div>
      <div class="flex flex-1 flex-col p-6">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">
          ${project.title}
        </h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
          ${project.description}
        </p>
        <div class="mt-6 flex gap-4">
          <a
            href="${project.playLink}" target="_blank"
            class="flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 text-sm sm:text-md font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            <i class="ri-gamepad-line text-xl font-normal"></i>
            Play Game
          </a>
          <a
            href="${project.sourceLink}" target="_blank"
            class="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-5 text-sm sm:text-md font-bold text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <i class="ri-github-line font-normal text-xl"></i>
            Source Code
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);

    // Initialize Tilt
    if (typeof VanillaTilt !== "undefined") {
      VanillaTilt.init(card, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3
      });
    }
  });
}
renderFunProjects();


