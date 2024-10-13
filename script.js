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

//Choose Option Hidden

const chooseFoodOption = document.querySelector(".choose-food-option");
const optionBtnBreakfast = document.querySelector("#option-btn-breakfast");
const optionBtnLunch = document.querySelector("#option-btn-lunch");
const optionBtnDinner = document.querySelector("#option-btn-dinner");
const optionBtnSnack = document.querySelector("#option-btn-snack");
const hideOptionButtons = document.querySelector(".hide-option-buttons");
const foodTypeTitle = document.querySelector("#food-type-title");


//Section 1 (Insperation)

optionBtnBreakfast.addEventListener(
    "click",
    toggleClassOptionBtn1,
    false
);

optionBtnLunch.addEventListener(
    "click",
    toggleClassOptionBtn2,
    false
);

optionBtnDinner.addEventListener(
    "click",
    toggleClassOptionBtn3,
    false
);

optionBtnSnack.addEventListener(
    "click",
    toggleClassOptionBtn4,
    false
);

function toggleClassOptionBtn1()
{

    optionBtnBreakfast.setAttribute("class", "breakfast");


if (chooseFoodOption.style.display === "block")
{
    chooseFoodOption.style.display = "none";
}
else
{
    chooseFoodOption.style.display = "block";
}

 hideOptionButtons.style.display = "none";
 foodTypeTitle.innerHTML = "Breakfast"

}

function toggleClassOptionBtn2()
{

    optionBtnBreakfast.setAttribute("class", "lunch");


if (chooseFoodOption.style.display === "block")
{
    chooseFoodOption.style.display = "none";
}
else
{
    chooseFoodOption.style.display = "block";
}

 hideOptionButtons.style.display = "none";
 foodTypeTitle.innerHTML = "Lunch"

}

function toggleClassOptionBtn3()
{

    optionBtnBreakfast.setAttribute("class", "dinner");


if (chooseFoodOption.style.display === "block")
{
    chooseFoodOption.style.display = "none";
}
else
{
    chooseFoodOption.style.display = "block";
}

 hideOptionButtons.style.display = "none";
 foodTypeTitle.innerHTML = "Dinner"

}

function toggleClassOptionBtn4()
{

    optionBtnBreakfast.setAttribute("class", "snack");


if (chooseFoodOption.style.display === "block")
{
    chooseFoodOption.style.display = "none";
}
else
{
    chooseFoodOption.style.display = "block";
}

 hideOptionButtons.style.display = "none";
 foodTypeTitle.innerHTML = "Snack"

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


//With Enter


document.querySelector("#input-value").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        addItem();
    }
  });


//With Add Button


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
    warningText.setAttribute("class", "warning-text");
    return;
  }
  else
  {
    warningText.innerText = "";
    warningText.removeAttribute("class");
  }

  const li = document.createElement("li");
  li.innerHTML = text;
  listContainer.appendChild(li);
  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  input.value = "";

  arrayFunction();
  saveData();

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
  saveData();
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

saveData();

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
    addMorePlaceholder.setAttribute("class", "input-value-ingredients-class")
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
const warningText2 = document.querySelector("#warning-text2");
let nameCountBreakfast = 1;


addAllBtn.addEventListener("click", function()
{
    if (optionBtnBreakfast.classList.contains("breakfast"))
        {
            addAllFuntion1();
        }
    if (optionBtnBreakfast.classList.contains("lunch"))
        {
            addAllFuntion2();
        }
    if (optionBtnBreakfast.classList.contains("dinner"))
        {
            addAllFuntion3();
        }
    if (optionBtnBreakfast.classList.contains("snack"))
        {
            addAllFuntion4();
        }                
});



//Section 3 (Add to insperation [Breakfast])



