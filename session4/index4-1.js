//https://docs.google.com/document/d/1yFTyXe7RawY51ulFyBHTuLuKKZbHnLw1QbH52e-p8EE/edit?fbclid=IwAR1ffeX72gCuzG8BNj22r0EPBeUpikc7c5Di8a7CPmoMTG3LWa4WZ5NpBVM

//PART1

// let budget = {
//     HP: 20 ,  
//     DELL: 50 , 
//     MACBOOK: 12 ,
//     ASUS: 30 }

// console.log(budget.MACBOOK) //READ 
// let user = prompt("enter your brand")
//     console.log(budget[user]);

//PART2
// budget.TOSHIBA = 10//CREATE
// console.log(budget.TOSHIBA);

// let newKey = prompt("enter a new brand")//CREATE(2)
// let newValue = prompt("enter a new value")
// console.log(budget[newKey] = newValue);

// budget.DELL = 10//UPDATE
// budget.MACBOOK = 2
// console.log(budget);

// for(let k in budget){ //*READ ALL
//     console.log(k, budget[k]); }

//------------------------
//PART3

// let budget1 = {
//     HP: 20,  
//     DELL: 50, 
//     MACBOOK: 12,
//     ASUS: 30,
//     TOSHIBA: 10,
//     IPHONE: 3 }


// let sum =0 //FIND SUM
//     for(let k in budget1){//*READ ALL
//         sum=sum+budget1[k]
//             console.log(k,":", budget1[k]); 
//     } 
//     console.log(sum);

// let newKey1 = prompt("enter a new brand 1")//CREATE(3)
// let newValue1 = prompt("enter a new value 1")
// let newKey2 = prompt("enter a new brand 2")
// let newValue2 = prompt("enter a new value 2")
// console.log(budget1[newKey1]=newValue1);
// console.log(budget1[newKey2]=newValue2);

//----------------------

//PART 4

// let price = {
//     HP: 600,
//     DELL: 650,
//     MACBOOK: 12000,
//     ASUS: 400,
//     ACER: 350,
//     TOSHIBA: 600,
//     FUJITSU: 900,
//     ALIENWARE: 1000
// }
    
// console.log(price.ASUS); //READ

// let user1 = prompt("enter your brand")
//     console.log(price[user1]);

//PART 5

// price.ASUS = 400*5
// console.log(price.ASUS);

// let newKey3 = prompt("enter your brand")
// let newValue3 = prompt("enter the price")
// console.log(price[newKey3] = newValue3);

// budget.ASUS = 5//UPDATE
// console.log(budget);

// for(let p in price){ //*READ ALL
//     console.log(p, price[p]) }

// for(let b in budget){
//     console.log(b,":", budget[b])}

//PART 6 

// let totV = 0 ; 
// let totV1 = 0
// for(let m in budget1 ){ 
//     totV = budget1[m]*price[m]//FIND EACH ITEM'S TOTAL PRICE 
//     totV1 = totV1 + totV
//     console.log(m, totV);
// }

//--------------------------------

//PART 7
// let charcObj = {
// Name: 'Light',
// Age: 17,
// Strength: 8,
// Defense: 10,
// HP: 100,
// Backpack: 'Shield, Bread Loaf',
// Gold: 100,
// Level: 2
// }

// charcObj.Gold = 50 //UPDATE 
// charcObj.Backpack = 'FlintStone' //UPDATE(2) 
// charcObj['Pocket'] = 'MonsterDex, Flashlight' //UPDATE(3)

//PART 8
let SkillList = [
{    
    Name: 'Tackle',
    Minlevel: 1,
    Damage: 5,
    Hitrate: 0.3,
},

{   
    Name: 'Quick attack',
    Minlevel: 2,
    Damage: 3,
    Hitrate: 0.5    
},

{   
    Name: 'Strong Kick',
    Minlevel: 4,
    Damage: 9,
    Hitrate: 0.2
    }
]

// for(let s in SkillList){ //READ ALL
//     console.log(s, SkillList[s]) 
// }

// for(let i = 0 ; i<SkillList.length; i++){
//     console.log(SkillList[i].Name);
//}

//PART 9

let a = SkillList.length
let n = prompt("which skills you want? (1~3)")
    if(n==1){
        console.log(SkillList);       
        for(let n=0; n = a ; n++ ){
            console.log(SkillList[n]);
            
        }
}






