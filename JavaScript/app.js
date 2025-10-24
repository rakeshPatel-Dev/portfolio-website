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

// tab switching for experience section

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
// guitar line animation
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

// ---------------- Project Data ----------------
const projects = [
  {
    image: '/assets/images/reminder app.webp',
    title: 'Call Reminder App',
    description: 'A sleek frontend call reminder app to schedule calls, get timely notifications, and never miss important conversations again.',
    tags: ['HTML 5', 'CSS 3',"tailwind CSS","ES6" ,'JavaScript'],
    liveLink: 'https://callreminderapp.netlify.app/',
    sourceLink: 'https://github.com/rakeshPatel-Dev/Note-App.git',
    type: 'web', // for filtering
    containerSelectors: ['.parent-container', ".project-container"]
  },
{
  image: '/assets/images/todoapp.webp',
  title: 'To Do App',
  description: 'A clean and interactive frontend to-do app to organize tasks, and track daily productivity efficiently.',
  tags: ['HTML 5', 'Tailwind CSS', 'JavaScript', 'LocalStorage'],
  liveLink: 'https://rakeshpatel-dev.github.io/todo-App/',
  sourceLink: 'https://github.com/rakeshPatel-Dev/todo-App',
  type: 'web',
  containerSelectors: ['.parent-container', '.project-container']
},
  {
    image: '/assets/images/netflix clone.webp',
    title: 'Netflix Nepal Clone',
    description: 'A responsive Netflix-inspired frontend clone showcasing movies and shows with interactive UI, search, and visually appealing design.',
    tags: ['Tailwind CSS', 'ES6', 'UI Design','Web Clone'],
    liveLink: '#',
    sourceLink: 'https://github.com/rakeshPatel-Dev/Clone-Projects/tree/main/Netflix',
    type: 'web',
    containerSelectors: ['.parent-container', '.project-container']
  },
  {
    image: '/assets/images/user finder.webp',
    title: 'Find User Feature',
    description: 'An App feature to find or search People or Stuffs using name or keyword.',
    tags: [ "HTML 5", 'Tailwind CSS', 'ES6', 'UI Design','Feature'],
    liveLink: '#',
    sourceLink: 'https://github.com/rakeshPatel-Dev/User-Finder',
    type: 'web',
    containerSelectors: ['.project-container']
  },
  {
    image: '/assets/images/love confession.webp',
    title: 'Love Confession Website',
    description: 'Playful frontend confession site where the No button is disabled; clicking it shows cheeky pickup lines until they say yes.',
    tags: [ "HTML 5", 'Tailwind CSS', 'ES6', 'Animation','MicroInteraction'],
    liveLink: '#',
    sourceLink: 'https://github.com/rakeshPatel-Dev/Love-Confession',
    type: 'web',
    containerSelectors: ['.project-container']
  }
];

// ---------------- Card Insertion ----------------
function insertCard(project, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const card = document.createElement('div');
  // Add tilt class and data attributes
  card.className = 'tilt flex flex-col rounded-xl bg-white/10 dark:bg-gray-800/20 backdrop-blur-xl shadow-lg transition-all duration-300 overflow-hidden opacity-0';
  card.setAttribute('data-tilt', '');
  card.setAttribute('data-tilt-max', '15');
  card.setAttribute('data-tilt-speed', '400');
  card.setAttribute('data-tilt-glare', 'true');
  card.setAttribute('data-tilt-max-glare', '0.3');

  card.innerHTML = `
    <div class="relative group">
      <img src="${project.image}" loading="lazy" decoding="async" alt="${project.title}" class="h-48 w-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-105"/>
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-500">
        <a href="${project.liveLink}" target="_blank" class="px-3 py-2 bg-white/5 backdrop-blur-md text-white text-sm rounded-lg border border-white/20 hover:bg-white/10 hover:scale-105 transition">
          <i class="ri-external-link-fill text-xl mr-2"></i> <span>Live</span>
        </a>
        <a href="${project.sourceLink}" target="_blank" class="px-3 py-2 bg-white/10 backdrop-blur-md text-white text-sm rounded-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition">
          <i class="ri-code-view text-xl mr-2"></i> <span>Code</span>
        </a>
      </div>
    </div>
    <div class="p-4 flex flex-col gap-2">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${project.title}</h3>
      <p class="text-gray-700 dark:text-gray-400 text-sm">${project.description}</p>
      <div class="mt-3 flex flex-wrap gap-2">
        ${project.tags.map(tag => `<span class="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white/90 shadow-sm hover:scale-105 transition-transform">${tag}</span>`).join('')}
      </div>
    </div>
  `;

  container.appendChild(card);

  // Fade-in animation
  gsap.to(card, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });

  // Initialize Tilt on this card
  if (typeof VanillaTilt !== "undefined") {
    VanillaTilt.init(card, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 0.3
    });
  }
}


// ---------------- Render Projects with Filter ----------------
function renderProjects({ containerSelector, filter = 'all', filterable = false }) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.innerHTML = ''; // Clear existing cards

  // Filter projects only if container is filterable (project page)
  const filteredProjects = filterable
    ? projects.filter(p => p.containerSelectors.includes(containerSelector) && (filter === 'all' || p.type === filter))
    : projects.filter(p => p.containerSelectors.includes(containerSelector));

  if (filteredProjects.length === 0 && filterable) {
    const msg = document.createElement('p');
    msg.className = 'text-gray-400 text-center col-span-full mt-4';
    msg.textContent = `No ${filter === 'web' ? 'Web' : 'Mobile'} project created yet.`;
    container.appendChild(msg);
  } else {
    filteredProjects.forEach(project => insertCard(project, containerSelector));
  }
}

