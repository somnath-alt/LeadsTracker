let myLeads=[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("save-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads();}

inputBtn.addEventListener("click", function(){
    console.log("Save button has been clicked!");
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
    //console.log(localStorage.getItem("myLeads"));
})

deleteBtn.addEventListener("dblclick", function(){
    console.log("Delete button has been double clicked!");
    localStorage.clear();
    myLeads = [];
    renderLeads();
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
  