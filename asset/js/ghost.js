const url =
    "";

const z = fetch(url).then(async (e) => {
    const { posts } = await e.json();
    document.getElementById("ghost-loading").remove();
    const ghostModal = document.getElementById("ghost-modal");
    const postToElement = (post) => {
        const str = `
  <p style="font-size: small">
    <a href="https://posts.rishi.cx/${post.slug}" class="outlink-w"><b></b>${post.title}</b></a> — ${post.excerpt}
  </p>
  `;
        const div = document.createElement("div");
        div.innerHTML = str;
        return div.firstElementChild;
    };
    posts.forEach((post) => {
        ghostModal.appendChild(postToElement(post));
    });
});