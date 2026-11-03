let myLeads=[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
    console.log("Save button has been clicked!");
    myLeads.push(inputEl.value);
    console.log(myLeads);
    renderLeads();
    inputEl.value = "";
})

function renderLeads(){
    let listItems = "";
    for(let i=0 ; i<myLeads.length; i++){
        console.log(myLeads[i]);
       // listItems += "<li><a target='_blank' href='" + myLeads[i] +"'>" + myLeads[i]+ "</a></li>";
       listItems +=`<li>
                      <a target='_blank' href="${myLeads[i]}">
                         ${myLeads[i]}
                      </a>
                    </li>`;
    }
    ulEl.innerHTML = listItems;
}
   //const li = document.createElement("li");
   //li.textContent = myLeads[i];
   //ulEl.append(li);
