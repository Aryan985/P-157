AFRAME.registerComponent("comic",{
    init:function(){
        this.placeContainer = this.el
        this.createCartoon()
    },

    createCartoon:function(){
        const thumbNailsRef=[
            {
                id: "batman",
                title: "Batman",
                url: "./assets/batman.webp"
            },

            {
                id: "strange",
                title: "DR Strange",
                url: "./assets/dr strange.jpg"
            },

            {
                id: "ironman",
                title: "Iron Man",
                url: "./assets/iron man.webp"
            },

            {
                id: "spider",
                title: "Spiderman",
                url: "./assets/spider.jpg"
            },
        ];

        let previousXPosition = -60;

        for(var item of thumbnailsRef){
const posx =  previousXPosition +25;
const posY = 10
const posZ = -40
const position = {x: posx,y: posY, z: posZ}
previousXPosition = posx

const borderEl =  this.createBorder(position,item,id)


const thumbnail =  this.createThumbNail(item)
borderEl.apendChild(titleEl)

this.placesContainer.appendChild(borderEl)

        }
    },
    createBorder:function(position,id){
        const entityEl = document.createElement("a-entity")
        entityEl.setAttribute("id",id)
        entityEl.setAttribute("visible",true)
        entityEl.setAttribute("geometry",{
            primitive: "ring",
            radiusInner:9,
            radiusOuter:10,
        });
        entityEl.setAttribute("position",position)
        entityEl.setAttribute("materials",{
            color:"#0077CC",
            opacity:1
        })

        return entityEl
    },
    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "circle",
          radius: 9,
        });
        entityEl.setAttribute("material", { src: item.url });
    
        return entityEl;
      },
      createTitleEl: function (position, item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
          font: "exo2bold",
          align: "center",
          width: 70,
          color: "#e65100",
          value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);
        return entityEl;
      },
})
