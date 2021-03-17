async function deleteFormHandler(event) {
    event.preventDefault();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/')
    } else {
      alert("here i am ", id, response.statusText);
      console.log("id = ", id, "window.location.toString", window.location.toString());
    }
  
}
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);