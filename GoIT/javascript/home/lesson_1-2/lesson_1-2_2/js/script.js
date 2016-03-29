
var arrName = ['name 1', 'name 2', 'name 3', 'name 4', 'name 5'];
for (var i = 0; i  < arrName.length; i++){
	arrName[i] = prompt('Enter name:', arrName[i]);
}

var userName = prompt('Please, enter user name:', '');
 for (var i = 0; i  < arrName.length; i++){
 	if (arrName[i] != null && arrName[i] != '' && userName != null && arrName[i] != ''){
		debugger;
 		if (arrName[i] == userName){
 			console.log(arrName[i], ", you've successfully loged in");
 			break;
 		} else if (i == arrName.length - 1){
 			alert('User name not found');
 		}
 	} else {
 		alert('User name  or name[i] is not defined');
 		break;
 	}
 }