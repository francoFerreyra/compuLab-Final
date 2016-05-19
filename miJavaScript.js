/**
 * Created by a.aliciardi on 19/05/2016.
 */
var clic = 1;

function divLogin() {
    if (clic == 1) {
        document.getElementById("caja").style.height = "500px";
        document.getElementById("Resultado").style.display = 'block';

        clic = clic + 1;
    } else {
        document.getElementById("caja").style.height = "0px";
        document.getElementById("Resultado").style.display = 'none';

        clic = 1;
    }
}