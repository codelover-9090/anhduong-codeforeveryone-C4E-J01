//https://docs.google.com/document/d/1zPwuHBR9_42bFDawvfYq0DRDz5MS-3vrcooJqNohdW8/edit


// //PART 1
// //1.
// let numberlist = [5, 1, 8, 92, 7, 30 ]
// for(let i = 0; i<numberlist.length; i+=1){
//     if(numberlist[i] % 2 == 0){
//     console.log(numberlist[i]);
//     }    
// }

// //2
// let numberlist1 = [5, 12, 6, 61, 124]
// for(let i = 0; i<numberlist.length; i+=1){ 
//     if(numberlist1[i] % 2 == 0 )
//     {console.log(numberlist1[i]);
//     }
// }
//--------------------------------------
//PART 2
//3,4,5
// let district = ["ST","BD" , "BTL", "CG", "DD", "HBT"]
// let pop = [150300, 247000, 333300, 266800, 420900, 318000]
// let kmsq = [117.43, 9.224, 43.35, 12.04, 9.96, 10.09]

// let max = pop[0]
// let min = pop[1]
// let popdens=Array(pop.length) //CALCULATE POPDENS
// let popdens1=[1279.9114366005278, 26777.970511708587, 7688.581314878892, 22159.468438538206, 42259.03614457831, 31516.352824578793]

// let maxposition;
// let minposition
// for(let a = 0; a<pop.length; a+=1){
//     if(pop[a] > max){      
//         max=pop[a];
//         maxposition = a;
//  }
// }
// console.log(district[maxposition]);

// for(let b = 0; b<pop.length; b+=1){
//     if(pop[b] < min){
//         min=pop[b]; 
//         minposition = b;
//  }
// }
// console.log(district[minposition])

// PART 3
// 6
// CALCULATE POPDENS
// for(let i=0 ; i<pop.length; i++){                  
//  popdens[i]=pop[i]/kmsq[i];
//  console.log(popdens);
// }

//FIND SUM OF POPDENS  
// let sumPD = 0;
// for(let e = 0; e < popdens1.length; e++){
//     sumPD = sumPD + popdens1[e];
//     console.log(sumPD);
// }

//CALCULATE AVGPD
// let AVGPD = 0;
// {                  
//   AVGPD=131681.32067088332/6;
//   console.log(AVGPD);
// }
//-------------------------------------
//PART 4
let hiScore= [45, 67, 56, 78]

// for(let a = 0; a < hiScore.length; a++){ //READ ALL
//   console.log(hiScore[a]);}

// let newHS= prompt("Enter your new score")
//   hiScore.push(newHS);
//   console.log(hiScore);

//PART 5
let temp=0


let newHS= prompt("Enter your new score")
  hiScore.push(newHS);
  console.log(hiScore);


  for(let i = 0; i < hiScore.length; i++){ //sort arrange from largest
    for(let j = i+1; j<hiScore.length;j++ ){
      if(hiScore[i] < hiScore[j]){
        temp = hiScore[i];
        hiScore[i] = hiScore[j];
        hiScore[j] = temp
      }
    }
    console.log(hiScore[i]);
  }
