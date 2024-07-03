//Callback function
function greet (name) {
    console.log("hello ", name);
}

//High order function
function highOrderFunction (Callback) {
    const name = "vishwas"
    greetFn(name);
}


greetVishwas(greet);