const hearts = document.querySelectorAll(".hart_icon");
hearts.forEach((heart) => {
    heart.addEventListener("click", function() {
        const navCount = document.getElementById("nav_count").innerText;
        const count = parseInt(navCount) + 1;
        document.getElementById("nav_count").innerText = count;
        heart.classList.toggle("fa-solid");
        heart.classList.toggle("fa-regular");
        heart.classList.toggle("text-red-500");
    });
});
