  // Array of fun projects
  const funProjects = [
    {
      title: "Galactic Invaders",
      description: "A retro-style space shooter game built with JavaScript and HTML5 Canvas.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3s-lmZ-FipUn9B-x3Kp9GObc2ixDRdjHVaUKOYYl5qApSXk3fZVL8-pAHvKGbntlpGPFB00hvYpi0a82qsoCwprW2m5mvf0l95o_FjeghegCTgLVNavaLDWe7OA3pkd2ibLYd9aO_waABF9SQw0GoiEXqKmNQOKHsN--3JUDHrQWqV5ADwS2ZiS9FF9raYp9QceJ2Tsb_cvZjd7BUl6sh6ADeJUKAMy4JfZxu7xCLq-8PS1jzoLhu_Iu6OQF280AUgIVl5VO3X37n",
      playLink: "#",
      sourceLink: "#"
    },
    {
      title: "Color Match Mania",
      description: "A fun puzzle game where players match colors using logic and timing.",
      image: "https://images.unsplash.com/photo-1760681554254-f8e6f8e2f482?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600",
      playLink: "#",
      sourceLink: "#"
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
          alt="${project.title}"
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
            href="${project.playLink}"
            class="flex h-11 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            <i class="ri-gamepad-line text-xl font-normal"></i>
            Play Game
          </a>
          <a
            href="${project.sourceLink}"
            class="flex h-11 items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-5 text-base font-bold text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
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


