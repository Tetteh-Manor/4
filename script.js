// Interaction 1: Dark Mode Toggle
const darkModeBtn = document.getElementById('dark-mode-btn');
darkModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Interaction 2: "Follow" Button Toggle
const followBtns = document.querySelectorAll('.follow-btn');

followBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (btn.innerText === " + Follow") {
            btn.innerText = "Following";
            btn.style.backgroundColor = "white";
            btn.style.color = "#0a66c2";
            btn.style.border = "1px solid #0a66c2";
        } else {
            btn.innerText = " + Follow";
            btn.style.backgroundColor = ""; /* Reset to default */
            btn.style.color = "";
            btn.style.border = "";
        }
    });
});

// Interaction 3: Simple "Post" Alert
const postBtn = document.getElementById('post-btn');
const postInput = document.getElementById('post-input');

postBtn.addEventListener('click', function() {
    const content = postInput.value;
    if (content.length > 0) {
        alert("Your post was shared successfully!");
        postInput.value = ""; // Clear the input box
    } else {
        alert("Please write something before posting.");
    }
});