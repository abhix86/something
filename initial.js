const database = {
    user_id : {
        birthDay : "",
        joinDate : "",
        quotes : {
            quote_id : {
            id_of_first_quote : "",
            id_of_second_quote : "",
            id_of_third_quote: ""
            },
            deleted_quote : {
                first_id : "",
                second_id : ""
            }
        },
        warn : {
            first : {
                date_and_time : "",
                reason : "",
                Warned_by : ""
            },
            second : {
                date_and_time : "",
                reason : "",
                Warned_by : ""
            } 
        }
    }
}

fetch(data.json)
  .then(response => {

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  })
  .then(data => {

    console.log(data); 

  })
  .catch(error => {

    console.error('There was a problem with the fetch operation:', error);
  });