// ---------------- Tab Filter Logic (for project page only) ----------------
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter || 'all';
    renderProjects({ containerSelector: '.project-container', filter, filterable: true });
  });
});

// ---------------- Initial Render ----------------
// Home page cards (no filter)
renderProjects({ containerSelector: '.parent-container', filterable: false });

// Project page cards (all by default)
renderProjects({ containerSelector: '.project-container', filter: 'all', filterable: true });

// tab switch for project filter
const menuTab = document.querySelectorAll('.tab');
const filterMessage = document.querySelector('nav p');

// Function to update active tab and colors
function setActiveTab(tab) {
  menuTab.forEach(t => {
    t.classList.remove('bg-blue-500', 'text-white');
    t.classList.add('bg-gray-200/80', 'text-gray-700', 'dark:bg-gray-800/80', 'dark:text-gray-300');
  });
  tab.classList.add('bg-blue-500', 'text-white');
  tab.classList.remove('bg-gray-200/80', 'text-gray-700', 'dark:bg-gray-800/80', 'dark:text-gray-300');
}

// Initial active tab on page load
const initialActive = document.querySelector('.tab.active') || menuTab[0];
setActiveTab(initialActive);

// Add click events
menuTab.forEach(tab => {
  tab.addEventListener('click', () => {
    setActiveTab(tab);
    const filter = tab.dataset.filter;
    // Call your filter function here, e.g., filterProjects(filter)
    console.log('Filter selected:', filter);
  });
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


  // downloading toast

  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, duration = 2000) {
    const toast = document.createElement('div');
    toast.className = "bg-gray-800 text-white px-4 py-2 rounded shadow-lg opacity-0 transform translate-y-2 transition-all duration-300";
    toast.innerText = message;
    toastContainer.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.classList.remove('opacity-0', 'translate-y-2');
      toast.classList.add('opacity-100', 'translate-y-0');
    });

    // Animate out and remove
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // Attach listener to all download buttons
  document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const href = btn.getAttribute('href') || '';
      const filename = href.split('/').pop() || 'file';
      showToast(`Downloading ${filename}...`);
    });
  });


/**
 * Robust VanillaTilt init/destroy handler.
 * - Only enables tilt when window width >= MOBILE_BREAKPOINT.
 * - Destroys tilt instances when below breakpoint.
 * - Guards against double-initialization.
 * - Debounces resize events.
 */

(function () {
  const MOBILE_BREAKPOINT = 768; // below this -> disable tilt
  const DEBOUNCE_MS = 150;
  const selector = "[data-tilt]";

  // helper debounce
  function debounce(fn, wait = DEBOUNCE_MS) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  // initialize tilt on a NodeList (only if not already initialized)
  function initTiltOnElements(elements) {
    if (!elements || elements.length === 0) return;
    if (typeof VanillaTilt === "undefined") {
      console.warn("VanillaTilt not loaded — include tilt.js before this script.");
      return;
    }
    elements.forEach(el => {
      // guard: not already initialized
      if (!el.vanillaTilt) {
        // use element attributes if present, otherwise fallback defaults
        const options = {
          max: parseFloat(el.getAttribute("data-tilt-max")) || 10,
          speed: parseFloat(el.getAttribute("data-tilt-speed")) || 400,
          scale: parseFloat(el.getAttribute("data-tilt-scale")) || 1.02,
          glare: el.getAttribute("data-tilt-glare") === "true" || false,
          "max-glare": parseFloat(el.getAttribute("data-tilt-max-glare")) || 0.15,
          perspective: parseFloat(el.getAttribute("data-tilt-perspective")) || 1000
        };
        VanillaTilt.init(el, options);
        // optional log for debugging
        // console.log("VanillaTilt initialized on", el, options);
      }
    });
  }

  // destroy tilt on all elements
  function destroyTiltOnElements(elements) {
    if (!elements || elements.length === 0) return;
    elements.forEach(el => {
      if (el.vanillaTilt && typeof el.vanillaTilt.destroy === "function") {
        try {
          el.vanillaTilt.destroy();
          // console.log("VanillaTilt destroyed on", el);
        } catch (err) {
          console.warn("Error destroying VanillaTilt instance:", err);
        }
      }
    });
  }

  // main toggler based on width
  function handleTiltToggle() {
    const width = window.innerWidth;
    const elements = document.querySelectorAll(selector);

    if (width >= MOBILE_BREAKPOINT) {
      initTiltOnElements(elements);
    } else {
      destroyTiltOnElements(elements);
    }
  }

  // run after DOM ready
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(() => {
    // initial run
    handleTiltToggle();

    // handle dynamic content: if you add new elements later, call handleTiltToggle() again
    // listen for resize with debounce
    window.addEventListener("resize", debounce(handleTiltToggle, DEBOUNCE_MS));
  });

  // Expose for manual control (optional)
  window.__TiltControl = {
    enable: () => initTiltOnElements(document.querySelectorAll(selector)),
    disable: () => destroyTiltOnElements(document.querySelectorAll(selector)),
    toggle: handleTiltToggle
  };
})();
