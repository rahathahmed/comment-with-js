document.getElementById("user-comment").addEventListener("click",function(){ 
    const userComment = document.getElementById("comment-box");

    const addNewComment = document.createElement("p");

    addNewComment.innerText = userComment.value;
    
    const commentContainer = document.getElementById("comment-container");

    commentContainer.appendChild(addNewComment);

    userComment.value= "";
})
