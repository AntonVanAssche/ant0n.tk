const list = [
   { page: "/projects/bashpass.html", name: "BashPass" },
   { page: "/projects/dotfiles.html", name: "Dotfiles" },
   { page: "/projects/gnoti.html", name: "Gnoti" },
   { page: "/projects/joke-bot.html", name: "Joke Bot" },
   { page: "/projects/music-bot.html", name: "Music Bot" },
   { page: "/projects/pythonstuff.html", name: "PythonStuff" },
   { page: "/projects/rpi-homeserver.html", name: "Raspberry Pi Home Server" },
   { page: "/projects/rpi-nas.html", name: "Raspberry Pi NAS" },
];

list.forEach(({ page, name }) => {
   const liElement = document.createElement("li");
   const aElement = document.createElement("a");
   aElement.href = page;
   aElement.innerHTML = name;
   liElement.appendChild(aElement);
   document.getElementById("project-list").appendChild(liElement);
});
