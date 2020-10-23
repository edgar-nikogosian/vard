const container = document.querySelector('.container');
const arr = Array.from(container.getElementsByTagName('img'));
arr.map((element) => {
  element.addEventListener('click', () => {
    let item = document.createElement('div');
    item.innerHTML = element.outerHTML;
    item.classList.add('active-img');
  
    let backGround = document.createElement('div');
    backGround.classList.add('background')
   
    item.appendChild(backGround);


    container.appendChild(item);
    backGround.addEventListener('click',()=>{
        if(container.contains(item)){
            container.removeChild(item)
        }
    })
 
    
     


  });
});
