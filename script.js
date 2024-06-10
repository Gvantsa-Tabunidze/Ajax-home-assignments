// Task 1: xml requist

let divElement = document.getElementById('color-info');

let requist = new XMLHttpRequest();

// using 'get' method
requist.open('GET', 'https://reqres.in/api/unknown');

requist.addEventListener('load', function () {
  // console.log(this.responseText);
  let responseText = this.response;
  let responseTojs = JSON.parse(responseText);
  console.log(responseTojs);
  let ul = document.createElement('ul');
  responseTojs.data.forEach((element) => {
    // console.log(element);
    let li = document.createElement('li');
    li.innerText = `${element.name} ${element.color}`;
    ul.appendChild(li);
  });

  divElement.appendChild(ul);
});

// If not success
requist.addEventListener('error', function () {
  let pError = document.createElement('p');
  pError.innerText = 'Server Error';
  divElement.appendChild(pError);
});

requist.send();

// Task 2: fetch request

let newDiv = document.getElementById('company-info');

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
})
  .then(function (responseInfo) {
    // console.log(responseInfo);
    if (!responseInfo.ok) {
      throw 'error';
    }
    return responseInfo.json();
  })
  .then(function (newData) {
    console.log(newData);

    newData.forEach((item) => {
      let pNew = document.createElement('p');
      pNew.innerText = item.company.name;
      newDiv.appendChild(pNew);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
