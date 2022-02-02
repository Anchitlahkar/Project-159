AFRAME.registerComponent("comics", {
  schema: {
    state: { type: "string", default: "list" },
    selectedCard: { type: "string", default: "#card1" },
  },

  init: function () {
    // Do something when component first attached.
    this.ComicContainer = this.el;
    this.createComicCards();
  },

  createComicCards: function () {
    const thumbNailsRef = [
      {
        id: "eternals",
        title: "Eternals",
        url: "./images/Eternals.jpg",
      },
      {
        id: "im_captain_america",
        title: "I am Captain America",
        url: "./images/im_captain_america.jpg",
      },
      {
        id: "iron_man_annual",
        title: "Iron Man Annual",
        url: "./images/iron_man_annual.jpg",
      },
      {
        id: "the_death_of_doctor_strange",
        title: "The Death Of Doctor Strange",
        url: "./images/the_death_of_doctor_strange.jpg",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 0;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      //Border Element
      const borderEl = this.createBorder(item.id, position);

      //Title Text Element
      const title = this.createTitleEl(position, item);
      borderEl.appendChild(title);

      //ThumbNail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      this.ComicContainer.appendChild(borderEl);
    }
  },

  createBorder: function (id, position) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 18,
      height: 20,
    });

    UpdatePosition = { x: position.x, y: position.y, z: position.z + 5 };

    entityEl.setAttribute("position", UpdatePosition);
    entityEl.setAttribute("material", {
      color: "#fff",
      opacity: 0.7,
    });

    entityEl.setAttribute("cursor-event", {});

    return entityEl;
  },

  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("position", { x: 0, y: 0, z: 0.055 });
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 16,
      height: 18,
    });
    entityEl.setAttribute("material", {
      src: item.url,
    });

    return entityEl;
  },

  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "mozillavr",
      align: "center",
      width: 80,
      color: "#e65100",
      value: item.title,
    });

    const elPosition = position;
    elPosition.y = -26;

    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);

    return entityEl;
  },

  tick: function () {
    const { state } = this.el.getAttribute("comics");
  },
});
