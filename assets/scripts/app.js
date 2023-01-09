const addMovieBtn=document.querySelector('header button')
const addModelBox=document.getElementById('add-modal')
const backDrob=document.getElementById('backdrop')
const cancelAddMovieBtn=addModelBox.querySelector('.btn--passive')
const confirmAddMovieBtn=cancelAddMovieBtn.nextElementSibling
const userInput=addModelBox.querySelectorAll('input')
const entryTextSection=document.getElementById('entry-text')
const ulMovieList=document.getElementById('movie-list');
const deleteModal=document.getElementById('delete-modal')
const movieArray=[];
/*close drop back modal */
const closeDropBack= ()=>{
    backDrob.classList.remove('visible');
}
/*show drop back modal */
const showDropBack= ()=>{
    backDrob.classList.add('visible');
}
/*close Add modal */
const closeAddModel= ()=>{
    closeDropBack();
    addModelBox.classList.remove('visible')
}
/*show Add modal */
const showAddModel= ()=>{
showDropBack();
addModelBox.classList.add('visible')
}
/*show Delete modal */
const showDeleteModal= ()=>{
    showDropBack();
   deleteModal.classList.add('visible')
}
/*close Delete modal */
const closeDeleteModal= ()=>{
    closeDropBack();
    deleteModal.classList.remove('visible')
}

/*to display entry text section if there is no any movie add */
const uiUpdateHandler= ()=>{
    if(movieArray.length===0){
        entryTextSection.style.display='block'
    }else {
        entryTextSection.style.display='none'
    }
}
/*erase the inputs field of the Add movie */
const inputsFieldUpdate= ()=>{
    for(let i=0; i<3 ; i++){
        userInput[i].value="";
    }
}

/*to find the index of the movie data object inside the array */
const findIndexCalc=(movieId)=>{
    let index=0;
    for(let i=0;i<movieArray.length;i++){
        if(movieArray[i].id===movieId){
            index=i;
            break; // stop for loop once we catch the index of movie data
        }
    }
    return index;
}
/* confirm delete function of each delete modal */
const confirmDeleteHandler = (movieId,clickedLi) => {
    // console.log("movieArray before delete", movieArray);
    const index = findIndexCalc(movieId)
    movieArray.splice(index, 1); // remove the clicked movie list(object) from the movie array
    clickedLi.remove();
    uiUpdateHandler();
     closeDeleteModal()
  };

/* activated function once the movie list clicked */
const deletElementExecute = (movieDataId, clickedLi) => {
    let confirmDelete=deleteModal.querySelector('.btn--danger') //let because we want to rerefrence to new created button
    const cancelDelete=deleteModal.querySelector('.btn--passive')
    showDeleteModal();
    backDrob.addEventListener('click',closeDeleteModal)
    /*create new button to create new refrence*/
    /*replace the old button with the new created button */
    /*update the selection of the new refrenced button to it`s new refrence */
    /*add event listner to the new refrence button */
    /*Note: once we remove the old refrence(button) from the DOM it`s EventListner will go to garpidge */
    confirmDelete.replaceWith(confirmDelete.cloneNode(true)) // create new refrence to confirm cancel button
    confirmDelete=deleteModal.querySelector('.btn--danger')
    confirmDelete.addEventListener("click",confirmDeleteHandler.bind(null,movieDataId,clickedLi) );
    // cancelDelete.removeEventListener("click",closeDeleteModal); // remove all previous listner to the cancel button
    cancelDelete.addEventListener("click",closeDeleteModal); // start new listner (only one) when deleteExecute fn fire
  };
  /* to display add = data to the movie unordered list  */
const movieElementAddHandler= (title,imageUrl,rating,movieData)=>{
const newLi=document.createElement('li'); // create new list which will collect movie data object
newLi.classList.add('movie-element')
newLi.innerHTML=`
<div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>

`
ulMovieList.append(newLi) // append the new created list to the main unordered list 
newLi.addEventListener('click',deletElementExecute.bind(null,movieData.id,newLi)) 
}
/* catch and validate the user input data */
const addMovieDataHandeler= ()=>{
    const movieData={
        title:userInput[0].value.trim(),
        imageUrl:userInput[1].value.trim(),
        rating:userInput[2].value.trim(),
        id:this.Math.random()
    }
    
    /*check the user inputs validity*/ 
    if(movieData.title==="" || movieData.imageUrl==="" || movieData.rating==="" || movieData.rating>5 || movieData.rating<=0){
        alert("please enter valid inputs values!!!")
    }else{
        movieArray.push(movieData); // PUSH movie data object to moviArray
        closeAddModel();
        uiUpdateHandler(); // update entry text section
        movieElementAddHandler(movieData.title,movieData.imageUrl,movieData.rating,movieData); //creat new entry of the new entered movie data
        inputsFieldUpdate();
    }
}

addMovieBtn.addEventListener('click',showAddModel) // event listner for the Add Movie Button
backDrob.addEventListener('click',()=>{
    closeAddModel();
    closeDeleteModal()
})
cancelAddMovieBtn.addEventListener(    // event listner for the cancelAdd Button
    'click',()=>{
    closeAddModel();
    inputsFieldUpdate()
})
confirmAddMovieBtn.addEventListener('click',addMovieDataHandeler) // event listner for the confirmAdd Button

