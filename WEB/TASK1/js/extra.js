var element = document.getElementById("one");
var newElement = '<div id="two">two</div>'
element.insertAdjacentHTML( 'afterend', newElement )
// new DOM structure: <div id="one">one</div><div id="two">two</div>

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}



// You can use native DOM methods to insert the fragment:



function buttonaction(){
    var fragment = create('                      \
            <div class="row g-4">   \
          <div class="col-lg-4 col-md-6">   \
            <div class="card border-0"> \
              <div class="card-body bg-secondary text-center">  \
                <h5 class="card-title">Option1</h5> \
                <p class="card-text">cool wallet i like this one</p>    \
                <img class="img-fluid" style="max-width: 150px" src="https://dogecoin.com/assets/img/multidoge.png" alt="windows" />    \
                <div>   \
                  <a type="button" class="btn btn-dark minbutton mb-1" href="#"><i class="bi bi-microsoft"></i> Windows</a> \
                  <a type="button" class="btn btn-dark minbutton mb-1" href="#"><i class="bi bi-ubuntu"></i> Linux</a>  \
                  <a type="button" class="btn btn-dark minbutton mb-1" href="#"><i class="bi bi-apple"></i> MacOS</a>   \
                </div>  \
              </div>    \
            </div>  \
          </div> \
    ')

    var element = document.getElementById("Wallets");
    document.body.insertBefore(fragment, element);
}
