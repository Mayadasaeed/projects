
const api = "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"
const inp = document.getElementById('inp')
const images = document.querySelector('.images')
 
const getImages = async () => {
    // إجراء الطلب إلى OpenAI API
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // تحديد نوع الوسائط كـ JSON بشكل صحيح
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "512x512"
        })
    };

    // إرسال الطلب
    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    
    // جلب البيانات المستجابة كـ JSON
    const data = await res.json();
    const listImages = data.data;
    images.innerHTML = ``
    listImages.map(photo =>{
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src = photo.url
    })

}