let tableTimeAll=document.querySelectorAll('.table');
let container=document.querySelector('.container_time');
tableTimeAll.forEach((e2)=>{
    e2.addEventListener('click',(e)=>{
        tableTimeAll.forEach((e3)=>{
            e3.classList.remove('active');
        });
        let currentElement=e.target;
        let currentElementId=e.target.dataset.id;
        dataUpdate(currentElementId);
        currentElement.classList.add('active');
    });
});
function dataUpdate(data_Id){
  fetch('data.json').
         then((res)=>res.json()).
         then((data)=>{
                container.innerHTML=
                `
                <div class="row_one work">
        <div class="table_one">
          <div class="img_one">
            <img src="images/icon-work.svg"/>
          </div>
        </div>
        <div class="row_two">
          <div class="row_header">
            <div class="header_name">Work</div>
            <svg class="elipses" width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF" fill-rule="evenodd" />
            </svg>
          </div>
          <div class="row_time">
          ${data_Id=='2'?
          data[0].timeframes.weekly.current: data_Id=='3'?
          data[0].timeframes.monthly.current: data[0].timeframes.daily.current}hrs
          </div>
          <div class="row_footer">
            Last Week -  ${data_Id=='2'?
          data[0].timeframes.weekly.previous: data_Id=='3'?
          data[0].timeframes.monthly.previous: data[0].timeframes.daily.previous}hrs
          </div>
        </div>
      </div>
      <div class="row_one play">
        <div class="table_one">
          <div class="img_one">
            <img src="images/icon-play.svg" />
          </div>
        </div>
        <div class="row_two">
          <div class="row_header">
            <div class="header_name">Play</div>
            <svg class="elipses" width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF" fill-rule="evenodd" />
            </svg>
          </div>
          <div class="row_time">
             ${data_Id=='2'?
          data[1].timeframes.weekly.current: data_Id=='3'?
          data[1].timeframes.monthly.current: data[1].timeframes.daily.current}hrs
          </div>
          <div class="row_footer">
            Last Week - ${data_Id=='2'?
          data[1].timeframes.weekly.previous: data_Id=='3'?
          data[1].timeframes.monthly.previous: data[1].timeframes.daily.previous}hrs
          </div>
        </div>
      </div>
      <div class="row_one study">
        <div class="table_one">
          <div class="img_one">
            <img src="images/icon-study.svg" />
          </div>
        </div>
        <div class="row_two">
          <div class="row_header">
            <div class="header_name">Study</div>
            <svg class="elipses" width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF" fill-rule="evenodd" />
            </svg>
          </div>
          <div class="row_time">
            ${data_Id=='2'?
          data[2].timeframes.weekly.current: data_Id=='3'?
          data[2].timeframes.monthly.current: data[2].timeframes.daily.current}hrs
          </div>
          <div class="row_footer">
            Last Week - ${data_Id=='2'?
          data[2].timeframes.weekly.previous: data_Id=='3'?
          data[2].timeframes.monthly.previous: data[2].timeframes.daily.previous}hrs
          </div>
        </div>
      </div>
      <div class="row_one exercise">
        <div class="table_one">
          <div class="img_one">
            <img src="images/icon-exercise.svg" />
          </div>
        </div>
        <div class="row_two">
          <div class="row_header">
            <div class="header_name">Exercise</div>
            <svg class="elipses" width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF" fill-rule="evenodd" />
            </svg>
          </div>
          <div class="row_time">
             ${data_Id=='2'?
          data[3].timeframes.weekly.current: data_Id=='3'?
          data[3].timeframes.monthly.current: data[3].timeframes.daily.current}hrs
          </div>
          <div class="row_footer">
            Last Week -  ${data_Id=='2'?
          data[3].timeframes.weekly.previous: data_Id=='3'?
          data[3].timeframes.monthly.previous: data[3].timeframes.daily.previous}hrs
          </div>
        </div>
      </div>
      <div class="row_one social">
        <div class="table_one">
          <div class="img_one">
            <img src="images/icon-social.svg" />
          </div>
        </div>
        <div class="row_two">
          <div class="row_header">
            <div class="header_name">Social</div>
            <svg class="elipses" width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF" fill-rule="evenodd" />
            </svg>
          </div>
          <div class="row_time">
             ${data_Id=='2'?
          data[4].timeframes.weekly.current: data_Id=='3'?
          data[4].timeframes.monthly.current: data[4].timeframes.daily.current}hrs
          </div>
          <div class="row_footer">
            Last Week -  ${data_Id=='2'?
          data[4].timeframes.weekly.previous: data_Id=='3'?
          data[4].timeframes.monthly.previous: data[4].timeframes.daily.previous}hrs
          </div>
        </div>
      </div>
      <div class="row_one self_care">
        <div class="table_one">
          <div class="img_one">
            <img src="images/icon-self-care.svg" />
          </div>
        </div>
        <div class="row_two">
          <div class="row_header">
            <div class="header_name">Self Care</div>
            <svg class="elipses" width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF" fill-rule="evenodd" />
            </svg>
          </div>
          <div class="row_time">
            ${data_Id=='2'?
          data[5].timeframes.weekly.current: data_Id=='3'?
          data[5].timeframes.monthly.current: data[5].timeframes.daily.current}hrs
          </div>
          <div class="row_footer">
            Last Week - ${data_Id=='2'?
          data[5].timeframes.weekly.previous: data_Id=='3'?
          data[5].timeframes.monthly.previous: data[5].timeframes.daily.previous}hrs
          </div>
        </div>
      </div>
                `
            }).
         catch((error)=>console.log(error));
}
dataUpdate(2);