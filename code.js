// alert("test");
function savedButton(){
    // console.log("working save btn check")
    let inptBox1 = document.querySelector(".inputBox1").innerHTML;
    let inptBox2 = document.querySelector(".inputBox2").innerHTML;

    localStorage.setItem(inptBox1, inptBox2);
    console.log(localStorage.getItem(inptBox2));
    inptBox2++;
}

let hcount = 0;
function historyButton(){
    hcount++;
    if(hcount%2==1){
        document.querySelector(".historycon").style.display= "block";
        let data = document.querySelector(".historycon");

        for(p in localStorage){
            let ans = localStorage.getItem(p);
            if(ans!=null){
                // console.log(ans);
                let h3 = document.createElement("h3");
                h3.setAttribute('class', 'remove')
                h3.innerHTML = `${p} => Result = ${ans}`;
                console.log(h3)
                data.appendChild(h3)
            }
        }
    }
    else{
        document.querySelector(".historycon").style.display = "none";
        let rem = document.querySelector(".remove");
        for(var i=0; i<rem.clientHeight; i++){
            rem[i].remove();
        }
    }
}
function searchButton(){
    event.preventDefault();
    let problem = document.getElementById("problemBar").value;
    let catrgory = document.getElementById("categoryBar").value;
   
    let pro = fetch(`https://newton.now.sh/api/v2/:operation/:expression ${catrgory}/${problem}`);
    // console.log(pro);
    pro.then((response)=>{
        console.log(response.status)
        console.log(response.ok)
        return response.json()
    })
    .then((value)=>{
        console.log(value);
        let inpu2 = value.result;
        document.querySelector(".inputBox2").innerHTML = inpu2;
    })
    const input1 = document.querySelector(".inputBox1").innerHTML = catrgory+" :" + problem;
    let set = document.querySelector(".inputBox1").value;
    let wet = document.querySelector(".inputBox2").innerHTML;
    localStorage.setItem(set, wet);
}

function deleteButton(){
    document.querySelector(".inputBox1").innerHTML = "";
    document.querySelector(".inputBox2").innerHTML = "";
}