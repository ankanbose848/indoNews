console.log("This is index.js");


//  Initialize the news api url


url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=99149400a53d474eae30d17037008d49';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', url, true)

xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);
    let newsHTML = "";
    articles.forEach((element,index) => {
      console.log(index);
      let news = `
      <div class="card my-3" style="box-shadow:0 0 8px">
        <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left headline" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
              ${element.title}
            </button>
          </h2>
        </div>

        <div id="collapse${index}" class="collapse hide" aria-labelledby="heading${index}" data-parent="#newsAccordion">
          <div class="card-body">
	    <img class="img-fluid figure-img mx-auto" src="${element.urlToImage}" style="width:800px; display:block; box-shadow:0 0 15px; border-radius:10px">
      <br>

            ${element.description}
            <br>
            <a href="${element.url}" target="_blank">Read the whole article</a>
          </div>
        </div>
      </div> `

      newsHTML = newsHTML + news;
    })

    newsAccordion.innerHTML = newsHTML;
  } else {
    console.error("Some error occured");
  }
}

xhr.send();