function addAllFuntion1()
{
    let text = inputValueFoodTitle.value
    if (text.length == 0)
        {
          warningText2.innerText = "You have to write something!";
          warningText2.setAttribute("class", "warning-text");
          return;
        }
        else
        {
          warningText2.innerText = "";
          warningText2.removeAttribute("class");
        }
    let input = document.querySelectorAll(".add-more-placeholders-class input");
    for (let i = 0; i < input.length; i++) 
    {
       myArray.push(input[i].value);
    }
    console.log(myArray);

    let firstInput = inputValueFoodTitle.value;
    const breakfastTitleBtn = document.createElement("button");

    let finalInput = firstInput.charAt(0).toUpperCase() + firstInput.slice(1);
    breakfastTitleBtn.innerHTML = finalInput
    breakfastBtnHidden.append(breakfastTitleBtn);
    breakfastTitleBtn.setAttribute("type", "button");
    breakfastTitleBtn.setAttribute("class", "button-append");
    breakfastTitleBtn.setAttribute("id", `BreakfastTitle${nameCountBreakfast}`); 
   


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
        nameCountBreakfast = 1;
        for (let i = 0; i < breakfastBtnHidden.children.length; i++) 
        {
            let buttonTitle = breakfastBtnHidden.children.item(i);
            
            for (let i=1; i < buttonTitle.children.length; i=i+2) 
                {
                     let ulList = buttonTitle.children.item(i);
                     ulList.setAttribute("id", `BreakfastTitle${nameCountBreakfast}Div`);
                }

            buttonTitle.setAttribute("id", `BreakfastTitle${nameCountBreakfast}`); 
            nameCountBreakfast++;
        }
        
    }

    let inputText = inputValueFoodTitle.value;

    const spanRemove = document.createElement("span");
    spanRemove.innerHTML = "\u00d7";
    spanRemove.setAttribute("id", "remove-food-btn");
    breakfastTitleBtn.append(spanRemove);
    
    breakfastTitleBtn.addEventListener(
        "click",
        function()
        {
            breakfastTitleBtn.classList.toggle("second-checked");
            
             ShowCheckboxDiv();
        }
    )

    let breakfastTitleUl = document.createElement("ul");
    breakfastTitleUl.setAttribute("class", inputText);
    breakfastTitleUl.setAttribute("id", `BreakfastTitle${nameCountBreakfast}Div`);
    breakfastTitleUl.style.display = "none";
    nameCountBreakfast++;

    for(let i=0; i<myArray.length; i++)
    { 
        let li = document.createElement("li");
        li.textContent = myArray[i];
        breakfastTitleUl.appendChild(li);
    }
    
    breakfastTitleBtn.appendChild(breakfastTitleUl);

    resetBtnFunction();

}

function ShowCheckboxDiv() 
{
 for (x=1;x<=breakfastBtnHidden.children.length;x++) 
 {

        CheckBreakfastBtn = 'BreakfastTitle'+ x;
        CheckBreakfastUl = 'BreakfastTitle' + x + "Div";
    
    if (document.getElementById(CheckBreakfastBtn).classList.contains("second-checked")) 
        {
        document.getElementById(CheckBreakfastUl).style.display = "block";
        }
    else 
    {
        document.getElementById(CheckBreakfastUl).style.display = "none";
    }
 }
}




//Section 3 (Add to insperation [Lunch])



let nameCountLunch = 1;

function addAllFuntion2()
{
    let text = inputValueFoodTitle.value
    if (text.length == 0)
        {
          warningText2.innerText = "You have to write something!";
          warningText2.setAttribute("class", "warning-text");
          return;
        }
        else
        {
          warningText2.innerText = "";
          warningText2.removeAttribute("class");
        }
    let input = document.querySelectorAll(".add-more-placeholders-class input");
    for (let i = 0; i < input.length; i++) 
    {
       myArray.push(input[i].value);
    }
    console.log(myArray);

    let firstInput = inputValueFoodTitle.value;
    const foodTitleBtnLunch = document.createElement("button");

    let finalInput = firstInput.charAt(0).toUpperCase() + firstInput.slice(1);
    foodTitleBtnLunch.innerHTML = finalInput
    lunchBtnHidden.append(foodTitleBtnLunch);
    foodTitleBtnLunch.setAttribute("type", "button");
    foodTitleBtnLunch.setAttribute("class", "button-append");
    foodTitleBtnLunch.setAttribute("id", `LunchTitle${nameCountLunch}`); 
   


lunchBtnHidden.addEventListener("click", function(e)
{
 if (e.target.tagName === "SPAN")
 {
   e.target.parentElement.remove();  
   arrayFunction3();  
 }
});

    function arrayFunction3()
    {
        nameCountLunch = 1;
        for (let i = 0; i < lunchBtnHidden.children.length; i++) 
        {
            let buttonTitle = lunchBtnHidden.children.item(i);
            
            for (let i=1; i < buttonTitle.children.length; i=i+2) 
                {
                     let ulList = buttonTitle.children.item(i);
                     ulList.setAttribute("id", `LunchTitle${nameCountLunch}Div`);
                }

            buttonTitle.setAttribute("id", `LunchTitle${nameCountLunch}`); 
            nameCountLunch++;
        }
        
    }

    let inputText = inputValueFoodTitle.value;

    const spanRemove = document.createElement("span");
    spanRemove.innerHTML = "\u00d7";
    spanRemove.setAttribute("id", "remove-food-btn");
    foodTitleBtnLunch.append(spanRemove);
    
    foodTitleBtnLunch.addEventListener(
        "click",
        function()
        {
            foodTitleBtnLunch.classList.toggle("third-checked");
            
             ShowCheckboxDiv2();
        }
    )

    let LunchTitleUl = document.createElement("ul");
    LunchTitleUl.setAttribute("class", inputText);
    LunchTitleUl.setAttribute("id", `LunchTitle${nameCountLunch}Div`);
    LunchTitleUl.style.display = "none";
    nameCountLunch++;

    for(let i=0; i<myArray.length; i++)
    { 
        let li = document.createElement("li");
        li.textContent = myArray[i];
        LunchTitleUl.appendChild(li);
    }
    
    foodTitleBtnLunch.appendChild(LunchTitleUl);

    resetBtnFunction();

}

