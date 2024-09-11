for(let i=1; i<=10; i++){
    console.log(i);
}

for(let i=10; i>=1; i--){
    console.log(i);
}

for(let i=1; i<=10; i++){
    if (i%2===0){console.log(i);}
}

for(let i=1; i<=10; i++){
    if (i%2!==0){console.log(i);}
}

for(let i=1; i<=10; i++){
    if (i%3===0){console.log(i);}
}

for(let i=1; i<=10; i++){
    if (i%5===0){console.log(i);}
}

for(let i=1; i<=10; i++){
    if (i%3===0 && i%5===0){console.log(i);}
}

for(let i=1; i<=10; i++){
    if (i%3===0 || i%5===0){console.log(i);}
}