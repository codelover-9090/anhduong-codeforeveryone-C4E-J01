        // // let yob = prompt('Enter yob')
        // // // let age = 2019 - Number(yob)
        // // console.log(age)
        // let random = Math.random(0,100)
        // let intrandom = Math.floor(random * 100)
        // console.log(intrandom);

        // if(random < 30) {
        //     console.log('rainy');
        // }
        // else if (random < 60 ) {
        //     console.log('cloudy')
        // }

        // else { 
        //     console.log('sunny');
        // }


        // I(Initialize) C(Creat) R(read) U(update) D(delete)

        // let menu = ['bun dau','thit cho','pho'] //Create
        // let newitem = 'xuc xich'
        // menu.push(newitem)
        // let n = menu.length

        // for(let i = 0; i < n; i++) //Read all
        // console.log(menu[i])

        // menu[3] = 'bun cha' //Update
        // menu = menu.splice(0, 2)// Delete
        // menu = menu.slice (0, 1)
        // console.log(menu); 

        let fruits = ['lime', 'orange', 'durian', 'mango']
        let newfruit = 'kiwi'
        let newfruit1 = 'pear'
        let a = fruits.length

        
        let n = prompt('You want to read, add, remove or update?')

        if(n=="read"){
            console.log(fruits);
            for(let i = 0; i < a; i++) 
            console.log(fruits[i])
            
        } 
        else if(n=="add"){

            let newfruits = prompt('fruit you want to add into lists:')
            fruits.push(newfruits);
            console.log(fruits);
        
        }
        else if(n=="remove"){

            let newfruits = prompt('what fruit you want to remove from lists:')
            if(newfruits=="lime"){
                fruits= fruits.splice(1,3);
                console.log(fruits);}
            else if(newfruits=="orange"){
                fruits= fruits.splice(1,1);
                console.log(fruits);}
            else if(newfruits=="durian"){
                fruits= fruits.splice(2,1);
                console.log(fruits);}
            else if(newfruits=="mango"){
                fruits= fruits.splice(3,1);
                console.log(fruits);}
          
        }
        else if(n=="update"){
            let newfruits = prompt( 'which of your update lists you choose:')
            if(newfruits=="a"){
            fruits[2] = ['aloe','melon','promegranate']
                console.log(fruits[2]);}
            if(newfruits=="b"){
            fruits[3] = ['tangerine', 'strawberry']
            } }

        else{

            console.log('Nobody can change the menu except BOSS!');
            
            }
        