function ShowCheckboxDiv2() 
{
 for (x=1;x<=lunchBtnHidden.children.length;x++) 
 {

        CheckLunchBtn = 'LunchTitle'+ x;
        CheckLunchUl = 'LunchTitle' + x + "Div";
    
    if (document.getElementById(CheckLunchBtn).classList.contains("third-checked")) 
        {
        document.getElementById(CheckLunchUl).style.display = "block";
        }
    else 
    {
        document.getElementById(CheckLunchUl).style.display = "none";
    }
 }
}


//Section 3 (Add to insperation [Dinner])



let nameCountDinner = 1;

function addAllFuntion3()
{
    let text = inputValueFoodTitle.value
    if (text.length == 0)
        {
          warningText2.innerText = "You have to write something!";
          warningText2.setAttribute("class", "warning-text");
          return;
        }
        else
        {
          warningText2.innerText = "";
          warningText2.removeAttribute("class");
        }
    let input = document.querySelectorAll(".add-more-placeholders-class input");
    for (let i = 0; i < input.length; i++) 
    {
       myArray.push(input[i].value);
    }
    console.log(myArray);

    let firstInput = inputValueFoodTitle.value;
    const foodTitleBtnDinner = document.createElement("button");

    let finalInput = firstInput.charAt(0).toUpperCase() + firstInput.slice(1);
    foodTitleBtnDinner.innerHTML = finalInput
    dinnerBtnHidden.append(foodTitleBtnDinner);
    foodTitleBtnDinner.setAttribute("type", "button");
    foodTitleBtnDinner.setAttribute("class", "button-append");
    foodTitleBtnDinner.setAttribute("id", `DinnerTitle${nameCountDinner}`); 
   


dinnerBtnHidden.addEventListener("click", function(e)
{
 if (e.target.tagName === "SPAN")
 {
   e.target.parentElement.remove();  
   arrayFunction4();  
 }
});

    function arrayFunction4()
    {
        nameCountDinner = 1;
        for (let i = 0; i < dinnerBtnHidden.children.length; i++) 
        {
            let buttonTitle = dinnerBtnHidden.children.item(i);
            
            for (let i=1; i < buttonTitle.children.length; i=i+2) 
                {
                     let ulList = buttonTitle.children.item(i);
                     ulList.setAttribute("id", `DinnerTitle${nameCountDinner}Div`);
                }

            buttonTitle.setAttribute("id", `DinnerTitle${nameCountDinner}`); 
            nameCountDinner++;
        }
        
    }

    let inputText = inputValueFoodTitle.value;

    const spanRemove = document.createElement("span");
    spanRemove.innerHTML = "\u00d7";
    spanRemove.setAttribute("id", "remove-food-btn");
    foodTitleBtnDinner.append(spanRemove);
    
    foodTitleBtnDinner.addEventListener(
        "click",
        function()
        {
            foodTitleBtnDinner.classList.toggle("fourth-checked");
            
             ShowCheckboxDiv3();
        }
    )

    let dinnerTitleUl = document.createElement("ul");
    dinnerTitleUl.setAttribute("class", inputText);
    dinnerTitleUl.setAttribute("id", `DinnerTitle${nameCountDinner}Div`);
    dinnerTitleUl.style.display = "none";
    nameCountDinner++;

    for(let i=0; i<myArray.length; i++)
    { 
        let li = document.createElement("li");
        li.textContent = myArray[i];
        dinnerTitleUl.appendChild(li);
    }
    
    foodTitleBtnDinner.appendChild(dinnerTitleUl);

    resetBtnFunction();

}

