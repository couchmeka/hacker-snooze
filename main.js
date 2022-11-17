

//++++++++++++++++++++News Population++++++++++++++++++++++++

let hackerNews = async () => {
    let response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
    let data = await response.json();
    console.log(data)
    //for loop for adding stories to bottom of the page
    for (let i = 0; i < data.length; i++) {
        
        
        let hackerFetch = async () => {
            let responseStory = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`);
            let storyDetails = await responseStory.json();
            
            

        let ul = document.querySelector('#newslist');
    // create LI for list items and a for link reference
        let li = document.createElement('li');
        let a = document.createElement('a');
    //comment variable    
        

    //string interpolation for display items in list and adding link to a
        li.innerText = `${storyDetails.title} - by ${storyDetails.by} `;
        let linkText = document.createTextNode(`${storyDetails.url}`);
        a.appendChild(linkText);
        a.href = `${storyDetails.url}`

    //appending list item to UL and to LI
        ul.appendChild(li);
        li.appendChild(a)



//form for search
        // let form = document.querySelector('#searchForm')




     }

    hackerFetch()

    
    
    }

    
   //for loop for adding to cards 
   
        
        
    let hackerFetch1 = async () => {
        //API Responses
        let responseStory1 = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[0]}.json?print=pretty`);
        let details = await responseStory1.json();
        console.log(details)
        
     //query selectors Event Listeners
      let titleOne = document.querySelector('#titleOne');
      let buttonOne = document.querySelector('#buttonOne');
      let buttonView1 = document.querySelector('#buttonView1')

      //button view event listener
      buttonView1.addEventListener('click', (event) => {

        event.preventDefault()
        let hackerView = async () => {
            let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[0]}.json?print=pretty`);
            let dataComment = await responseComment.json();

            let hackerViewInternal = async () => {
                let responseCommentInternal = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataComment.kids[0]}.json?print=pretty`);
                let newdataComment = await responseCommentInternal.json();
            
            let comment1 = document.querySelector('#comment1')
            comment1.innerText = ` by ${newdataComment.by} [${newdataComment.text}]`
            console.log(newdataComment)

           
            
            

        };
        hackerViewInternal()
    }
     hackerView()
     
      })

      

     

      //button event listener
      buttonOne.addEventListener('click', () => {

        window.open(`${details.url}`)
        console.log('click')

      })

      //Inner Text Changes
      titleOne.innerText = `${details.title} by ${details.by}`
      

    
    };

    let hackerFetch2 = async () => {
       //api response
        let responseStory1 = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[1]}.json?print=pretty`);
        let details = await responseStory1.json();
        console.log(details)
            
      //query selectors Event Listeners
      let titleTwo = document.querySelector('#titleTwo');
      let buttonTwo = document.querySelector('#buttonTwo');
      let buttonView2 = document.querySelector('#buttonView2')

//button view event listener

buttonView2.addEventListener('click', (event) => {

    event.preventDefault()
    let hackerView2 = async () => {
        let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[1]}.json?print=pretty`);
        let dataComment = await responseComment.json();

        let hackerViewInternal2 = async () => {
            let responseCommentInternal = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataComment.kids[0]}.json?print=pretty`);
            let newdataComment = await responseCommentInternal.json();
        
        let comment2 = document.querySelector('#comment2')
        comment2.innerText = ` by ${newdataComment.by} [${newdataComment.text}]`
        console.log(newdataComment)

        

    };
    hackerViewInternal2()
}
 hackerView2()
 
  })





      //button event listener
      buttonTwo.addEventListener('click', () => {

        window.open(`${details.url}`)
        console.log('click')

      })

      //Inner Text Changes
      titleTwo.innerText = `${details.title} by ${details.by}`
      

    
    };

    let hackerFetch3 = async () => {
        //api response
        let responseStory1 = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[2]}.json?print=pretty`);
        let details = await responseStory1.json();
        console.log(details)
            
      //query selectors Event Listeners
      let titleThree = document.querySelector('#titleThree');
      let buttonThree = document.querySelector('#buttonThree');
      let buttonView3 = document.querySelector('#buttonView3')

      //comments view
      buttonView3.addEventListener('click', (event) => {

        event.preventDefault()
        let hackerView3 = async () => {
            let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[2]}.json?print=pretty`);
            let dataComment = await responseComment.json();
    
            let hackerViewInternal3 = async () => {
                let responseCommentInternal = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataComment.kids[0]}.json?print=pretty`);
                let newdataComment = await responseCommentInternal.json();
            
            let comment3 = document.querySelector('#comment3')
            comment3.innerText = ` by ${newdataComment.by} [${newdataComment.text}]`
            console.log(newdataComment)
    
            
    
        };
        hackerViewInternal3()
    }
     hackerView3()
     
      })


      //button event listener
      buttonThree.addEventListener('click', () => {

        window.open(`${details.url}`)
        console.log('click')

      })

      //Inner Text Changes
      titleThree.innerText = `${details.title} by ${details.by}`
      

    
    };


    let hackerFetch4 = async () => {
        //api response
        let responseStory1 = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[3]}.json?print=pretty`);
        let details = await responseStory1.json();
        console.log(details)
            
      //query selectors Event Listeners
      let titleFour = document.querySelector('#titleFour');
      let buttonFour = document.querySelector('#buttonFour');
      let buttonView4 = document.querySelector('#buttonView4')

     //button View 4 
     buttonView4.addEventListener('click', (event) => {

        event.preventDefault()
        let hackerView4 = async () => {
            let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[3]}.json?print=pretty`);
            let dataComment = await responseComment.json();
    
            let hackerViewInternal4 = async () => {
                let responseCommentInternal = await fetch(`https://hacker-news.firebaseio.com/v0/item/${dataComment.kids[0]}.json?print=pretty`);
                let newdataComment = await responseCommentInternal.json();
            
            let comment4 = document.querySelector('#comment4')
            comment4.innerText = ` by ${newdataComment.by} [${newdataComment.text}]`
            console.log(newdataComment)
    
            
    
        };
        hackerViewInternal4()
    }
     hackerView4()
     
      })



      //button event listener
      buttonFour.addEventListener('click', () => {

        window.open(`${details.url}`)
        console.log('click')

      })

      //Inner Text Changes
      titleFour.innerText = `${details.title} by ${details.by}`
      

    
    };

    //comment counts
    
    let hackerComments1 = async () => {
        let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[0]}.json?print=pretty`);
        let dataComment = await responseComment.json();
        let comment1 = document.querySelector('#comment1')


        comment1.innerText = `Comments: ${dataComment.kids.length}`
    };

    let hackerComments2 = async () => {
        let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[1]}.json?print=pretty`);
        let dataComment = await responseComment.json();
        let comment2 = document.querySelector('#comment2')


        comment2.innerText = `Comments: ${dataComment.kids.length}`
    };

    let hackerComments3 = async () => {
        let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[2]}.json?print=pretty`);
        let dataComment = await responseComment.json();
        let comment3 = document.querySelector('#comment3')


        comment3.innerText = `Comments: ${dataComment.kids.length}`
    };

    let hackerComments4 = async () => {
        let responseComment = await fetch(`https://hacker-news.firebaseio.com/v0/item/${data[3]}.json?print=pretty`);
        let dataComment = await responseComment.json();
        let comment4 = document.querySelector('#comment4')


        comment4.innerText = `Comments: ${dataComment.kids.length}`
    };


    



   hackerComments1()
   hackerComments2()
   hackerComments3() 
   hackerComments4()    


    hackerFetch1()
    hackerFetch2()
    hackerFetch3()
    hackerFetch4()
    


}



hackerNews()

//++++++++++++++End News Population++++++++++++++++++



//+++++++++++++++Search function ++++++++++++++++++++

        //search function
        const input = document.querySelector('input[type="search"]');
        
        input.addEventListener('search', (event) => {
            event.preventDefault()

            ul = document.querySelectorAll('#newslist li');
            console.log(`The term searched for was ${input.value}`);
            

            for (let i = 0; i < ul.length; i++) { 
                ul[i].innerText.toLowerCase();  
             if (ul[i].innerText.includes(input.value)) 
             {
    
                console.log('found')
             }
            else {
                ul[i].style.display="none";
                console.log('not found') 
                 }


           }


        })
