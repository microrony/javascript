// console.log('Hello');
// //console.log(myvar);
// console.error('An error');
// console.warn('A warning');
// console.dir(document);

// console.table([{ name: 'John', email: 'test@test.com', age: 33 }])

// console.clear()

// console.group('Say Hello')
// console.log('Hello Brad')
// console.log('Hello John')
// console.log('Hello Sally')
// console.groupEnd('Say Hello')

// console.time('Run Loop');
// for (var i = 0; i < 20000; i++) {
//     console.log(i);
// };
// console.timeEnd('Run Loop');

// function greaterThan(a,b) {
//   console.assert(a > b, {"message":"a is not greater than b","a":a,"b":b});
// }

// greaterThan(5,6);

// document.querySelector('button').addEventListener('click', loadUsers);

//   // Load Github Users
//   function loadUsers(){
//      var xhr = new XMLHttpRequest();
//       xhr.open('GET', 'https://api.github.com/users', true);

//       xhr.onload = function(){
//         if(this.status == 200){
//           var users = JSON.parse(this.responseText);

//           var output = '';
//           for(var i in users){
//             output +=
//               '<div class="user">' +
//               '<img src="'+users[i].avatar_url+'" width="70" height="70">' +
//               '<ul>' +
//               '<li>ID: '+users[i].id+'</li>' +
//               '<li>Login: '+users[i].login+'</li>' +
//               '</ul>' +
//               '</div>';
//           }

//           document.getElementById('users').innerHTML = output;
//         }
//       }

//       xhr.send();
//     }

// Set localstorage - will stay until delete/clear
// localStorage.setItem('name', 'John')

// Set sessionstorage - will stay until browser close
// sessionStorage.setItem('user', 'Will')

// Set cookie
// document.cookie = 'username=John Doe'
let rony = 'rony';
let satter = 'sattar';
let raju = 'raju';
rony = 'roney';