function ShowCheckboxDiv3() 
{
 for (x=1;x<=dinnerBtnHidden.children.length;x++) 
 {

        CheckDinnerBtn = 'DinnerTitle'+ x;
        CheckDinnerUl = 'DinnerTitle' + x + "Div";
    
    if (document.getElementById(CheckDinnerBtn).classList.contains("fourth-checked")) 
        {
        document.getElementById(CheckDinnerUl).style.display = "block";
        }
    else 
    {
        document.getElementById(CheckDinnerUl).style.display = "none";
    }
 }
}



//Section 3 (Add to insperation [Snack])




let nameCountSnack = 1;

function addAllFuntion4()
{
    let text = inputValueFoodTitle.value
    if (text.length == 0)
        {
          warningText2.innerText = "You have to write something!";
          warningText2.setAttribute("class", "warning-text");
          return;
        }
        else
        {
          warningText2.innerText = "";
          warningText2.removeAttribute("class");
        }
    let input = document.querySelectorAll(".add-more-placeholders-class input");
    for (let i = 0; i < input.length; i++) 
    {
       myArray.push(input[i].value);
    }
    console.log(myArray);

    let firstInput = inputValueFoodTitle.value;
    const foodTitleBtnSnack = document.createElement("button");

    let finalInput = firstInput.charAt(0).toUpperCase() + firstInput.slice(1);
    foodTitleBtnSnack.innerHTML = finalInput
    snackBtnHidden.append(foodTitleBtnSnack);
    foodTitleBtnSnack.setAttribute("type", "button");
    foodTitleBtnSnack.setAttribute("class", "button-append");
    foodTitleBtnSnack.setAttribute("id", `SnackTitle${nameCountSnack}`); 
   


    snackBtnHidden.addEventListener("click", function(e)
{
 if (e.target.tagName === "SPAN")
 {
   e.target.parentElement.remove();  
   arrayFunction5();  
 }
});

    function arrayFunction5()
    {
        nameCountSnack = 1;
        for (let i = 0; i < snackBtnHidden.children.length; i++) 
        {
            let buttonTitle = snackBtnHidden.children.item(i);
            
            for (let i=1; i < buttonTitle.children.length; i=i+2) 
                {
                     let ulList = buttonTitle.children.item(i);
                     ulList.setAttribute("id", `SnackTitle${nameCountSnack}Div`);
                }

            buttonTitle.setAttribute("id", `SnackTitle${nameCountSnack}`); 
            nameCountSnack++;
        }
        
    }

    let inputText = inputValueFoodTitle.value;

    const spanRemove = document.createElement("span");
    spanRemove.innerHTML = "\u00d7";
    spanRemove.setAttribute("id", "remove-food-btn");
    foodTitleBtnSnack.append(spanRemove);
    
    foodTitleBtnSnack.addEventListener(
        "click",
        function()
        {
            foodTitleBtnSnack.classList.toggle("fifth-checked");
            
             ShowCheckboxDiv4();
        }
    )

    let snackTitleUl = document.createElement("ul");
    snackTitleUl.setAttribute("class", inputText);
    snackTitleUl.setAttribute("id", `SnackTitle${nameCountSnack}Div`);
    snackTitleUl.style.display = "none";
    nameCountSnack++;

    for(let i=0; i<myArray.length; i++)
    { 
        let li = document.createElement("li");
        li.textContent = myArray[i];
        snackTitleUl.appendChild(li);
    }
    
    foodTitleBtnSnack.appendChild(snackTitleUl);

    resetBtnFunction();

}

function ShowCheckboxDiv4() 
{
 for (x=1;x<=snackBtnHidden.children.length;x++) 
 {

        CheckSnackBtn = 'SnackTitle'+ x;
        CheckSnackUl = 'SnackTitle' + x + "Div";
    
    if (document.getElementById(CheckSnackBtn).classList.contains("fifth-checked")) 
        {
        document.getElementById(CheckSnackUl).style.display = "block";
        }
    else 
    {
        document.getElementById(CheckSnackUl).style.display = "none";
    }
 }
}



//Section 3 (Reset Button)





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

      chooseFoodOption.style.display = "none";
      hideOptionButtons.style.display = "block";

}


//Local Storage



function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();