const colors = [
    "#E57373",
    "#FF5252",
    "#880E4F",
    "#C2185B",
    "#BA68C8",
    "#673AB7",
    "#7C4DFF",
    "#5C6BC0",
    "#3F51B5",
    "#2196F3",
    "#2979FF",
    "#4DD0E1",
    "#4DB6AC",
    "#81C784",
    "#7CB342",
    "#DCE775",
    "#F57F17",
    "#FFF176",
    "#FFB74D",
    "#FF8A65",
    "#A1887F",
    "#FAFAFA",
  ];

  const container = document.querySelector('.container');
  const btn = document.querySelector('.btn');

  btn.addEventListener('click',(e)=>{
     container.style.backgroundColor = `${colors[Math.floor(Math.random() * 22)]}`
  });
