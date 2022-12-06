const EMOJIS_JSON = `./data/emojis.json`;

(() => {
  const app = {
    initialize() {
      // cache
      this.cacheElements();
      // register listeners
      this.registerListeners();
      // update ui
      this.updateUI();
    },
    cacheElements() {
      this.$emojiList = document.querySelector(".emojis-list");
      this.$tooltip = document.querySelector(".tooltip");
    },
    registerListeners() {
      this.$emojiList.addEventListener("mousemove", (ev) => {
        const target = this.getEmojiNode(ev.target);
        if(target){
          const data = target.querySelector(
          `.emoji__tooltip`
        ).innerHTML;
          }
        if (this.$tooltip.innerHTML !== data) {
          this.$tooltip.innerHTML = data;
        }
        this.$tooltip.style.left = `${ev.pageX}px`;
        this.$tooltip.style.top = `${ev.pageY}px`;
      });
    },
    async updateUI() {
      const data = await loadJsonByPromise(EMOJIS_JSON);
      this.$emojiList.innerHTML = this.getHTMLForEmojis(data);
    },
    getHTMLForEmojis(emojis) {
      return emojis.map((emoji) => this.getHTMLForEmoji(emoji)).join("");
    },
    getHTMLForEmoji({ symbol, title, keywords }) {
      return `
      <div class="emoji">
      <span class="emoji__symbol">${symbol}</span>
      <span class="emoji__title">${title}</span>
      <span class="emoji__tooltip">
          <code class="emoji__unicode">
              <pre>${symbol}</pre>
          </code>
          <span class="emoji__keywords">${keywords}</span>
      </span>
  </div>
  
      `;
    },
    getEmojiNode(node, depth = 0) {
      console.log(node);
      if (node && node.classList.contains("emojis")) {
        return null;
      }
      if (node && node.classList.contains("emoji")) {
        return node;
      }
      return this.getEmojiNode(node.parentNode, ++depth);
    },
  };
  app.initialize();
})();
(() => {
 const app = {
   initialize() {
   // cache
   this.cacheElements();
   // register listeners
   this.registerListeners();
   // update ui
   this.updateUI();
 },
 cacheElements() {
 },
 registerListeners() {
 },
 async updateUI() {
 },
 };
 app.initialize();
})();