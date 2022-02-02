var comicInfoList = [
  {
    id: "eternals",
    title: "Eternals",
    info: `In the Marvel Universe, the Eternals are an offshoot of humanity known as Homo immortalis,
      created one million years ago by the enigmatic alien Celestials to defend Earth with their superhuman powers and abilities.
      Their primary adversaries are the Deviants, who share a similar origin and pose a regular threat to humanity. Due to their virtual immortality,
      Eternals have largely secluded themselves from humans, 
      with their god-like status forming the basis of various mythological figures around the world.`,
    img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_%28film%29_poster.jpeg",
  },
  {
    id: "im_captain_america",
    title: "Im Captain America",
    info: `Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics'
      most popular character during the wartime period. The popularity of superheroes waned following the war, and the Captain America comic book was discontinued in 1950,
      with a short-lived revival in 1953. Since Marvel Comics revived the character in 1964, Captain America has remained in publication.`,
    img: "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg",
  },
  {
    id: "iron_man_annual",
    title: "Iron Man Annual",
    info: `Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee,
     developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963),
     and received his own title in Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk.`,
    img: "https://upload.wikimedia.org/wikipedia/en/4/47/Iron_Man_%28circa_2018%29.png",
  },
  {
    id: "the_death_of_doctor_strange",
    title: "The Death Of Doctor Strange",
    info: `Doctor Stephen Strange is a fictional character appearing in American comic books published by Marvel Comics.
      Created by Steve Ditko with Stan Lee,[5] the character first appeared in Strange Tales #110 (cover-dated July 1963).
      Doctor Strange serves as the Sorcerer Supreme, the primary protector of Earth against magical and mystical threats.
      Strange was created during the Silver Age of Comic Books to bring a different kind of character and themes of mysticism to Marvel Comics.`,
    img: "https://upload.wikimedia.org/wikipedia/en/4/4f/Doctor_Strange_Vol_4_2_Ross_Variant_Textless.jpg",
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
        title = "";
        info = "";
        srcImg = "";

        for (var i in comicInfoList) {
          if (comicInfoList[i].id === id) {
            title = comicInfoList[i].title;
            info = comicInfoList[i].info;
            srcImg = comicInfoList[i].img;
          }
        }

        // making the comics info visible
        entityELInfo = document.querySelector("#comic-info");
        entityELInfo.setAttribute("visible", true);

        // setting position to the comic text plane
        entityELtext = document.querySelector("#comic-text-plane");
        entityELtext.setAttribute("position", {
          x: -1,
          y: -1.28,
          z: -11.2474,
        });

        // hiding rest of the entity
        restEntity = document.querySelector("#comic-container");
        restEntity.setAttribute("visible", false);

        // setting the comic img and the img border in the info bar
        var img = document.createElement("a-image");
        img.setAttribute("src", srcImg);
        img.setAttribute("id", id);
        img.setAttribute("position", { x: -7.60633, y: -0.13182, z: -9.79364 });
        img.setAttribute("scale", { x: 4.9, y: 5.3, z: 1 });

        var border = document.createElement("a-plane");
        border.setAttribute("position", {
          x: -7.60633,
          y: -0.13182,
          z: -9.8,
        });
        border.setAttribute("scale", { x: 5.2, y: 5.6, z: 1 });
        border.setAttribute("material", { color: "#000" });

        entityELInfo.appendChild(img);
        entityELInfo.appendChild(border);

        // Writing The Title in the text
        var text = document.querySelector("#textContainer-title");
        text.setAttribute("text", {
          value: `Title: ${title}`,
          width: 14,
          color: "#000",
          opacity: 3,
        });

        // Writing info in the text
        var textInfo = document.querySelector("#textContainer-info");
        textInfo.setAttribute("text", {
          value: `${info}`,
          width: 8,
          color: "#000",
        });
      }
    });
  },
});
