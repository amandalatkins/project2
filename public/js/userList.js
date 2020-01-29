$(document).ready(function(){
    // Getting references to the playlist input
        var userVar = $("#username-list");
    
    // Adding event listeners to the form to create a new object, and the button to delete
    // a playlist
    
    //get user_id global variable
    var currentUser;
    $.get('/api/user_data', function(CU) {
      console.log(CU);
      currentUser = CU;
      getUsers();
    });

    function getUsers() {
      console.log("clled get users");
      $.get('/api/users', function(userList) {
        console.log(userList);
        userList.forEach(user => {
          if (user.id !== currentUser.id) {
            $('.username-list').append(`<tr><td><a href="/profile/${user.id}">${user.username}</a></td><td style="color:#fff">${user.Playlists.length} Playlists</td><td style="color:#fff">${user.Subscriptions.length} Subscriptions</td></tr>`);
          }
        });
      });
    }

  });
    
    
    // A function to handle what happens when the form is submitted to create a new playlist
    // function handleAddPlaylistPress(event){
    //   console.log("buttonclicktest")
    //     event.preventDefault();
    // // Don't do anything if the name fields hasn't been filled out
    // if (!playlistVar.val().trim().trim()) {
    //     return;
    // }
    
    
    // // Calling the insertPlaylist function and passing in the value of the name input
    // insertPlaylist({
    //     userId: currentUser.id,
    //     name: playlistVar
    //       .val()
    //       .trim()
    //   });
    // }
    
      
    // // A function for creating an pl. Calls getPlaylists upon completion
    // function insertPlaylist(playlistData) {
    //     $.post("/api/playlists", playlistData)
    //     .then(function(){
    //       location.reload();
    //     });
    //   }
    
    // // Function for creating a new list row for PLs
    // function createPlaylistRow(playlistData) {
    //   console.log("thing")
    //     var newPl = $("<tr>");
    //     newPl.data("playlist", playlistData);
    //     newPl.append("<tr>");
    //     newPl.append("<td>" + playlistData.name + "</td>");
    //     newPl.append("<td><a href='/playlists/" + playlistData.id + "'>Go to Playlist</a></td>");
    //     newPl.append("<td><a style='cursor:pointer;color:red' class='delete-playlist' data-id= '"+ playlistData.id + "'><i class='fa fa-window-close fa-2x' aria-hidden='true' style='color:red'></i></a></td>");
    //     newPl.append("</tr>");
    //     return newPl;
    //   }
    
    // // Function for retrieving playlists and getting them ready to be rendered to the page
    // function getPlaylists() {
    
    //     var user_id = currentUser.id;
    
    //     $.get("/api/users/"+user_id, function(data) {
    //       var rowsToAdd = [];
    //       for (var i = 0; i < data.Playlists.length; i++) {
    //         rowsToAdd.push(createPlaylistRow(data.Playlists[i]));
    //       }
          
    //       renderPlaylistList(rowsToAdd);
    //       playlistVar.val("");
    //     });
    //   }
    // // A function for rendering the list of playlists to the page
    // function renderPlaylistList(rows) {
    //     // playlistVar.children().not(":last").remove();
    //     // playlistVar.children(".alert").remove();
    //     if (rows.length) {
    //       console.log(rows);
    //       playlistRow.prepend(rows);
    //     }
    //     }
    
    // // Function for handling what happens when the delete button is pressed
    // function handleDeletePlaylistPress() {
    //     var id = $(this).data("id");
    //     $.ajax({
    //       method: "DELETE",
    //       url: "/api/playlists/" + id
    //     })
    //       .then(function(){
    //         location.reload();
    //       });
    
    //   }