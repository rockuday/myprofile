let btn = document.querySelector('.btn button');

btn.addEventListener('click',()=>{
    let img = "https://cdn.esahubble.org/archives/images/large/heic2018b.jpg";

    let link = new Image();
    link.src = img;
    
    let size = 5976883;

    let start = new Date().getTime();
    let end;

    link.onload = function(){
        btn.innerHTML = "Calculating";
        end = new Date().getTime();
        speed();
    }
    
    function speed(){
        let time = (end - start)/1000;
        let bit = size * 8;
        let bps = (bit / time).toFixed(2);
        let kbps = (bps / 1024).toFixed(2);
        let mbps = (kbps / 1024).toFixed(2);

        let bits = document.querySelector('.bit');
        let kb = document.querySelector('.kb');
        let mb = document.querySelector('.mb');

        bits.innerHTML = `${bps}`;
        kb.innerHTML = `${kbps}`;
        mb.innerHTML = `${mbps}`;
        
        btn.innerHTML = "Fetch Speed";
    }
});