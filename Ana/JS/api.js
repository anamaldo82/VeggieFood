const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0b4394fbc1msh563d5bd987e6cdap140d7djsn1c025ada8d35',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};
//add evenlistener (click, response()) 
const response = async() =>{
    try {
        const response = await fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&ranking=1&ignorePantry=true&number=5&language=es-ES', options);
        console.log(response);
        const result = await response.json();
        console.log(result);
        //tomar el id  de la etiqueta html, document.getElementById("id")
        //hacer funcion para reemplazar la imagen del html por la imagen de la api.
    } catch (error) {
        console.erro(error);
    }
}
 response()

//.then(response => response.json())
//.then(json => console.log(json))