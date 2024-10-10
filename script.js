const firstBtnHidden = document.querySelector(".first-btn-hidden");
const insperationBtn = document.querySelector("#insperation-btn");

//Section 1 (Insperation)

insperationBtn.addEventListener(
    "click",
    toggleClassBtn1,
    false
);

function toggleClassBtn1()
{
if (firstBtnHidden.style.display === "block")
{
    firstBtnHidden.style.display = "none";
}
else
{
    firstBtnHidden.style.display = "block";
}
}

//Breakfast Section (section 1)

const breakfastBtnHidden = document.querySelector(".breakfast-btn-hidden");
const breakfastBtn = document.querySelector("#breakfast-btn");

breakfastBtn.addEventListener(
    "click",
    toggleClassBreakfast,
    false
);

function toggleClassBreakfast()
{
if (breakfastBtnHidden.style.display === "block")
{
    breakfastBtnHidden.style.display = "none";
}
else
{
    breakfastBtnHidden.style.display = "block";
}
}

const lunchBtnHidden = document.querySelector(".lunch-btn-hidden");
const lunchBtn = document.querySelector("#lunch-btn");

lunchBtn.addEventListener(
    "click",
    toggleClassLunch,
    false
);

function toggleClassLunch()
{
if (lunchBtnHidden.style.display === "block")
{
    lunchBtnHidden.style.display = "none";
}
else
{
    lunchBtnHidden.style.display = "block";
}
}

//Dinner Section (section 1)

const dinnerBtnHidden = document.querySelector(".dinner-btn-hidden");
const dinnerBtn = document.querySelector("#dinner-btn");

dinnerBtn.addEventListener(
    "click",
    toggleClassDinner,
    false
);

function toggleClassDinner()
{
if (dinnerBtnHidden.style.display === "block")
{
    dinnerBtnHidden.style.display = "none";
}
else
{
    dinnerBtnHidden.style.display = "block";
}
}

//Snack Section (section 1)

const snackBtnHidden = document.querySelector(".snack-btn-hidden");
const snackBtn = document.querySelector("#snack-btn");

snackBtn.addEventListener(
    "click",
    toggleClassSnack,
    false
);

function toggleClassSnack()
{
if (snackBtnHidden.style.display === "block")
{
    snackBtnHidden.style.display = "none";
}
else
{
    snackBtnHidden.style.display = "block";
}
}

//Section 2 (Shopping List)

const secondBtnHidden = document.querySelector(".second-btn-hidden");
const shoppingListBtn = document.querySelector("#shoppingList-btn");

const addBtn = document.querySelector("#add");
const input = document.querySelector("#input-value");
const listContainer = document.querySelector("#list-container");
const warningText = document.querySelector("#warning-text");
const shoppingItemsLeft = document.querySelector("#shopping-items-left");

shoppingListBtn.addEventListener(
    "click",
    toggleClassBtn2,
    false
);

function toggleClassBtn2()
{
if (secondBtnHidden.style.display === "block")
{
    secondBtnHidden.style.display = "none";
}
else
{
    secondBtnHidden.style.display = "block";
}
}

addBtn.addEventListener(
    "click",
    addItem,
    false
);

function addItem()
{
  let text = input.value;
  if (text.length == 0)
  {
    warningText.innerText = "You have to write something!";
    return;
  }
  else
  {
    warningText.innerText = "";
  }

  const li = document.createElement("li");
  li.innerHTML = text;
  listContainer.appendChild(li);
  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  input.value = "";

  arrayFunction();
}

listContainer.addEventListener("click", function(e)
 {
  if (e.target.tagName === "LI")
  {
    e.target.classList.toggle("checked");   
  }
  else if (e.target.tagName === "SPAN")
  {
    e.target.parentElement.remove();    
  }

  arrayFunction();
  removeOne();

});

function arrayFunction() 
{
    const toDos = [];

    for (let i = 0; i < listContainer.children.length; i++) {
        const toDo = listContainer.children.item(i);

        const toDoInfo = 
        {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("checked")
        };
        
        toDos.push(toDoInfo);

        resultCounter(toDos);
    }
    console.log(toDos);
}

function resultCounter(toDos)
{
const taskCompleted = toDos.filter(task => task.completed);

let shoppingItemsLeftToBuy = taskCompleted.length - toDos.length;
shoppingItemsLeftToBuy *= -1;
shoppingItemsLeft.textContent = "Items left to buy: " + shoppingItemsLeftToBuy;
}

function removeOne()
{
    if (listContainer.children.length === 0)
        {
            shoppingItemsLeft.textContent = "Items left to buy: " + 0;
        }
        
}



 //Section 3 (Add Your Food)
 



const thirdBtnHidden = document.querySelector(".third-btn-hidden");
const addYourFoodBtn = document.querySelector("#addYourFood-btn");

