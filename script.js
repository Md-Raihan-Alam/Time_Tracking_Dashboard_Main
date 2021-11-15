let tableTimeAll=document.querySelectorAll('.table');
tableTimeAll.forEach((e2)=>{
    e2.addEventListener('click',(e)=>{
        tableTimeAll.forEach((e3)=>{
            e3.classList.remove('active');
        });
        let currentElement=e.target;
        currentElement.classList.add('active');
    });
});