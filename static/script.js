
let submitBtn = document.getElementById('submit');
let main = document.getElementById("main");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let country = document.getElementById("country");
    let category = document.getElementById("category");


    let enclosure = document.getElementById("insight");
    enclosure.style = "display:none;";

    let mainBox = document.getElementById("mainBox");
    mainBox.style = "display:block";

    console.log(country.value);
    fetch(`https://newsapi.org/v2/top-headlines?country=${country.value}&category=${category.value}&apiKey=262b9c52a1cc4ae1a27ecc788d730509`).then((response) => {
        return response.json();
    }).then((data) => {
        let str = " ";
        for (i = 0; i < data.articles.length; i++) {
            if (data.articles[i].urlToImage == null || data.articles[i].title == null || data.articles[i].content == null) {
                continue;
            }
            else {

                str += `<div class="box" >
                    <div class="upper">
                        <img src="${data.articles[i].urlToImage}" alt="img not found" height="200px" width="200px">
                    </div>
                    <div class="lower">
                        <h4 class="heading" id="lowerHeading">${data.articles[i].title}</h4>
                        <p id="lowerPara">${data.articles[i].content} <a href='${data.articles[i].url}' target='_blank'>Read Further<a/></p>
                    </div>
                </div>`

            }

        }
        main.innerHTML = str;
    }).catch(() => {
        console.log("oops! some error occured");
    })

    let bottomSections = document.getElementById("bottomSections");
    setTimeout(() => {
        bottomSections.innerHTML = `     <section id="feedbackSection">
        <h2 id="feedbackHeading">Feedback Form</h2>
        <form action="/" method="post" id="feedbackForm">
            <input type="text" placeholder="Enter your name" name="name" required>
            <input type="email" placeholder="Enter your email" name="email" required>
            <textarea name="feedback" id="" cols="30" rows="10"
                placeholder="Type your feedback here"></textarea>
            <button class="primary-btn" style="background-color: #3d82c0; margin-bottom: 0.2em;"
                type="submit">Submit</button>
            <button class="primary-btn" style="background-color: #ff3d00;" type="reset">Reset</button>
        </form>
    </section>
    <footer>
        <p>Copyright &copy 2022 || All Rights Reserved By &#10084;</p>
    </footer>
</div>`;
    }, 1000);
})

let backBtn = document.getElementById('arrowBtn');
backBtn.addEventListener('click', () => {
    location.reload();
})

let defaultNews = document.getElementById("defaultNews");

defaultNews.addEventListener('click', (e) => {
    e.preventDefault();
    let enclosure = document.getElementById("insight");
    enclosure.style = "display:none;";

    let mainBox = document.getElementById("mainBox");
    mainBox.style = "display:block";
    console.log('clicked');
    fetch(`https://newsapi.org/v2/top-headlines?category=general&apiKey=262b9c52a1cc4ae1a27ecc788d730509`).then((response) => {
        return response.json();
    }).then((data) => {

        let str = " ";
        console.log(data);
        for (i = 0; i < 10; i++) {
            if (data.articles[i].urlToImage == null || data.articles[i].title == null || data.articles[i].content == null) {
                continue;
            }
            else {
                str += `<div class="box" >
            <div class="upper">
                <img src="${data.articles[i].urlToImage}" alt="img not found" height="200px" width="200px">
            </div>
            <div class="lower">
                <h4 class="heading" id="lowerHeading">${data.articles[i].title}</h4>
                <p id="lowerPara">${data.articles[i].content}<span><a href='${data.articles[i].url}' target='_blank'>Read Further<a/></span></p>
            </div>
        </div>`
            }
        }
        main.innerHTML = str;
    }).catch(() => {
        console.log("oops! some error occured");
    })
    let bottomSections = document.getElementById("bottomSections");
    setTimeout(() => {
        bottomSections.innerHTML = ` <section id="feedbackSection">
        <h2 id="feedbackHeading">Feedback Form</h2>
        <form action="/" method='post' id="feedbackForm">
            <input type="text" placeholder="Enter your name" name="name" id="name" required>
            <input type="email" placeholder="Enter your email" name="email" id="email" required>
            <textarea name="feedback" id="feedback" cols="30" rows="10"
                placeholder="Type your feedback here"></textarea>
            <button class="primary-btn" style="background-color: #3d82c0; margin-bottom: 0.2em;"
                type="submit">Submit</button>
            <button class="primary-btn" style="background-color: #ff3d00;" type="reset">Reset</button>
        </form>
    </section>
    <footer>
        <p>Copyright &copy 2022 || All Rights Reserved By &#10084;</p>
    </footer>
</div>`;
    }, 1000);
})

let searchBtn = document.getElementById('searchButton');
searchBtn.addEventListener('click', () => {
    let searchArea = document.getElementById('searchArea');
    console.log(searchArea.value);
    let country = document.getElementById("country");
    let category = document.getElementById("category");

    fetch(`https://newsapi.org/v2/top-headlines?country=${country.value}&category=${category.value}&q=${searchArea.value}&apiKey=262b9c52a1cc4ae1a27ecc788d730509`).then((response) => {
        return response.json();
    }).then((data) => {
        let str = " ";
        for (i = 0; i < data.articles.length; i++) {
            if (data.articles[i].urlToImage == null || data.articles[i].title == null || data.articles[i].content == null) {
                continue;
            }
            else {

                str += `<div class="box" >
                    <div class="upper">
                        <img src="${data.articles[i].urlToImage}" alt="img not found" height="200px" width="200px">
                    </div>
                    <div class="lower">
                        <h4 class="heading" id="lowerHeading">${data.articles[i].title}</h4>
                        <p id="lowerPara">${data.articles[i].content} <a href='${data.articles[i].url}' target='_blank'>Read Further<a/></p>
                    </div>
                </div>`

            }

        }
        main.innerHTML = str;
    })
    searchArea.value = '';
})





