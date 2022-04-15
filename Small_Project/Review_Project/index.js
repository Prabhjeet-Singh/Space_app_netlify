// local reviews data
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:"image/01img.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:"image/02img.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:"image/03img.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:"image/04img.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  
  let Nam=document.getElementById("name")
  const job= document.getElementById("job")
  const detail=document.getElementById("info")
  const  img=document.getElementById("person-img")

// about button
 const prevBtn=document.getElementById("prev-btn")
 const nextBtn=document.getElementById("next-btn")
 const randomBtn=document.getElementById("random-btn")
 // random id
 let idNum=0;


window.addEventListener('DOMContentLoaded',function(){
    allItem();
})

function allItem(){
    const bio=reviews[idNum];
    img.src=bio.img
    Nam.textContent=bio.name;
    job.textContent=bio.job;
    detail.textContent=bio.text;

}
prevBtn.addEventListener('click',function(){
   idNum--;
   if(idNum<0){
       idNum=3;
   }
   allItem();
})
nextBtn.addEventListener('click',function(){
   idNum++;
   if(idNum>reviews.length-1){
       idNum=0;
   }
   allItem();
})
randomBtn.addEventListener('click',function(){
   idNum=Math.floor(Math.random()*reviews.length)
   allItem();
})