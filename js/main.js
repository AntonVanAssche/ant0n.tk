// Define a list with all project pages.
const list = [
   { page: "/projects/bashpass.html", name: "BashPass" },
   { page: "/projects/dotfiles.html", name: "Dotfiles" },
   { page: "/projects/gnoti.html", name: "Gnoti" },
   { page: "/projects/joke-bot.html", name: "Joke Bot" },
   { page: "/projects/music-bot.html", name: "Music Bot" },
   { page: "/projects/pythonstuff.html", name: "PythonStuff" },
   { page: "/projects/rpi-homeserver.html", name: "Raspberry Pi Home Server" },
   { page: "/projects/rpi-nas.html", name: "Raspberry Pi NAS" },
]

// Check for saved 'darkMode' in localStorage.
let darkMode = localStorage.getItem("darkMode")

// Define the toggle button.
const darkModeToggle = document.getElementById("darkmode-toggle")

// Devine the toggle button icon.
const darkModeImg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
const lightModeImg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`

const enableDarkMode = () => {
   // 1. Play the sound effect.
   new Audio("/audio/dark.mp3").play()
   // 2. Add the class to the body.
   document.body.classList.remove("lightmode")
   // 3. Update darkMode in localStorage.
   localStorage.setItem("darkMode", "enabled")
   // 4. Update the toggle button.
   darkModeToggle.innerHTML = lightModeImg
   // 5. Update the navigation bar.
   document.getElementById("nav").classList.add("navbar-inverse")
   document.getElementById("nav").classList.remove("navbar-default")
}

const disableDarkMode = () => {
   // 1. Play the sound effect.
   new Audio("/audio/light.mp3").play()
   // 2. Add the class to the body.
   document.body.classList.add("lightmode")
   // 3. Update darkMode in localStorage.
   localStorage.setItem("darkMode", "disabled")
   // 4. Update the toggle button.
   darkModeToggle.innerHTML = darkModeImg
   // 5. Update the navigation bar.
   document.getElementById("nav").classList.add("navbar-default")
   document.getElementById("nav").classList.remove("navbar-inverse")
}

// This function will slowly fade the `preloader` class out over a duration of 200ms
const windowLoaded = () => {
   $(".preloader").delay(200).fadeOut("slow")
}

$(window).load(() => {
   windowLoaded()

   list.forEach(({ page, name }) => {
      const liElement = document.createElement("li")
      const aElement = document.createElement("a")
      aElement.href = page
      aElement.innerHTML = name
      liElement.appendChild(aElement)
      document.getElementById("project-list").appendChild(liElement)
   })

   if (darkMode === null) {
      enableDarkMode()
   }

   // If the user already visited and enabled darkMode
   // start things off with it on.
   if (darkMode !== "enabled") {
      disableDarkMode()
   }
})

// When someone clicks the button
darkModeToggle.addEventListener("click", () => {
   // get their darkMode setting
   darkMode = localStorage.getItem("darkMode")

   // If darkMode isn't enabled, enable it.
   // Else disable it.
   if (darkMode !== "enabled") {
      enableDarkMode()
   } else {
      disableDarkMode()
   }
})
