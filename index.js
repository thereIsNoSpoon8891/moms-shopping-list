let list = document.addItem

list.addEventListener("submit", function(e){
    e.preventDefault() //prevents refresh

    let addedItem = list.title.value  //grabs text from input box
    
    list.title.value = ""           // clears form after entered
    
    let newItem = document.createElement('li') // step 1
    
    newItem.textContent = addedItem             // step 2
    
    document.getElementById('list').append(newItem) // step 3 
   
    let newEditBox = document.createElement('button')// step 1

    newEditBox.textContent = 'change'                 // step 2

    document.getElementById('list').append(newEditBox) // step 3

    let newDeleteButton = document.createElement('button') // step 1

    newDeleteButton.textContent = 'X'                       // step 2

    document.getElementById('list').append(newDeleteButton) // step 3
    
    newItem.appendChild(newEditBox)//.setAttribute('id','newEditBox' )
    newEditBox.setAttribute('class', 'edit-button')
                        // ^ set the attribute so you can assign eventlistener ^ 
    
    newItem.appendChild(newDeleteButton)//.setAttribute('id', 'newDeleteButton')

    newDeleteButton.addEventListener('click', ()=>{newItem.remove()})

    // attempt edit functionality
  const editButtons = document.querySelectorAll('.edit-button')
  editButtons.forEach(function(button){
    button.addEventListener('click', () => {
      const li = button.parentElement
      const text = li.childNodes[0].nodeValue.trim()
      while(li.childNodes.length > 2){
        li.removeChild(li.firstChild)
      }
      const input = document.createElement('input')
      input.value = text
      li.appendChild(input)
      newEditBox.textContent = 'save'
      if(newEditBox.textContent === 'save'){
        newEditBox.addEventListener('click', () => {
          const text = input.value
          li.removeChild(input)
          newEditBox.textContent = 'edit'// add everything back!!!!
          newItem.textContent = text
          newItem.appendChild(newEditBox)
          newItem.appendChild(newDeleteButton)
          newDeleteButton.addEventListener('click', ()=>{newItem.remove()})
        })
      }
    })
  })
  })                 


// 3 step process 
    // 1. createElement, capture in a variable: const variable = document.createElement("li")
    // 2. edit the content: variable.textContent = "content" 
    // 3. append it: document.getElementById('id').append(variable)

