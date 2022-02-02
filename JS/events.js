var comicInfoList = [
  {
    id: "eternals",
    title: "Eternals",
    info: `In the Marvel Universe, the Eternals are an offshoot of humanity known as Homo immortalis,
      created one million years ago by the enigmatic alien Celestials to defend Earth with their superhuman powers and abilities.
      Their primary adversaries are the Deviants, who share a similar origin and pose a regular threat to humanity. Due to their virtual immortality,
      Eternals have largely secluded themselves from humans, 
      with their god-like status forming the basis of various mythological figures around the world.`,
  },
  {
    id: "im_captain_america",
    title: "Im Captain America",
  },
  {
    id: "iron_man_annual",
    title: "Iron Man Annual",
  },
  {
    id: "the_death_of_doctor_strange",
    title: "The Death Of Doctor Strange",
  },
];

AFRAME.registerComponent("cursor-event", {
  schema: {
    selectedId: { type: "string", default: "" },
  },

  init: function () {
    // Do something when component first attached.

    this.handelMouseEntry();
    this.handelMouseLeave();
    this.handelClick();
  },

  handleComicList: function () {
    const id = this.el.getAttribute("id");
    const comicList = [
      "eternals",
      "im_captain_america",
      "iron_man_annual",
      "the_death_of_doctor_strange",
    ];

    if (comicList.includes(id)) {
      const placesContainer = document.querySelector("#comic-container");

      placesContainer.setAttribute("cursor-event", {
        selectedId: id,
      });

      this.el.setAttribute("material", {
        color: "blue",
        opacity: 1,
      });
    }
  },

  handelMouseEntry: function () {
    entityEL = document.querySelector("#comic-container");
    const { state } = entityEL.getAttribute("comics");
    this.el.addEventListener("mouseenter", () => {
      this.handleComicList();
    });
  },

  handelMouseLeave: function () {
    this.el.addEventListener("mouseleave", () => {
      const { selectedId } = this.data;

      if (selectedId) {
        const el = document.querySelector(`#${selectedId}`);
        const id = el.getAttribute("id");

        if (id === selectedId) {
          el.setAttribute("material", {
            color: "#fff",
            opacity: 0.7,
          });
        }
      }
    });
  },

  handelClick: function () {
    this.el.addEventListener("click", (e) => {
      var id = this.el.getAttribute("id");

      const comicList = [
        "eternals",
        "im_captain_america",
        "iron_man_annual",
        "the_death_of_doctor_strange",
      ];

      if (comicList.includes(id)) {
        console.log(id);

        // making the comics info visible
        entityELInfo = document.querySelector("#comic-info");
        entityELInfo.setAttribute("visible", true);

        // setting position to the comic text plane
        entityELtext = document.querySelector("#comic-text-plane");
        entityELtext.setAttribute("position", {
          x: 1,
          y: -0.53751,
          z: -11.2474,
        });

        // hiding rest of the entity
        restEntity = document.querySelector("#comic-container");
        restEntity.setAttribute("visible", false);

        // setting the comic img and the img border in the info bar
        var img = document.createElement("a-image");
        img.setAttribute("src", `./images/${id}.jpg`);
        img.setAttribute("id", id);
        img.setAttribute("position", { x: -8.60633, y: -0.13182, z: -9.79364 });
        img.setAttribute("scale", { x: 4.9, y: 5.1, z: 1 });

        var border = document.createElement("a-plane");
        border.setAttribute("position", {
          x: -8.60633,
          y: -0.13182,
          z: -9.8,
        });
        border.setAttribute("scale", { x: 5.2, y: 5.4, z: 1 });
        border.setAttribute("material", { color: "#000" });

        entityELInfo.appendChild(img);
        entityELInfo.appendChild(border);

        title = "";

        for (var i in comicInfoList) {
          if (comicInfoList[i].id === id) {
            title = comicInfoList[i].title;
          }
        }

        // Writing The Title in the text
        var text = document.querySelector("#textContainer-title");
        text.setAttribute("text", {
          value: `Title: ${title}`,
          width: 14,
          color: "#000",
        });
        
        // Writing info in the text
        var textInfo = document.querySelector()
      }
    });
  },
});
