function change() {
    var img1 = "file:///Users/eleonora/Desktop/OneDrive%20-%20momentum/%E2%80%93%E2%80%93%20ZHdK/2.%20Semester/zhdk_bitsandatoms/zhdk_charte_eli/zhdk_charte_eli/assets/Monster_1.svg",
        img2 = "./assets/Monster_2.svg";

    var imgElement = document.getElementById('img');
    console.log(imgElement.src);
    imgElement.src = (imgElement.src === img1)? img2 : img1;
 }