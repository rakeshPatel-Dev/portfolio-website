// ...Heading Animation ...
const breakingText = () => {
  const heading = document.querySelector('.heading');
  if (!heading) return;

  const headingText = heading.textContent;
  const splittedText = headingText.split("");
  const halfVal = Math.floor(splittedText.length / 2);

  let clutter = "";

  splittedText.forEach((elem, index) => {
    // preserve real spaces and render them visibly
    const char = elem === " " ? "&nbsp;" : elem;
    const cls = index < halfVal ? "a" : "b";

    // inline-block + small right margin gives space between characters
    clutter += `<span class="${cls}" style="display:inline-block;margin-right:0.12em">${char}</span>`;
  });

  heading.innerHTML = clutter;
};


 breakingText()

gsap.from(".a", {
   y:100,
   duration:0.8,
   opacity:0,
   stagger:0.2
})

gsap.from(".b", {
   y:100,
   duration:0.8,
   opacity:0,
   stagger:-0.2
})

// tab switching for about section

function switchTab(event, tabId) {
  event.preventDefault();

  // Hide all tab contents
  const tabContents = document.querySelectorAll(".tab-content");
  tabContents.forEach(content => content.classList.remove("active"));

  // Remove active styles from all tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.classList.remove("active", "bg-gray-400", "dark:bg-gray-700", "text-gray-900", "dark:text-white");
    tab.classList.add("text-gray-700", "dark:text-gray-300");
  });

  // Show the selected tab content
  document.getElementById(tabId).classList.add("active");

  // Add active styles to clicked tab
  const clickedTab = event.currentTarget;
  clickedTab.classList.add("active", "bg-gray-400", "dark:bg-gray-700", "text-gray-900", "dark:text-white");
  clickedTab.classList.remove("text-gray-700", "dark:text-gray-300");
}

// Select all containers
const containers = document.querySelectorAll(".container");

containers.forEach(container => {
  const svgPath = container.querySelector("svg path");
  const finalPath = "M 10 100 Q 500 100 890 100";

  container.addEventListener("mousemove", e => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const path = `M 10 100 Q ${x} ${y} 890 100`;

    gsap.to(svgPath, {
      attr: { d: path },
      duration: 0.1,
      ease: "power.out",
    });
  });

  container.addEventListener("mouseleave", () => {
    gsap.to(svgPath, {
      attr: { d: finalPath },
      duration: 1.3,
      ease: "elastic.out(1, 0.2)",
    });
  });
});

// Card Insertion 
function insertCard({ image, title, description, tags, liveLink, sourceLink }) {
  const container = document.querySelector('.parent-container');

  // Create card element
  const card = document.createElement('div');
  card.className =
    'flex flex-col rounded-xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl shadow-lg transition-all duration-300 overflow-hidden hover:scale-105';

  card.innerHTML = `
    <div class="relative group">
      <img
        src="${image}"
        alt="${title}"
        class="h-48 w-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-500"
      >
        <a
          href="${liveLink}"
          target="_blank"
          class="px-4 py-2 bg-white/5 backdrop-blur-md text-white text-sm rounded-lg border border-white/20 hover:bg-white/10 hover:scale-105 transition"
        >
          <i class="ri-external-link-fill text-xl"></i> <span>Live Demo</span>
        </a>
        <a
          href="${sourceLink}"
          target="_blank"
          class="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition"
        >
          <i class="ri-code-view text-xl"></i> <span>Source Code</span>
        </a>
      </div>
    </div>

    <div class="p-4 flex flex-col gap-2">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${title}</h3>
      <p class="text-gray-700 dark:text-gray-400 text-sm">${description}</p>

      <div class="mt-3 flex flex-wrap gap-2">
        ${tags
          .map(
            (tag) => `
            <span class="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white/90 shadow-sm hover:scale-105 transition-transform">
              ${tag}
            </span>`
          )
          .join('')}
      </div>
    </div>
  `;

  // Append to container
  container.appendChild(card);
}

// Example usage:
insertCard({
  image:
    'https://plus.unsplash.com/premium_photo-1683548102827-105533f5c9c3?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60',
  title: 'Gen Z AI',
  description:
    'An AI-powered platform tailored for Gen Z, offering personalized content and career guidance.',
  tags: ['HTML 5', 'CSS 3', 'JavaScript'],
  liveLink: '#',
  sourceLink: '#'
});

// Add more cards like this:
insertCard({
  image: 'https://plus.unsplash.com/premium_photo-1706102974861-c65692f3b36c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5vdGUlMjBhcHB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
  title: 'Modern UI Kit',
  description: 'A sleek UI component library built with Tailwind CSS for fast design workflow.',
  tags: ['Tailwind CSS', 'JavaScript', 'UI Design'],
  liveLink: '#',
  sourceLink: '#'
});
// Add more cards like this:
insertCard({
  image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
  title: 'Business Landing Page',
  description: 'A modern and interactive business landing page for dairy farm.',
  tags: ['Tailwind CSS', 'ES 6', 'UI Design'],
  liveLink: '#',
  sourceLink: '#'
});


// Message on email copy
  function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
      const toast = document.getElementById('toast');
      toast.classList.remove('opacity-0');
      toast.classList.add('opacity-100');
      setTimeout(() => {
        toast.classList.remove('opacity-100');
        toast.classList.add('opacity-0');
      }, 2000);
    });
  }