addYourFoodBtn.addEventListener(
     "click",
     toggleClassBtn3,
     false
 );
 
 function toggleClassBtn3()
 {
 if (thirdBtnHidden.style.display === "block")
 {
    thirdBtnHidden.style.display = "none";
 }
 else
 {
    thirdBtnHidden.style.display = "block";
 }
 }

const addPlaceholdersBtn = document.querySelector("#add-placeholders-btn");
const addMorePlaceholdersClass = document.querySelector(".add-more-placeholders-class");
const addMorePlaceholdersTitle = document.querySelector("#add-more-placeholders-title");
let idAdd = 0;

addPlaceholdersBtn.addEventListener(
    "click",
    addMorePlaceholdersFunction,
    false
);

function addMorePlaceholdersFunction()
{
    const addMorePlaceholder = document.createElement("input");

    addMorePlaceholdersClass.appendChild(addMorePlaceholder);
    addMorePlaceholder.setAttribute("type", "text");
    addMorePlaceholder.setAttribute("id", "input-value-ingredients" + idAdd);
    addMorePlaceholder.setAttribute("placeholder", "Add ingredient...");
    idAdd++;
}


//Section 3 (Add to insperation)



const addToInsperationBtn = document.querySelector("#add-to-insperation-btn");
const inputValueFoodTitle = document.querySelector("#input-value-foodTitle");

let myArray = [];
const addAllBtn = document.querySelector("#add-all-btn");
const inputAll = document.querySelectorAll("#input-value-ingredients");
let boxNameCount = 1;//Test

addAllBtn.addEventListener(
    "click",
    addAllFuntion,
    false
);

function addAllFuntion()
{
    let input = document.querySelectorAll(".add-more-placeholders-class input");
    for (let i = 0; i < input.length; i++) 
    {
       myArray.push(input[i].value);
    }
    console.log(myArray);

    let firstInput = inputValueFoodTitle.value;
    const foodTitleBtn = document.createElement("button");

    let finalInput = firstInput.charAt(0).toUpperCase() + firstInput.slice(1);
    foodTitleBtn.innerHTML = finalInput
    breakfastBtnHidden.append(foodTitleBtn);
    foodTitleBtn.setAttribute("type", "button");
    foodTitleBtn.setAttribute("class", "button-append");
    foodTitleBtn.setAttribute("id", `BoxName${boxNameCount}`); 
   


breakfastBtnHidden.addEventListener("click", function(e)
{
 if (e.target.tagName === "SPAN")
 {
   e.target.parentElement.remove();  
   arrayFunction2();  
 }
});

    function arrayFunction2()
    {
        boxNameCount = 1;
        for (let i = 0; i < breakfastBtnHidden.children.length; i++) 
        {
            let toDo = breakfastBtnHidden.children.item(i);
            
            for (let i=1; i < toDo.children.length; i=i+2) 
                {
                     let ulList = toDo.children.item(i);
                     ulList.setAttribute("id", `BoxName${boxNameCount}Div`);
                }

            toDo.setAttribute("id", `BoxName${boxNameCount}`); 
            boxNameCount++;
        }
        
    }

    let inputText = inputValueFoodTitle.value;

    const spanRemove = document.createElement("span");
    spanRemove.innerHTML = "\u00d7";
    spanRemove.setAttribute("id", "remove-food-btn");
    foodTitleBtn.append(spanRemove);
    
    foodTitleBtn.addEventListener(
        "click",
        function()
        {
            foodTitleBtn.classList.toggle("second-checked");
            
             ShowCheckboxDiv();
        }
    )

    let foodTitleUl = document.createElement("ul");
    foodTitleUl.setAttribute("class", inputText);
    foodTitleUl.setAttribute("id", `BoxName${boxNameCount}Div`);
    foodTitleUl.style.display = "none";
    boxNameCount++;

    for(let i=0; i<myArray.length; i++)
    { 
        let li = document.createElement("li");
        li.textContent = myArray[i];
        foodTitleUl.appendChild(li);
    }
    
    foodTitleBtn.appendChild(foodTitleUl);

}

function ShowCheckboxDiv() 
{
 for (x=1;x<=breakfastBtnHidden.children.length;x++) 
 {

        CheckThisBox = 'BoxName'+ x;
        BoxDiv = 'BoxName' + x + "Div";
    
    if (document.getElementById(CheckThisBox).classList.contains("second-checked")) 
        {
        document.getElementById(BoxDiv).style.display = "block";
        }
    else 
    {
        document.getElementById(BoxDiv).style.display = "none";
    }
 }
}

const resetBtn = document.querySelector("#reset-btn");

resetBtn.addEventListener(
    "click",
    resetBtnFunction,
    false
);

function resetBtnFunction()
{
    inputAll.value = "";
    inputValueFoodTitle.value = "";
    idAdd = 0;

    while (addMorePlaceholdersClass.firstChild) 
    { 
      addMorePlaceholdersClass.removeChild(addMorePlaceholdersClass.firstChild); 
  
    }
    while (myArray.length > 0) {
        myArray.pop();
      }
}
