function bmi(weight, hight){
    let result=weight/((hight/100)**2)
    document.getElementById('resultbmi').innerHTML = 'BMI ของคุณคือ: '+result.toFixed(2)

    if (result.toFixed(2) < 18.5) {
        document.getElementById('resultbmi2').innerHTML = 'คุณ ผอมเกินไป'
        document.getElementById('img1').src = 'https://sv1.picz.in.th/images/2019/03/01/tdiI1v.jpg'
    } else if(result.toFixed(2) < 24){
        document.getElementById('resultbmi2').innerHTML = 'คุณ น้ำหนักปกติ เหมาะสม'
        document.getElementById('img1').src = 'https://pbs.twimg.com/media/D0rMrmxVYAAtXE-.jpg'
    } else if(result.toFixed(2) < 29.9){
        document.getElementById('resultbmi2').innerHTML = 'คุณ อ้วน'
        document.getElementById('img1').src = 'https://www.meme-arsenal.com/memes/18541be223c62600c2bc7953d645822e.jpg'
        
    } else {
        document.getElementById('resultbmi2').innerHTML = 'คุณ อ้วนมาก'
        document.getElementById('img1').src = 'https://www.meme-arsenal.com/memes/74e4c54677f78489ad55655d99571024.jpg'
    } 
}