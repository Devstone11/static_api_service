$.ajax({
  method: "GET",
  url: "http://localhost:3000/users",
}).done(function(data) {
    console.log(data.users);
    data.users.forEach(function(user) {
      listAppend(user.user_data.first_name, user.user_data.last_name)
    })
  });

  function listAppend(first, last) {
    $('ul').append(`<li> ${first} ${last} </li>`);
  }
